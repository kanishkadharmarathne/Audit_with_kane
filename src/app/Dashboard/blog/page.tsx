"use client";
import React, { useState } from 'react';

const page = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white p-8">
      <h2 className='text-4xl font-bold mb-6 text-amber-700'>Blogs Page</h2>
      <button 
        onClick={() => setShowPopup(true)} 
        className='bg-amber-700 text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-amber-800 transition-colors mb-8'
      >
        Create New Blog
      </button>
      <table className="min-w-full bg-white border border-gray-800 items-center">
        <thead>
          <tr>
            <th className="font-bold text-2xl py-2 px-4 border-b text-black text-center">Title</th>
            <th className="font-bold text-2xl py-2 px-4 border-b text-black text-center">Content</th>
            <th className="font-bold text-2xl py-2 px-4 border-b text-black text-center">Author</th>
            <th className="font-bold text-2xl py-2 px-4 border-b text-black text-center">Date</th>
            <th className="font-bold text-2xl py-2 px-4 border-b text-black text-center">Link</th>
            <th className="font-bold text-2xl py-2 px-4 border-b text-black text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row, replace with dynamic data */}
          <tr>
            <td className="py-2 px-4 border-b align-middle text-center text-black">Understanding React</td>
            <td className="py-2 px-4 border-b align-middle text-center text-black">A deep dive into React components and hooks.</td>
            <td className="py-2 px-4 border-b align-middle text-center text-black">John Doe</td>
            <td className="py-2 px-4 border-b align-middle text-center text-black">2025-09-21</td>
            <td className="py-2 px-4 border-b align-middle text-center text-black">/blogs/understanding-react</td>
            <td className="py-2 px-4 border-b align-middle flex gap-2 justify-center">
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Popup Modal for Creating New Blog */}
      {showPopup && (
        <div className="fixed inset-0 bg-white bg-opacity-10 flex items-center justify-center z-50">
          <div className="bg-gray-500 p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-white">Create New Blog</h2>
            <form>
              <input type="text" placeholder="Title" className="w-full mb-2 p-2 border rounded text-black" />
              <textarea placeholder="Content" className="w-full mb-2 p-2 border rounded text-black" rows={4} />
              <input type="text" placeholder="Author" className="w-full mb-2 p-2 border rounded text-black" />
              <div className="flex justify-end gap-2 mt-4">
                <button type="button" onClick={() => setShowPopup(false)} className="bg-gray-400 px-4 py-2 rounded">Cancel</button>
                <button type="submit" className="bg-amber-700 text-white px-4 py-2 rounded">Create</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default page;