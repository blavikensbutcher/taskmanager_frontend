import { useQuery } from '@tanstack/react-query'

import { useProfile } from '@/hooks/useProfile'

import { pomodoroService } from '@/services/pomodoro.service'

export const useTodaySession = () => {
	const {
		data: sessionResponse,
		isLoading,
		refetch,
		isSuccess
	} = useQuery({
		queryKey: ['get today session'],
		queryFn: () => pomodoroService.getTodaySession()
	})

	return { sessionResponse, isLoading, refetch, isSuccess }
}
