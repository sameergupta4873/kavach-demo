import Link from 'next/link'
import React from 'react'

const Statics = () => {
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
                <div class="text-center md:border-r">
                    <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">25</h6>
                    <Link href='/devices' class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base hover:underline cursor-pointer">
                        Total Devices
                    </Link>
                </div>
                <div class="text-center md:border-r">
                    <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">14</h6>
                    <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                        Infected Devices
                    </p>
                </div>
                <div class="text-center">
                    <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">36</h6>
                    <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                        Infected Files
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Statics