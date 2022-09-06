import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const ParamsPage = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <h1>
        Params Page
      </h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  )
}

export async function getServerSideProps() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default ParamsPage