import React from 'react'

const Downloadd = () => {
    return (
        <div className='flex'>
            <img src='/play.jpg' className='h-[5ovh] w-[50vw] px-20 border-r-2 border-gray-200' />
            <div className='px-20  text-center'>
                <h1 className='text-3xl ml-8 my-5 text-blue-600'>Download for Macos</h1>
                <div className='bg-blue-600 text-white p-5 rounded-lg ml-10'>
                    <h1 className='text-3xl'>18.16.0 LTS</h1>
                    <h1 className='text-lg'>Recommended For Most Users</h1>
                </div>
                <div className='bg-blue-600 text-white p-5 rounded-lg ml-10 mt-5'>
                    <h1 className='text-3xl'>20.0.0 Current</h1>
                    <h1 className='text-lg'>Latest Features</h1>
                </div>
            </div>
        </div>
    )
}

export default Downloadd