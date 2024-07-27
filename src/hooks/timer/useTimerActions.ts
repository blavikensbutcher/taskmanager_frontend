import type { IPomodoroRoundResponse } from '@/types/pomodoro.types'
import type { ITimerState } from '@/types/timer.types'

import { useLoadSettings } from '@/hooks/timer/useLoadSettings'
import { useUpdateRound } from '@/hooks/timer/useUpdateRound'

type TypeUseTimerActions = ITimerState & {
	rounds: IPomodoroRoundResponse[] | undefined
}

export function useTimerActions({
	activeRound,
	setIsRunning,
	secondsLeft,
	rounds,
	setActiveRound
}: TypeUseTimerActions) {
	const { workInterval } = useLoadSettings()
	const { updateRound, isRoundPending } = useUpdateRound()

	const pauseHandler = () => {

		setIsRunning(false)

		if (activeRound?.id) {
			updateRound({
				id: activeRound?.id,
				data: {
					totalSeconds: secondsLeft,
					isCompleted: Math.floor(secondsLeft / 60) >= workInterval
				}
			})
		}
	}

	const playHandler = () => {
		setIsRunning(true)
	}

	const nextRoundHandler = () => {
		if (!activeRound?.id) return

		updateRound({
			id: activeRound?.id,
			data: {
				isCompleted: true,
				totalSeconds: workInterval * 60
			}
		})
	}

	const prevRoundHandler = () => {
		//ES2023
		const lastCompletedRound = rounds?.findLast(round => round.isCompleted)

		if (!lastCompletedRound?.id) return

		updateRound({
			id: lastCompletedRound?.id,
			data: {
				isCompleted: false,
				totalSeconds: 0
			}
		})

		setActiveRound(lastCompletedRound)
	}

	return {
		isRoundPending,
		pauseHandler,
		playHandler,
		nextRoundHandler,
		prevRoundHandler
	}
}
