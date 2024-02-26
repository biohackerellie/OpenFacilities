import React from 'react';
import TosModal from '../forms/tos';
import Contact from './alerts/contact';
import { IssuesForm } from '../forms';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="hidden sm:flex text-gray-600 dark:text-gray-300 flex-row mt-5  fixed bottom-0  bg-opacity-90 backdrop-blur-md bg-darkMode max-h-10     left-0 right-0  border-t-gray-300 justify-around  items-center  p-2 w-full  border-t">
      <div className="flex items-center text-center">
        <a href="https://laurel.k12.mt.us" target="_blank">
          © {year} Laurel Public Schools
        </a>
      </div>
      <span>
        <IssuesForm />
      </span>
      <span className="mx-2">
        <TosModal />
      </span>
      <span>
        <Contact />
      </span>
      <div className="text-center right-0 ">
        <a
          href="https://github.com/biohackerellie/OpenFacilities"
          target="_blank"
        >
          Powered by Open Facilities
        </a>
      </div>
    </footer>
  );
}
