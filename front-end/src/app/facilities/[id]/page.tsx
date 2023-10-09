import { Category, Events } from '@prisma/client';
import { ExternalLink } from 'lucide-react';

import Link from 'next/link';
import Image from 'next/image';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import moment from 'moment';
import { ScrollArea } from '@/components/ui/scroll-area';

export async function generateStaticParams() {
	const facilities = await fetch(
		process.env.NEXT_PUBLIC_HOST + `/api/facilities`
	).then((res) => res.json());
	return facilities.map((facility: any) => ({
		id: facility.id.toString(),
	}));
}

export default async function facilityPage({
	params,
}: {
	params: {
		id: string;
	};
}) {
	const res = await fetch(
		process.env.NEXT_PUBLIC_HOST + `/api/facilities/${params.id}`
	);
	const facility = await res.json();
	const { id, name, address, building, capacity, imagePath, Category, Events } =
		facility;
	const catID = Number(facility.Category.id);
	const map = `https://www.google.com/maps/search/?api=1&query=${address}`;

	return (
		<TooltipProvider>
			<div className="flex h-full mb-10  justify-center p-5 m-5 gap-2 ">
				<div>
					<h1 className="font-bold text-4xl drop-shadow">{name}</h1>
					<h2 className="font-bold text-xl drop-shadow text-gold">
						{building} ⋅ Max Capacity: {capacity}{' '}
					</h2>
					<Link href={map} target="_blank">
						{address} <ExternalLink className="inline-block scale-75" />
					</Link>

					{imagePath ? (
						<Image
							src={imagePath}
							alt={name}
							width={600}
							height={600}
							className="drop-shadow-md shadow-md"
						/>
					) : (
						<Image
							src="/logo.jpg"
							alt={name}
							width={480}
							height={480}
							className=" drop-shadow-xl"
						/>
					)}
				</div>
				<div className=" p-4 gap-3  ">
					<div className=" bg-gold text-white text-center hover:bg-secondaryDark sm:transition ease-in-out sm:hover:scale-110 font-bold py-2 px-4 border-b-4 shadow-sm drop-shadow-lg w-[220px] border-secondaryDark rounded ">
						<Link
							href={{
								pathname: '/reservation',
								query: {
									id: id,
									facilityName: name,
									facilityBuilding: building,
								},
							}}
							className="font-bold text-xl drop-shadow-lg hover:animate-bounce"
						>
							{' '}
							Request a rental{' '}
						</Link>
					</div>
					<div className="p-4 border-4 my-3 mr-4 max-w-md items-end justify-between">
						<h1 className="font-bold text-2xl border-b-2">Pricing</h1>
						{Category &&
							Category.map((category: Category) => (
								<div key={catID} className="grid grid-cols-3   p-4">
									<Tooltip>
										<TooltipTrigger className="font-semibold text-left col-start-1  col-span-2 text-lg truncate">
											{category.name}
										</TooltipTrigger>
										<TooltipContent>
											<p className=" flex-wrap flex w-[240px]">
												{category.description}
											</p>
										</TooltipContent>
									</Tooltip>
									{facility.name === 'Laurel Stadium' ? (
										<p className="justify-around align-bottom items-end font-semibold text-lg text-right self-end col-start-3 justify-items-end right-0 left-9 ">
											${category.price}
										</p>
									) : (
										<p className="justify-around align-bottom items-end font-semibold text-lg text-right self-end col-start-3 justify-items-end right-0 left-9 ">
											${category.price} / hr
										</p>
									)}
								</div>
							))}
					</div>
					<ScrollArea className="h-[400px] w-[480px] rounded-md border p-4">
						<h1 className="font-bold text-2xl border-b-2">Upcoming Events</h1>
						{Events &&
							[...Events]
								.sort(
									(a, b) =>
										new Date(a.start).getTime() - new Date(b.start).getTime()
								)
								.map((event: Events) => (
									<div key={event.id}>
										<div className="grid grid-cols-2 border-b   p-4">
											<h3 className=" col-start-1">{event.title}</h3>
											<p className="bg-transparent text-sm">
												{moment(event.start).format(
													'ddd, MMM Do YYYY,  h:mm a'
												)}{' '}
												{' to '} {moment(event.end).format('h:mm a')}
											</p>
										</div>
									</div>
								))}
					</ScrollArea>
				</div>
			</div>
		</TooltipProvider>
	);
}
