import Image from "next/image";
import React from 'react';
import Link from 'next/link';
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-bold text-gray-800 text-center mb-4">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <ul className="space-y-3">
          <li>
            <Link
              href="/week-2"
              className="block w-full text-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-green-300 hover:shadow transition"
            >
              Week 2 Assignment
            </Link>
          </li>
          <li>
            <Link
              href="/week-3"
              className="block w-full text-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-green-300 hover:shadow transition"
            >
              Week 3 Assignment
            </Link>
          </li>
          <li>
            <Link
              href="/week-4"
              className="block w-full text-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-green-300 hover:shadow transition"
            >
              Week 4 Assignment
            </Link>
          </li>
          <li>
            <Link
              href="/week-5"
              className="block w-full text-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-green-300 hover:shadow transition"
            >
              Week 5 Assignment
            </Link>
          </li>
          <li>
            <Link
              href="/week-6"
              className="block w-full text-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-green-300 hover:shadow transition"
            >
              Week 6 Assignment
            </Link>
          </li>
          <li>
            <Link
              href="/week-7"
              className="block w-full text-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-green-300 hover:shadow transition"
            >
              Week 7 Assignment
            </Link>
          </li>
          <li>
            <Link
              href="/week-8"
              className="block w-full text-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-green-300 hover:shadow transition"
            >
              Week 8 Assignment
            </Link>
          </li>
          <li>
            <Link
              href="/week-9"
              className="block w-full text-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-green-300 hover:shadow transition"
            >
              Week 9 Assignment
            </Link>
          </li>
          <li>
            <Link
              href="/week-10"
              className="block w-full text-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-green-300 hover:shadow transition"
            >
              Week 10 Assignment
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
