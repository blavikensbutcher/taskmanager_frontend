'use client'

import { Pause, Play, RefreshCcw } from 'lucide-react'

import Loader from '@/components/ui/Loader'
import { Button } from '@/components/ui/buttons/Button'

import { useDeleteSession } from '@/hooks/timer/useDeleteSession'
import { useTimer } from '@/hooks/timer/useTimer'
import { useTimerActions } from '@/hooks/timer/useTimerActions'
import { useTodaySession } from '@/hooks/timer/useTodaySession'

import style from './Pomodoro.module.scss'
import { PomodoroRounds } from '@/app/i/timer/rounds/PomodoroRounds'
import { formatTime } from '@/helpers/format-time'
import {useCreateSession} from "@/hooks/timer/useCreateSession";

export function Pomodoro() {
	const timerState = useTimer()
	const { sessionResponse, isLoading, workInterval } =
		useTodaySession(timerState)
	const rounds = sessionResponse?.data.PomodoroRound
	const actions = useTimerActions({ ...timerState, rounds })

	const { mutate, isPending} = useCreateSession()

	const { deleteSession, isDeletePending } = useDeleteSession(() =>
		timerState.setSecondsLeft(workInterval * 60)
	)

	return (
		<div className={style.container}>
			{!isLoading && (
				<div className={style.inner_container}>
					{formatTime(timerState.secondsLeft)}
				</div>
			)}

			{isLoading ? (
				<Loader />
			) : sessionResponse?.data ? (
				<>
					<PomodoroRounds
						rounds={rounds}
						nextRoundHandler={actions.nextRoundHandler}
						prevRoundHandler={actions.prevRoundHandler}
						activeRounds={timerState.activeRound}
					/>
					<button
						className={style.button_Play}
						onClick={
							timerState.isRunning ? actions.pauseHandler : actions.playHandler
						}
						disabled={actions.isRoundPending}
					>
						{timerState.isRunning ? <Pause size={30} /> : <Play size={30} />}
					</button>
					<button
						className={style.button_delete}
						onClick={() => {
							timerState.setIsRunning(false)
							deleteSession(sessionResponse.data.id)
						}}
						disabled={isDeletePending}
					>
						<RefreshCcw size={19} />
					</button>
				</>
			) : (
				<Button
					onClick={() => mutate()}
					className='mt-1'
					disabled={isPending}
				>
					Create session
				</Button>
			)}
		</div>
	)
}
