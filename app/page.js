'use client'
import Thoughts from '@/components/thoughts/Thoughts'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data,setData] = useState(null)
  
  useEffect(() => {
    async function getAffirmation(){
      const res= await fetch('/api/affirmation')
      const data = await res.json()
      setData(data)
    }
    getAffirmation();
  },[])
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {data && data.data.quote}

     <Thoughts/>
    </main>
  )
}
