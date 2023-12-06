import React, { useState } from 'react';
import Link from 'next/link';

export default function Dropdown() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        onBlur={() => setShowDropdown(false)}
      >
        Admin
      </button>
      {showDropdown && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md py-2 mt-1 transition-opacity duration-300 opacity-100">
          <Link
            href="/reservations"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Option 1
          </Link>
          <Link
            href="/users"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Option 2
          </Link>
          <Link
            href="/requests"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Option 3
          </Link>
        </div>
      )}
    </>
  );
}
