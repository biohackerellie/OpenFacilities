import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className=" flex   bg-transparent  justify-center  text-center gap-10 p-10  z-0  h-full">
        <div className="  ">
          <h1 className=" flex font-bold  text-3xl sm:text-5xl  drop-shadow-md border-b  mb-10 justify-center  ">
            Open Facilities
          </h1>
          <div className="block flex-1"> </div>
          <div className=" mb-10 flex justify-center max-w-7xl  align-middle">
            <p className=" bg-transparent text-xl sm:text-3xl drop-shadow-md mt-4 mb-10 dark:text-white p-3 text-black ">
              Hey there! 👋 I'm working on Open Facilities, an open-source
              facilities reservation app designed specifically with school
              districts in mind. The project is currently in progress and
              targeting a 1.0 release. You can either self-host it for free or
              opt for a paid SaaS solution once it's out. You can see it in
              action on its first official live usage for Laurel Public Schools
              in Montana at{' '}
              <Link href="https://facilities.laurel.k12.mt.us">
                https://facilities.laurel.k12.mt.us
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
