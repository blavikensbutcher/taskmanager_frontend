import { useQuery } from '@tanstack/react-query'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { useLoadSettings } from '@/hooks/timer/useLoadSettings'
import { pomodoroService } from '@/services/pomodoro.service'
import {IPomodoroSessionResponse, IPomodoroRoundResponse, Pomodoro} from '@/types/pomodoro.types'
import {AxiosResponse} from "axios";

interface IUseTodaySession {
	setActiveRound?: Dispatch<SetStateAction<IPomodoroRoundResponse | undefined>>,
	setSecondsLeft?: Dispatch<SetStateAction<number>>
}

interface IUseTodaySessionReturn {
	sessionResponse: IPomodoroSessionResponse | undefined;
	isLoading: boolean;
	refetch: () => void;
	isSuccess: boolean;
	workInterval: number | undefined;

}

export const useTodaySession = ({
									setActiveRound,
									setSecondsLeft
								}: IUseTodaySession): IUseTodaySessionReturn => {
	const { workInterval } = useLoadSettings()

	const {
		data: sessionResponse,
		isLoading,
		refetch,
		isSuccess
	} = useQuery<AxiosResponse<IPomodoroSessionResponse>>({
		queryKey: ['get today session'],
		queryFn: () => pomodoroService.getTodaySession()
	})


	const rounds = sessionResponse?.data.PomodoroRound

	useEffect(() => {
		if (isSuccess && rounds) {
			const activeRound = rounds.find(round => !round.isCompleted)
			if (setActiveRound) setActiveRound(activeRound)

			if (activeRound && activeRound.totalSeconds !== 0 && setSecondsLeft) {
				setSecondsLeft(activeRound.totalSeconds)
			}
		}
	}, [isSuccess, rounds, setActiveRound, setSecondsLeft])

	return { sessionResponse, isLoading, refetch, isSuccess, workInterval }
}
