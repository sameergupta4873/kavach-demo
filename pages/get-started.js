import React from 'react'
import Statics from '../components/Statics'
import Infected from '../components/Infected'

const GetStarted = () => {
  return (
    <div className='mt-[10vh]' >
        <div className='w-[100vw] ml-28'>
            <Statics />
            <Infected />
        </div>
    </div>
  )
}

export default GetStarted