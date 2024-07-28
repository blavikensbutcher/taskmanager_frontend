import type { Dispatch, SetStateAction } from 'react';
import { ITaskResponse, EnumTaskPriority } from '@/types/task.types';

interface IKanbanAddCardInput {
	filterDate?: string;
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

export function KanbanAddCardInput({ setItems, filterDate }: IKanbanAddCardInput) {
	const addCard = () => {
		setItems(prev => {
			if (!prev) return;

			return [
				...prev,
				{
					id: '',
					text: '',
					isCompleted: false,
					createdAt: filterDate || Date.now().toString(),
				}
			];
		});
	};

	return (
		<div className='mt-5'>
			<button
				onClick={addCard}
				className='italic opacity-40 text-sm'
			>
				Add task...
			</button>
		</div>
	);
}
