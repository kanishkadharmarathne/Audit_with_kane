import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white p-8">
      <h2 className='text-4xl font-bold mb-4 text-amber-700'>Inquiries Page</h2>
      <table className="min-w-full bg-white border border-gray-800 items-center">
        <thead>
          <tr>
            <th className="py-2 px-4 text-2xl border-b text-black font-bold text-center">Name</th>
            <th className="py-2 px-4 text-2xl border-b text-black font-bold text-center">Email</th>
            <th className="py-2 px-4 text-2xl border-b text-black font-bold text-center">Message</th>
            <th className="py-2 px-4 text-2xl border-b text-black font-bold text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row, replace with dynamic data */}
          <tr>
            <td className="text-black py-2 px-4 border-b align-middle text-center">John Doe</td>
            <td className="text-black py-2 px-4 border-b align-middle text-center">john@example.com</td>
            <td className="text-black py-2 px-4 border-b align-middle text-center">Hello, I have a question.</td>
            <td className="py-2 px-4 border-b align-middle flex gap-2 justify-center">
              <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Save</button>
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default page;