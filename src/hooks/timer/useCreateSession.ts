import {useMutation, useQueryClient} from '@tanstack/react-query'


import { pomodoroService } from '@/services/pomodoro.service'

export const useCreateSession = () => {
    const queryClient = useQueryClient()

	const {
		mutate,
        isSuccess,
        isPending,
	} = useMutation({
		queryKey: ['create new session'],
		queryFn: () => pomodoroService.createSession(),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['get today session']
            })
        }
	})

	return { mutate, isPending }
}
