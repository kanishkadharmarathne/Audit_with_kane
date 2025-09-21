import React from "react";

const DashboardPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-white p-8">
            <h1 className="text-4xl font-bold text-amber-700">Admin Dashboard</h1>
            <div className="mt-4 flex flex-row items-center gap-10">
                <a href="/Dashboard/appoitment">
                    <button className='bg-amber-700 text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-gray-500 transition-colors'>
                        Appoitments
                    </button>
                </a>
                <a href="/Dashboard/blog">
                    <button className='bg-amber-700 text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-gray-500 transition-colors'>
                        Blogs
                    </button>
                </a>
                <a href="/Dashboard/inq">
                    <button className='bg-amber-700 text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-gray-500 transition-colors'>
                        Inquiries
                    </button>
                </a>
            </div>
            <div >

            </div>

        </div>
    );
};

export default DashboardPage;