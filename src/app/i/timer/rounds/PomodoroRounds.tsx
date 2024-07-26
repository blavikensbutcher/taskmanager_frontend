import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import type { IPomodoroRoundResponse } from '@/types/pomodoro.types'

import style from './PomodoroRound.module.scss'

interface IPomodoroRounds {
	rounds: IPomodoroRoundResponse[] | undefined
	nextRoundHandler: () => void
	prevRoundHandler: () => void
	activeRounds: IPomodoroRoundResponse | undefined
}

export function PomodoroRounds({
	rounds,
	nextRoundHandler,
	prevRoundHandler,
	activeRounds
}: IPomodoroRounds) {
	const isCanPrevRound = rounds
		? rounds.some(round => round.isCompleted)
		: false
	const isCanNextRound = rounds ? !rounds[rounds.length - 1].isCompleted : false

	return (
		<div className={style.container}>
			<button
				className={style.button}
				disabled={!isCanNextRound}
				onClick={() => (isCanPrevRound ? prevRoundHandler() : false)}
			>
				<ChevronLeft size={23} />
			</button>

			<div className={style.roundContainer}>
				{rounds &&
					rounds.map((round, index) => (
						<div
							key={index}
							className={clsx(style.round, {
								[style.completed]: round.isCompleted,
								[style.active]:
									round.id === activeRounds?.id && !round.isCompleted
							})}
						></div>
					))}
			</div>

			<button
				className={style.button}
				onClick={() => (isCanNextRound ? nextRoundHandler() : false)}
				disabled={!isCanNextRound}
			>
				<ChevronRight size={23} />
			</button>
		</div>
	)
}
