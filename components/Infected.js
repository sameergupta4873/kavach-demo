import { useRouter } from 'next/router';
import React from 'react'

const Infected = () => {
    const router = useRouter();
    const infectedFiles = [
        { name: 'virus.exe', size: '2.5 MB', date: '2021-08-12', device: 'Macbook Pro' },
        { name: 'malware.doc', size: '1.2 MB', date: '2021-08-12', device: 'Windows' },
        { name: 'trojan.pdf', size: '3.8 MB', date: '2021-08-12', device: 'Mobile' },
    ];
    return (
        <div className="bg-white rounded-lg p-4 w-[85vw] my-5">
            <div className='flex justify-between w-[80vw]'>
                <h2 className="text-blue-500 font-bold text-lg mb-4">Infected Files List</h2>
                <div onClick={()=> router.push('/devices')} className='bg-blue-600 inline-block text-white py-2 rounded-md px-3 my-2 cursor-pointer'>View more</div>
            </div>
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse w-[82vw]">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 font-medium text-left">Device</th>
                            <th className="py-2 px-4 font-medium text-left">File Name</th>
                            <th className="py-2 px-4 font-medium text-left">File Size</th>
                            <th className="py-2 px-4 font-medium text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {infectedFiles.map((file, index) => (
                            <tr key={index} className="border-b border-gray-300">
                                <td className="py-2 px-4">{file.device}</td>
                                <td className="py-2 px-4">{file.name}</td>
                                <td className="py-2 px-4">{file.size}</td>
                                <td className="py-2 px-4">{file.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Infected