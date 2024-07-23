import clsx from 'clsx'
import { GripVertical, Trash } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Loader from '@/components/ui/Loader'
import { Checkbox } from '@/components/ui/checkboxs/Checkbox'
import { DatePicker } from '@/components/ui/task-edit/date-picker/DatePicker'
import { SingleSelect } from '@/components/ui/task-edit/single-select/SingleSelect'

import { ITaskResponse, TypeTaskFormState } from '@/types/task.types'

import { useDeleteTask } from '@/hooks/tasks/useDeleteTask'
import { useTaskDebounce } from '@/hooks/tasks/useTaskDebounce'

import style from './ListView.module.scss'
import {TransparentField} from "@/components/ui/transparent-field/TransparentField";

interface IListView {
	item: ITaskResponse
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function ListView({ item, setItems }: IListView) {
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
				style.row,
				watch('isCompleted') ? style.completed : '',
				'animation-opacity'
			)}
		>
			<div>
				<span className={style.span}>
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
								className='border'
							/>
						)}
					/>

					<TransparentField {...register('text')} />
				</span>
			</div>
			<div>
				<Controller
					control={control}
					name='createdAt'
					render={({ field: { value, onChange } }) => (
						<DatePicker
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>

			<div className='capitalize'>
				<Controller
					control={control}
					name='priority'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={['high', 'medium', 'low'].map(item => ({
								value: item,
								label: item
							}))}
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>

			<div>
				<button
					className={style.deleteTaskBtn}
					onClick={() =>
						item.id
							? deleteTask(item.id)
							: setItems(prev => prev?.slice(0, -1))
					}
				>
					{isDeletePending ? <Loader size={15} /> : <Trash size={15} />}
				</button>
			</div>
		</div>
	)
}
