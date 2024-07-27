import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Fields'
import { SingleSelect } from '@/components/ui/task-edit/single-select/SingleSelect'

import { COLORS_TIME_BLOCKS } from '@/constants/time-blocks/colors.data'

import type { TypeTimeBlockFormState } from '@/types/time-block.types'

import { useCreateTimeBlock } from '@/hooks/time-blocks/useCreateTimeBlock'
import { useUpdateTimeBlock } from '@/hooks/time-blocks/useUpdateTimeBlock'

export const TimeBlockingForm = () => {
	const { register, control, watch, reset, handleSubmit, getValues } =
		useFormContext<TypeTimeBlockFormState>()

	const existsId = watch('id')

	const { createTimeBlock, isPending } = useCreateTimeBlock()
	const { updateTimeBlock } = useUpdateTimeBlock(existsId)

	const onSubmit: SubmitHandler<TypeTimeBlockFormState> = data => {
		const { id, color, ...rest } = data
		const dto = { ...rest, color: color || undefined }

		if (id) {
			updateTimeBlock({
				id,
				data: dto
			})
		} else {
			createTimeBlock(dto)
		}

		reset({
			color: COLORS_TIME_BLOCKS[COLORS_TIME_BLOCKS.length - 1],
			duration: 0,
			name: '',
			id: undefined,
			order: 1
		})
	}

	return (
		<form
			className='w-3/5'
			onSubmit={handleSubmit(onSubmit)}
		>
			<Field
				{...register('name', {
					required: true
				})}
				id='name'
				label='Enter name:'
				placeholder='Enter name:'
				extra='mb-4'
			/>
			<Field
				{...register('duration', {
					required: true,
					valueAsNumber: true
				})}
				id='duration'
				label='Enter duration (sec.):'
				placeholder='Enter duration (sec.):'
				isNumber
				extra='mb-4'
			/>

			<div>
				<span className='inline-block mb-1.5'>Color:</span>
				<Controller
					control={control}
					name={'color'}
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							onChange={onChange}
							value={value || COLORS_TIME_BLOCKS[COLORS_TIME_BLOCKS.length - 1]}
							isColorSelect
							data={COLORS_TIME_BLOCKS.map(item => ({
								value: item,
								label: item
							}))}
						/>
					)}
				/>
			</div>

			<Button
				type='submit'
				disabled={isPending}
				className='mt-6'
			>
				{existsId ? 'Update' : 'Create'}
			</Button>
		</form>
	)
}
