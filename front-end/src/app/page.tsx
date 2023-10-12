import Link from 'next/link';

export default function Home() {
	return (
		<>
			<main className=" flex   bg-transparent  justify-center  text-center gap-10 p-10  z-0  h-full">
				<div className="  ">
					<h1 className=" flex font-bold  text-3xl sm:text-5xl text-black drop-shadow-md border-b dark:text-gold mb-10 justify-center  ">
						Open Facilities
					</h1>
					<div className="block flex-1"> </div>
					<div className=" mb-10 flex justify-center max-w-7xl  align-middle">
						<p className=" bg-transparent text-xl sm:text-3xl drop-shadow-md mt-4 mb-10 dark:text-white p-3 text-black ">
							Hey there! 👋 I'm working on Open Facilities, an open-source facilities reservation app designed specifically with school districts in mind. The project is currently in progress and targeting a 1.0 release. You can either self-host it for free or opt for a paid SaaS solution once it's out. You can see it in action on its first official live usage for Laurel Public Schools in Montana at <Link href="https://facilities.laurel.k12.mt.us">https://facilities.laurel.k12.mt.us</Link>
						</p>
					</div>
					<div className=" sm:flex flex-row hidden sm:visible justify-between my-10">
						<div className=" border hover:scale-105 border-gray-200 bg-opacity-60 bg-clip-padding backdrop-blur-md animate-enterFromLeftOne ease-in-out  w-60 h-20 bg-white dark:bg-slate-700  rounded-full font-bold shadow-lg shadow-primary  dark:bg-opacity-20 text-2xl  flex justify-center items-center">
							<Link href="/calendar" className="drop-shadow-sm">
								{' '}
								View the Calendar{' '}
							</Link>
						</div>

						<div className=" border hover:scale-105 border-gray-200 bg-opacity-60 bg-clip-padding backdrop-blur-md animate-enterFromLeftTwo ease-in-out  w-60 h-20 bg-white dark:bg-slate-700  rounded-full font-bold shadow-lg shadow-primary  dark:bg-opacity-20 text-2xl  flex justify-center items-center">
							<Link href="/reservation" className="drop-shadow-sm">
								{' '}
								Reserve now!{' '}
							</Link>
						</div>
						<div className=" border hover:scale-105 border-gray-200 bg-opacity-60 bg-clip-padding backdrop-blur-md animate-enterFromLeftThree ease-in-out  w-60 h-20 bg-white dark:bg-slate-700  rounded-full font-bold shadow-lg shadow-primary  dark:bg-opacity-20 text-2xl  flex justify-center items-center">
							<Link href="/facilities" className="drop-shadow-sm">
								{' '}
								View our Facilities{' '}
							</Link>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
