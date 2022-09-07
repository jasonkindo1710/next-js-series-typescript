import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router'
import React from 'react'

export interface PostListPageProps {
  post: any
}

const PostDetailPage = ({ post }: PostListPageProps) => {
  const router = useRouter();
  if(router.isFallback){
    return <div style={{fontSize: '2rem', textAlign:'center'}}>Loading ...</div>
  }
  
  if(!post) return null;
  return (
    <div>
      <h1>
        Post Detail Page
      </h1>
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.description}</p>
    </div>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  console.log('\nget static paths');
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json()
  
  return {
    paths: data.data.map((post: any) => ({params: {postId: post.id}})),
    fallback: true,
  }
}


export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  //serverside runs at build time
  console.log('get static props', context.params?.postId);
  const postId = context.params?.postId;
  if (!postId) return {notFound: true}

  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)
  const data = await response.json()
  
  return {
    props: {
      post: data,
    },
    revalidate: 5,
  }
}

export default PostDetailPage