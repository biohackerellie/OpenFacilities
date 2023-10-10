import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { dayOptions } from '@/lib/formOptions';
import ReactModal from 'react-modal';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import './styles.css';
import { Button } from '../ui/buttons';
export const ModalInput = (props: {
	isVisible: boolean;
	setIsVisible: (isVisible: boolean) => void;
	onSave: (data: any) => void;
}) => {
	const { isVisible, setIsVisible, onSave } = props;

	const showModal = () => setIsVisible(true);
	const hideModal = () => setIsVisible(false);

	const forwardChange = (data: any) => {
		hideModal();
		onSave(data);
	};
	return (
		<>
			<Button
				className="hover:cursor-pointer h-8"
				variant="outline"
				size={'sm'}

				onClick={showModal}
			>
				Add Reoccurring Dates
			</Button>
			{isVisible && (
				<ModalForm
					isVisible={isVisible}
					onSave={forwardChange}
					onClose={hideModal}
				/>
			)}
		</>
	);
};

const animatedComponents = makeAnimated();

export const ModalForm = (props: {
	isVisible: boolean;
	onSave: (data: any) => void;
	onClose: () => void;
}) => {
	const { isVisible, onSave, onClose } = props;
	const { register, handleSubmit, control } = useForm();

	const forwardSave = (data: any) => {
		onSave(data);
	};

	return (
		<>
			<ReactModal
				className="fixed inset-0 flex text-lg items-center text-black dark:text-black justify-center z-50 transition-all ease-in-out duration-1000"
				overlayClassName="fixed inset-0 backdrop-blur-md  modal-overlay"
				isOpen={isVisible}
			>
				<div className="bg-white border-black items-center place-content-center   justify-center flex flex-col rounded-lg w-auto min-w-34 p-4">
					<div>
						<form onSubmit={handleSubmit(forwardSave)}>
							<div className="border-b-2 gap-2 my-2 p-2 ">
								<label className="font-Bold">Start Date</label>

								<input
									className="form-date bg-gray-300 hover:bg-gray-200 text-black"
									type="date"
									{...register('startDate')}
								/>
							</div>
							<div className="border-b-2 gap-2 my-2 p-2">
								<label className="label">Event start time? </label>
								<input
									type="time"
									className="form-date bg-gray-300 hover:bg-gray-200 my-2 text-black"
									{...register('startTime')}
								/>
							</div>
							<div>
								<div className="border-b-2 gap-2 my-2 p-2">
									<label className="label">Event end time? </label>
									<input
										type="time"
										className="form-date bg-gray-300 hover:bg-gray-200 text-black"
										{...register('endTime')}
									/>
								</div>
								<div className="border-b-2 gap-2 my-2 p-2">
									<label className="label">Day of the Week</label>
									<div className="control">
										<Controller
											name="dayOfWeek"
											control={control}
											render={({ field }) => (
												<Select
													{...field}
													closeMenuOnSelect={false}
													components={animatedComponents}
													options={dayOptions}
													isMulti
													required
												/>
											)}
										/>
									</div>
								</div>
								<div className="border-b-2 gap-2 my-2 p-2">
									<label className="label">Repeat Until</label>
									<div className="control">
										<input
											type="date"
											className="form-date bg-gray-300 hover:bg-gray-200 text-black"
											{...register('repeatUntil')}
										/>
									</div>
								</div>
								<div className="border-b-2 flex    gap-x-10 justify-between">
									<Button
										className="h-4"
										onClick={onClose}
										variant="secondary"
									>
										Cancel
									</Button>
									<Button
										className="h-4"
										onClick={handleSubmit(forwardSave)}
									>Save
									</Button>



								</div>
							</div>
						</form>
					</div>
				</div>
			</ReactModal>
		</>
	);
};
