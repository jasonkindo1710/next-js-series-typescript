import { StudentDetail } from '@/components/swr'
import * as React from 'react'
import { useState } from 'react'

export default function SWRPage() {
    const [detailList, setDetailList] = useState([1,2,3])
    function HandleAddClick(){
        setDetailList(prevList => [...prevList, 1])
    }
  return (
    <div>
      <h1>SWR playground</h1>
      <button onClick={HandleAddClick}>Add Detail</button>
      <ul>
        {detailList.map((x,index) => (
            <li key={index}>
                <StudentDetail studentId="sktwi1cgkkuif36f3" />
            </li>
        ))}
        
      </ul>
    </div>
  )
}
