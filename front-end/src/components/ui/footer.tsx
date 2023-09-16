import React from 'react';
import { TosModal, BugModal } from '../forms';

export default function Footer() {
  return (
    <footer className="hidden sm:flex text-gray-400 dark:text-gray-300 flex-row mt-5  fixed bottom-0  bg-opacity-90 backdrop-blur-md bg-darkMode max-h-10     left-0 right-0  border-t-gray-300 justify-around  items-center  p-2 w-full  border-t">
      <div className="flex items-center text-center">
        <a href="https://laurel.k12.mt.us" target="_blank">
          © 2023 Laurel Public Schools
        </a>
      </div>
      <span className="mx-2">
        <TosModal />
      </span>
      <div>
        <BugModal> Report a Bug</BugModal>
      </div>

      <div className="flex items-center text-center pl-5 ">
        <a href="https://github.com/biohackerellie" target="_blank">
          Designed and Built by Ellie Kerns
        </a>
      </div>
    </footer>
  );
}
