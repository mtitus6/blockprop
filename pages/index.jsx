
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

const Home  = () => {
    const [validatorID, setValidatorID] = useState("")
    const [blocks, setBlocks] = useState([])

    const fetchBlocks = async () => {
      if (validatorID.length) {
        var requestOptions = {
          method: 'GET'
        };
        
        const api_key = process.env.BEACONCHAIN_API_KEY
        const fetchURL = `https://beaconcha.in/api/v1/execution/${validatorID}/produced?apikey=${api_key}`
        const block = await fetch(fetchURL, requestOptions).then(data => data.json())
        if (block) {
          console.log("Block data:", block)
          setBlocks(block.data)
        }
      }
    }
    
    
    return (
        <div className="flex flex-col items-center justify-center py-8 gap-y-3">
        <input className="w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50" onChange={(e)=>{setValidatorID(e.target.value)}} value={validatorID} type={"text"} placeholder="Add Validator Index"></input>
        <button className={"disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"} 
          onClick={
            () => 
              { 
                fetchBlocks();
          }
        }>Let's go! </button>
        </div>
    )
 
}

export default Home
