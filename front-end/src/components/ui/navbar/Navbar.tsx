import Image from 'next/image';
import Link from 'next/link';
import NavMenu from './Menu';
import { ModeToggle } from '../buttons';
export default function Navbar() {
  return (
    <>
      <nav className="w-full flex items-center  py-1 justify-between sticky top-0 sm:px-2 z-30   bg-primary">
        <div className=" hidden gap-10 sm:flex">
          <Link href="https://epklabs.com" target="_blank">
            <Image src="/logo.png" alt="EPKLogo" width={50} height={50} />
          </Link>
          <h1 className=" text-white hidden font-bold sm:inline-block text-sm sm:text-xl ">
            Open Facilities
          </h1>
        </div>
        <div className="justify-end">
          <NavMenu />
        </div>
        <div className="flex sm:hidden mr-4">
          <ModeToggle />
        </div>
      </nav>
    </>
  );
}
