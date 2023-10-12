'use client';

import React from 'react';
import ReactModal from 'react-modal';
import { Button } from '../ui/buttons';

export default function TosModal() {
	const hideModal = () => setIsVisible(false);
	const showModal = () => setIsVisible(true);
	const [isVisible, setIsVisible] = React.useState(false);

	return (
		<>
			<button
				className="hover:text-blue-500 hover:cursor-pointer hover:underline"
				onClick={showModal}
			>
				Rules and Regulations
			</button>
			<ReactModal
				className="relative  flex animate-overlayShow max-h-fit  flex-col items-center overflow-auto text-black dark:text-black top-0 lg:top-0 justify-center z-50 transition-all ease-in-out duration-1000"
				overlayClassName="fixed inset-0 bg-black bg-opacity-50 modal-overlay"
				isOpen={!!isVisible}
			>
				<div className="bg-white max-h-fit align-center self-center  justify-center flex flex-col flex-wrap  rounded-lg max-w-6xl min-w-lg p-4">
					<article className=" overflow-auto max-h-screen sm:max-h-[720px] prose dark:prose-dark max-w-none w-full prose-h2:font-bold  prose-headings:underline prose-headings:my-2 prose-p:p-5 prose-ul:list-decimal prose-ul:text-sm p-4">
						<h1 className="font-bold text-3xl">Rules and Regulations</h1>
						<h2>Premises and Conditions</h2>

					</article>
					<Button onClick={hideModal}>close</Button>
				</div>
			</ReactModal>
		</>
	);
}
