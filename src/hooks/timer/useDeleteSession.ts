import { useMutation, useQueryClient } from '@tanstack/react-query'

import { pomodoroService } from '@/services/pomodoro.service'

export const useDeleteSession = (onDeleteSuccess: () => void) => {
	const queryClient = useQueryClient()

	const { mutate: deleteSession, isPending: isDeletePending } = useMutation({
		queryKey: ['delete session'],
		queryFn: (id: string) => pomodoroService.deleteSession(id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get today session']
			})
			onDeleteSuccess(workInterval * 60)
		}
	})

	return { deleteSession, isDeletePending }
}
