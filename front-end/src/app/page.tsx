import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className=" flex mt-10  bg-transparent  justify-center align-middle  text-center gap-10 p-10  z-0  ">
        <div className="  ">
          <h1 className=" flex font-bold  text-3xl sm:text-5xl text-black drop-shadow-md border-b dark:text-gold mb-10 justify-center  ">
            Laurel Public Schools Facility Rentals
          </h1>
          <div className="block flex-1"> </div>
          <div className=" mb-10 hidden sm:flex justify-center max-w-7xl  align-middle">
            <p className=" bg-transparent text-xl sm:text-3xl drop-shadow-md mt-4 mb-10 dark:text-white p-3 text-black ">
              Welcome! The facilities at Laurel Public Schools are available to
              the community for educational, civic, cultural, and other
              noncommercial uses consistent with the public interest, when such
              use will not interfere with the school program or school-sponsored
              activities.
            </p>
          </div>
          <div className=" flex flex-col sm:flex-row  sm:visible justify-center sm:justify-between gap-y-4 items-center my-10">
            <div className=" border hover:scale-105 border-gray-200 bg-opacity-60 bg-clip-padding backdrop-blur-md animate-enterFromLeftOne ease-in-out  w-60 h-20 bg-white dark:bg-slate-700  rounded-full font-bold shadow-lg shadow-primary  dark:bg-opacity-20 text-2xl hidden sm:flex justify-center items-center">
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
