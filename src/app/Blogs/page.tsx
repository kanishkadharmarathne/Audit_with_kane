"use client";
import React, { useEffect, useState } from 'react';
import BlogCard from '../../Compenents/BlogCard';

const page = () => {
  const [blogs, setBlogs] = useState<Array<{_id: string; title: string; content: string; author: string; date: string}>>([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className='bg-white min-h-screen flex flex-col items-center px-10 py-20'>
      <h4 className='text-lg font-semibold text-amber-700'>Blogs page</h4>
      <h1 className='text-4xl font-bold text-center mt-10 text-black'>Insights & Updates from Our Experts</h1>
      <h3 className='text-2xl font-bold text-center mt-5 text-black'>Stay informed with the latest updates in auditing, taxation, compliance, and financial advisory.</h3>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>
        {blogs.map(blog => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </div>
    </div>
  )
}

export default page