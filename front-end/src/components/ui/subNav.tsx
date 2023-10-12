'use client';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import React, { useState } from 'react';
import { Button } from './buttons';
import { usePathname } from 'next/navigation';

export default function SubNav() {
	const pathname = usePathname();
	const isActive = (path: string) => pathname === path;
	return (
		<>
			<Separator className=" border-gray-400" />
			<div className="flex h-5 items-center space-x-4 text-sm">
				<div>
					<Button
						className={`${isActive('/facilities') ? 'text-blue-500' : 'text-foreground'
							}`}
						variant="link"
						asChild
					>
						<Link className="hover:animate-pulse" href="/facilities">
							All Facilities
						</Link>
					</Button>
				</div>
				<Separator orientation="vertical" />

				<div>
					<Button
						className={`${isActive('/Admin') ? 'text-blue-500' : 'text-foreground'
							}`}
						variant="link"
						asChild
					>
						<Link className="hover:animate-pulse" href="/Admin">
							Administration Building
						</Link>
					</Button>
				</div>

				<Separator orientation="vertical" />
				<div>
					<Button
						className={`${isActive('/High') ? 'text-blue-500' : 'text-foreground'
							}`}
						variant="link"
						asChild
					>
						<Link className="hover:animate-pulse" href="/High">
							High School
						</Link>
					</Button>
				</div>
				<Separator orientation="vertical" />
				<div>
					<Button
						className={`${isActive('/Middle') ? 'text-blue-500' : 'text-foreground'
							}`}
						variant="link"
						asChild
					>
						<Link className="hover:animate-pulse" href="/Middle">
							Middle School
						</Link>
					</Button>
				</div>

			</div>
		</>
	);
}
