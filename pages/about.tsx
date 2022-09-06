// import Header from '@/components/common/header';
import { useRouter } from 'next/router'
import React from 'react'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
const Header = dynamic(() => import('@/components/common/header'), { ssr: false })

type Props = {}

const About = (props: Props) => {
  const [postList, setPostList] = useState([])
  const router = useRouter()
  console.log('About query:', router.query)
  const page = router.query?.page

  useEffect(() => {
    if(!page) return;
    (async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
      const data = await response.json()
      setPostList(data.data)
      //useSWR()
    })()
  }, [page])
  const handleNextClick = () => {
    router.push({
      pathname: '/about',
      query: {
        page: (Number(page) || 1) + 1,
      }
    }, undefined, {shallow: true})
  }
  return (
    <div>
      <h1>About Page</h1>
      <Header />
      <ul className='post-list'>
        {postList.map((post: any) => <li key={post.id}>{post.title}</li>)}
      </ul>
      <button onClick={handleNextClick}>Next page</button>
    </div>
  )
}
export async function getStaticProps(){
  console.log('\nget static props');
  
  return {
    props: {}
  }
}

// export function getServerSideProps() {
//   return {
//     props: {},
//   }
// }

export default About
