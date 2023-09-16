'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Close from './close.svg';
import Link from 'next/link';
import Menu from './menu.svg';

export default function MobileNav() {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <div className="sm:hidden flex flex-1 justify-end items-center">
      <Image
        src={toggle ? Close : Menu}
        width={28}
        height={28}
        alt="menu"
        className="w-[28px] h-[28px] object-contain cursor-pointer"
        onClick={() => setToggle(!toggle)}
      />
      <div
        className={`${
          !toggle ? 'hidden' : 'flex'
        } p-6 bg-slate-300 dark:bg-slate-600 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <ul className="list-none flex justify-end items-start flex-col gap-4">
          <li>
            <Link
              className={`${
                active === 'home'
                  ? 'text-slate-900 dark:text-slate-100'
                  : 'text-slate-400 dark:text-slate-500'
              } cursor-pointer text-[16px] font-medium`}
              href="/"
              onClick={() => {
                setToggle(!toggle);
                setActive('home');
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${
                active === 'facilities'
                  ? 'text-slate-900 dark:text-slate-100'
                  : 'text-slate-400 dark:text-slate-500'
              } cursor-pointer text-[16px] font-medium`}
              href="/facilities"
              onClick={() => {
                setToggle(!toggle);
                setActive('facilities');
              }}
            >
              Facilities
            </Link>
          </li>
          <li>
            <Link
              className={`${
                active === 'account'
                  ? 'text-slate-900 dark:text-slate-100'
                  : 'text-slate-400 dark:text-slate-500'
              } cursor-pointer text-[16px] font-medium`}
              href="/account"
              onClick={() => {
                setToggle(!toggle);
                setActive('account');
              }}
            >
              Account
            </Link>
          </li>
          <li>
            <button
              className={`${
                active === 'signIn'
                  ? 'text-slate-900 dark:text-slate-100'
                  : 'text-slate-400 dark:text-slate-500'
              } cursor-pointer text-[16px] font-medium`}
              onClick={() => {
                setToggle(!toggle);
                setActive('signIn');
                signIn();
              }}
            >
              Sign in
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
