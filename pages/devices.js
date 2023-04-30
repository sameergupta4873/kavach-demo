import { useRouter } from 'next/router';
import React from 'react'

const Devices = () => {
    const router = useRouter();
    const devices = [
        { name: 'Desktop', imageUrl: 'https://m.media-amazon.com/images/I/61ogPth2lzL._AC_UY436_FMwebp_QL65_.jpg', infectedFiles: 2, lastScan: '2023-04-29' },
        { name: 'Laptop', imageUrl: 'https://m.media-amazon.com/images/I/61cCf94xIEL._AC_UY436_FMwebp_QL65_.jpg', infectedFiles: 1, lastScan: '2023-04-28' },
        { name: 'Tablet', imageUrl: 'https://m.media-amazon.com/images/I/51rrWvzviVL._AC_UY436_FMwebp_QL65_.jpg', infectedFiles: 0, lastScan: '2023-04-27' },
        { name: 'Smartphone', imageUrl: 'https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UY436_FMwebp_QL65_.jpg', infectedFiles: 3, lastScan: '2023-04-26' },
    ];
    return (
        <div className="bg-white rounded-lg p-4 w-full ml-32 my-24">
            <h2 className="text-blue-500 font-bold text-lg mb-4">Connected Devices</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {devices.map((device, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                        <img src={device.imageUrl} alt={device.name} className="w-full h-40 object-cover" />
                        <div className="px-4 py-2">
                            <h3 className="font-bold text-lg">{device.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">Last Scan: {device.lastScan}</p>
                            <p className="text-sm text-gray-500 mb-2">Infected Files: {device.infectedFiles}</p>
                            <button onClick={()=> router.push('/report')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Devices