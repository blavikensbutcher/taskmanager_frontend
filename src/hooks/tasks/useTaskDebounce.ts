import debounce from 'lodash.debounce'
import { useCallback, useEffect } from 'react'
import { UseFormWatch } from 'react-hook-form'

import type { TypeTaskFormState } from '@/types/task.types'

import { useCreateTask } from '@/hooks/tasks/useCreateTask'
import { useUpdateTasks } from '@/hooks/tasks/useUpdateTasks'

interface IUseTaskDebounce {
	watch: UseFormWatch<TypeTaskFormState>
	itemId: string
}

export function useTaskDebounce({ watch, itemId }: IUseTaskDebounce) {
	const { createTask } = useCreateTask()
	const { updateTask } = useUpdateTasks()

	const debounceCreateTask = useCallback(
		debounce((formData: TypeTaskFormState) => {
			createTask(formData)
		}, 10000),
		[]
	)

	const debounceUpdateTask = useCallback(
		debounce((formData: TypeTaskFormState) => {
			updateTask({ id: itemId, data: formData })
		}, 10000),
		[]
	)

	useEffect(() => {
		const { unsubscribe } = watch(formData => {
			if (itemId) {
				debounceUpdateTask({
					...formData,
					priority: formData.priority || undefined
				})
			} else {
				debounceCreateTask(formData)
			}
		})

		return () => unsubscribe()
	}, [debounceUpdateTask, debounceCreateTask, watch, itemId])

	return {}
}
