import Image from 'next/image';
import Link from 'next/link';
import MobileNav from '@/components/ui/navbar/mobile/menu';
import NavMenu from './Menu';
export default function Navbar() {
	return (
		<>
			<nav className="w-full flex items-center  py-1 justify-between fixed top-0 sm:px-2 z-30   bg-primary">
				<div className=" hidden gap-10 sm:flex">
					<Link href="https://laurel.k12.mt.us" target="_blank">
						<Image
							src="/logo-white.png"
							alt="LPS Logo"
							width={50}
							height={50}
						/>
					</Link>
					<h1 className=" text-white hidden font-bold sm:inline-block text-sm sm:text-xl ">
						Laurel Montana Facility Rentals
					</h1>
				</div>
				<div className="justify-end" >
					<NavMenu />
				</div>
			</nav>
		</>
	);
}
