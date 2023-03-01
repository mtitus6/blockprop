
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

const Home  = () => {
    const [blockID, setBlockId] = useState("")

    return (
        <div className="flex flex-col items-center justify-center py-8 gap-y-3">
         {/* Input boxes */}
        <input onChange={(e)=>{setBlockId(e.target.value); fetchPage("")}} value = {blockID} type={"text"} placeholder="Enter Block Number"></input>
        <button className={"disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"} 
          onClick={
            () => 
              { 
          }
        }>Let's go! </button>
        </div>
    )
    
    

    
  
}

export default Home
