import Image from "next/image";
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1> CPRG 306: Web Development 2 - Assignments</h1>
      <p><Link href="/week-2">
        Go to Week 2 Assignment
      </Link></p>
      <p><Link href="/week-3">
        Go to Week 3 Assignment
      </Link></p>
    </div>
  );
};

export default HomePage;
