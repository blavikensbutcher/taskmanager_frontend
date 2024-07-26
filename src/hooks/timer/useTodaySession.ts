import { useQuery } from '@tanstack/react-query'
import { Dispatch, SetStateAction, useEffect } from 'react'

import { IPomodoroRoundResponse } from '@/types/pomodoro.types'

import { useProfile } from '@/hooks/useProfile'

import { pomodoroService } from '@/services/pomodoro.service'

interface IUseTodaySession {
	setActiveRound: Dispatch<SetStateAction<IPomodoroRoundResponse | undefined>>
	setSecondsLeft: Dispatch<SetStateAction<number>>
	workInterval: number
}

export const useTodaySession = ({ workInterval, setActiveRound,setSecondsLeft  }): IUseTodaySession => {
	const {
		data: sessionResponse,
		isLoading,
		refetch,
		isSuccess
	} = useQuery({
		queryKey: ['get today session'],
		queryFn: () => pomodoroService.getTodaySession()
	})

	const rounds = sessionResponse?.data.rounds

	useEffect(() => {
		if (isSuccess && rounds) {
			const activeRound = rounds.find(round => !round.isCompleted)
			setActiveRound(activeRound)

			if (activeRound && activeRound.totalSeconds !== 0) {
				setSecondsLeft(workInterval - activeRound.totalSeconds)
			}
		}
	}, [isSuccess, rounds])

	return { sessionResponse, isLoading, refetch, isSuccess }
}
