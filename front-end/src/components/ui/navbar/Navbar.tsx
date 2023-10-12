import Image from 'next/image';
import Link from 'next/link';
import MobileNav from '@/components/ui/navbar/mobile/menu';
import Menu from './Menu';
export default function Navbar() {
	return (
		<>
			<nav className="w-full flex items-center py-1 justify-between sticky top-0 px-2 z-30   bg-primary">
				<div className="gap-10 flex">
					<Link href="https://epklabs.com" target="_blank">
						<Image
							src="/logo.png"
							alt="EPKLogo"
							width={50}
							height={50}
						/>
					</Link>
					<h1 className=" text-white font-bold inline-block text-xl ">
						Laurel Montana Facility Rentals
					</h1>
				</div>
				<div>
					<Menu />
				</div>
			</nav>
		</>
	);
}
