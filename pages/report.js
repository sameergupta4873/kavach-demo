import React from 'react'

const report = () => {
    const devices = [
        {
            "name": "Device 1",
            "lastScan": "2023-04-30 12:00:00",
            "ip": "192.168.1.100",
            "ports": ["22", "80", "443"],
            "connections": ["192.168.1.101:80", "192.168.1.102:443"],
            "files": ["malware.exe", "virus.dll"],
            "services": ["ssh", "http", "https"],
            "locations": ["C:/Windows/System32", "/var/www/html"],
            "description": "This is a description of Device 1.",
            "imageUrl": "https://m.media-amazon.com/images/I/61ogPth2lzL._AC_UY436_FMwebp_QL65_.jpg"
        },
        {
            "name": "Device 2",
            "lastScan": "2023-04-29 15:30:00",
            "ip": "192.168.1.102",
            "ports": ["22", "53", "3389"],
            "connections": ["192.168.1.100:80", "192.168.1.101:443"],
            "files": ["trojan.exe", "worm.dll"],
            "services": ["ssh", "dns", "rdp"],
            "locations": ["C:/Program Files", "/home/user/Documents"],
            "description": "This is a description of Device 2.",
            "imageUrl": "https://m.media-amazon.com/images/I/61cCf94xIEL._AC_UY436_FMwebp_QL65_.jpg"
        },

        {
            "name": "Device 3",
            "lastScan": "2023-04-28 08:45:00",
            "ip": "192.168.1.103",
            "ports": ["22", "80", "3306"],
            "connections": ["192.168.1.101:443", "192.168.1.104:3306"],
            "files": ["ransomware.exe", "keylogger.dll"],
            "services": ["ssh", "http", "mysql"],
            "locations": ["C:/Program Files (x86)", "/var/log"],
            "description": "This is a description of Device 3.",
            "imageUrl": "https://m.media-amazon.com/images/I/51rrWvzviVL._AC_UY436_FMwebp_QL65_.jpg"
        },

        {
            "name": "Device 4",
            "lastScan": "2023-04-27 10:15:00",
            "ip": "192.168.1.104",
            "ports": ["22", "443", "5900"],
            "connections": ["192.168.1.103:3306", "192.168.1.105:5900"],
            "files": ["backdoor.exe", "spyware.dll"],
            "services": ["ssh", "https", "vnc"],
            "locations": ["C:/Windows", "/home/user/Pictures"],
            "description": "This is a description of Device 4.",
            "imageUrl": "https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UY436_FMwebp_QL65_.jpg"
        }

    ];
    const device = {
        "name": "Device 4",
        "lastScan": "2023-04-27 10:15:00",
        "ip": "192.168.1.104",
        "ports": ["22", "443", "5900"],
        "connections": ["192.168.1.103:3306", "192.168.1.105:5900"],
        "files": ["backdoor.exe", "spyware.dll"],
        "services": ["ssh", "https", "vnc"],
        "locations": ["C:/Windows", "/home/user/Pictures"],
        "description": "This is a description of Device 4.",
        "imageUrl": "https://source.unsplash.com/random/500x500"
    };
    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-full mt-[3vh]">
            {devices && devices.map((device, index) => {
                return (
                    <div key={index} className="flex flex-row py-20">
                        <div className="w-full sm:w-1/3 mx-10">
                            <img src={device.imageUrl} alt={device.name} className="w-full h-auto object-cover rounded-lg" />
                        </div>
                        <div className="w-full sm:w-2/3">
                            <h2 className="text-blue-500 font-bold text-lg mb-4">{device.name}</h2>
                            <p className="text-gray-500 mb-4">Last Scan: {device.lastScan}</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md p-5">
                                    <h3 className="text-gray-500 font-bold text-lg mb-2">IP Address</h3>
                                    <p className="text-gray-700">{device.ip}</p>
                                </div>
                                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md px-5 py-2">
                                    <h3 className="text-gray-500 font-bold text-lg mb-2">Ports</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        {device.ports.map((port, index) => (
                                            <li key={index}>{port}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md px-5 py-2">
                                    <h3 className="text-gray-500 font-bold text-lg mb-2">Connections</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        {device.connections.map((connection, index) => (
                                            <li key={index}>{connection}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md px-5 py-2">
                                    <h3 className="text-gray-500 font-bold text-lg mb-2">Files</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        {device.files.map((file, index) => (
                                            <li key={index}>{file}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md px-5 py-2">
                                    <h3 className="text-gray-500 font-bold text-lg mb-2">Services</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        {device.services.map((service, index) => (
                                            <li key={index}>{service}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md px-5 py-2">
                                    <h3 className="text-gray-500 font-bold text-lg mb-2">Locations</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        {device.locations.map((location, index) => (
                                            <li key={index}>{location}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md col-span-2 px-5 py-2">
                                    <h3 className="text-gray-500 font-bold text-lg mb-2">Description</h3>
                                    <p className="text-gray-700">{device.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default report