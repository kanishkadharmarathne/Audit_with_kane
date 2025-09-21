import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white p-8">
      <h2 className='text-4xl font-bold mb-4 text-amber-700'>Appointments Page</h2>
      <table className="min-w-full bg-white border border-gray-800 items-center">
        <thead>
          <tr>
            <th className="font-bold text-2xl py-2 px-4 border-b text-black text-center">Name</th>
            <th className="font-bold text-2xl py-2 px-4 border-b text-black text-center">Company Name</th>
            <th className="font-bold text-2xl py-2 px-4 border-b text-black text-center">Email</th>
            <th className="font-bold text-2xl py-2 px-4 border-b text-black text-center">Date</th>
            <th className="font-bold text-2xl py-2 px-4 border-b text-black text-center">Time</th>
            <th className="font-bold text-2xl py-2 px-4 border-b text-black text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row, replace with dynamic data */}
          <tr>
            <td className="py-2 px-4 border-b align-middle text-center text-black">Jane Smith</td>
            <td className="py-2 px-4 border-b align-middle text-center text-black">Acme Corp</td>
            <td className="py-2 px-4 border-b align-middle text-center text-black">jane@acme.com</td>
            <td className="py-2 px-4 border-b align-middle text-center text-black">2025-09-21</td>
            <td className="py-2 px-4 border-b align-middle text-center text-black">10:00 AM</td>
            <td className="py-2 px-4 border-b align-middle flex gap-2 justify-center">
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Confirm</button>
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default page;