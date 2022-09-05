import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const About = (props: Props) => {
    const router = useRouter();
  console.log('About query:', router.query);

  
    return (
    <div>About</div>
  )
}

export function getServerSideProps(){
    return {
        props: {},
    }
}

export default About