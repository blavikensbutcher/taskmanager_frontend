'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Fields'

import type { TypeUserForm } from '@/types/auth.types'

import { useLoadData } from '@/hooks/useLoadData'
import { useUpdateSettings } from '@/hooks/useUpdateSettings'

import styles from './settings.module.css'

export function Settings() {
	const { register, handleSubmit, reset, setValue } = useForm<TypeUserForm>({
		mode: 'onChange'
	})

	const { mutate, isPending } = useUpdateSettings()

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data

		mutate(
			{
				...rest,
				password: password || undefined
			},
			{
				onSuccess: () => {
					setValue('password', '')
				}
			}
		)
	}

	useLoadData(reset)

	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-2/4'
			>
				<div className={styles.grid_container}>
					<div>
						<Field
							id='email'
							label='Email:'
							placeholder='Enter email:'
							type='email'
							{...register('email', {
								required: 'Email is required!'
							})}
							extra='mb-4'
						/>
						<Field
							id='name'
							label='Name:'
							placeholder='Enter name:'
							type='text'
							{...register('name')}
							extra='mb-6'
						/>

						<Field
							id='password'
							label='New password:'
							placeholder='Enter new password:'
							type='password'
							{...register('password')}
							extra='mb-6'
						/>
					</div>
					<div>
						<Field
							id='workInterval'
							label='Work Interval (sec.):'
							placeholder='Enter work interval (sec.):'
							isNumber
							{...register('workInterval', {
								valueAsNumber: true
							})}
							extra='mb-4'
						/>
						<Field
							id='breakInterval'
							label='Break Interval (sec.):'
							placeholder='Enter break interval (sec.):'
							isNumber
							{...register('breakInterval', {
								valueAsNumber: true
							})}
							extra='mb-6'
						/>
						<Field
							id='intervalsCount'
							label='Intervals Count (max 10):'
							placeholder='Enter intervals count(max 10):'
							isNumber
							{...register('intervalCount', {
								valueAsNumber: true,
								max: {
									value: 10,
									message: "Interval must be less than 10"
								},
							})}
							extra='mb-6'
						/>
					</div>
				</div>

				<Button
					type='submit'
					disabled={isPending}
				>
					Save
				</Button>
			</form>
		</div>
	)
}
