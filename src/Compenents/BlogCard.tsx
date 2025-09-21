import React from 'react';

interface BlogCardProps {
  title: string;
  content: string;
  author: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, content, author, date }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-xl">
    <h2 className="text-2xl font-bold text-amber-700 mb-2">{title}</h2>
    <p className="text-gray-700 mb-4">{content}</p>
    <div className="flex justify-between text-sm text-gray-500">
      <span>By {author}</span>
      <span>{date}</span>
    </div>
    <button className="mt-4 bg-amber-700 text-white py-2 px-4 rounded">
      Read More
    </button>
  </div>
);

export default BlogCard;