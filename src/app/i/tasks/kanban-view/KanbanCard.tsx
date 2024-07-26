import clsx from 'clsx'
import { GripVertical, Trash } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Loader from '@/components/ui/Loader'
import { Checkbox } from '@/components/ui/checkboxs/Checkbox'
import { DatePicker } from '@/components/ui/task-edit/date-picker/DatePicker'
import { SingleSelect } from '@/components/ui/task-edit/single-select/SingleSelect'
import { TransparentField } from '@/components/ui/transparent-field/TransparentField'

import { ITaskResponse, TypeTaskFormState } from '@/types/task.types'

import { useDeleteTask } from '@/hooks/tasks/useDeleteTask'
import { useTaskDebounce } from '@/hooks/tasks/useTaskDebounce'

import style from './KanbanView.module.scss'

interface IKanbanCard {
	item: ITaskResponse
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function KanbanCard({ item, setItems }: IKanbanCard) {
	const { register, control, watch } = useForm<TypeTaskFormState>({
		defaultValues: {
			text: item?.text,
			isCompleted: item?.isCompleted,
			createdAt: item?.createdAt,
			priority: item?.priority
		}
	})

	useTaskDebounce({ watch, itemId: item?.id })

	const { deleteTask, isDeletePending } = useDeleteTask()

	return (
		<div
			className={clsx(
				style.card,
				{
					[style.completed]: watch('isCompleted')
				},
				'animation-opacity'
			)}
		>
			<div className={style.cardHeader}>
				<button aria-describedby='todo-item'>
					<GripVertical className={style.grip} />
				</button>

				<Controller
					control={control}
					name='isCompleted'
					render={({ field: { value, onChange } }) => (
						<Checkbox
							onChange={onChange}
							checked={value}
						/>
					)}
				/>

				<TransparentField {...register('text')} />
			</div>

			<div className={style.cardBody}>
				<Controller
					control={control}
					name='createdAt'
					render={({ field: { value, onChange } }) => (
						<DatePicker
							onChange={onChange}
							value={value || ''}
							position='left'
						/>
					)}
				/>

				<Controller
					control={control}
					name='piority'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={['HIGH', 'MEDIUM', 'LOW'].map(item => ({
								value: item,
								label: item
							}))}
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>

			<div className={style.cardActions}>
				<button
					className='opacity-50 transition-opacity hover:opacity-100'
					onClick={() =>
						item.id ? deleteTask(item.id) : setItems(prev => prev?.slice(0, -1))
					}
				>
					{isDeletePending ? <Loader size={15} /> : <Trash size={15} />}
				</button>
			</div>
		</div>
	)
}
