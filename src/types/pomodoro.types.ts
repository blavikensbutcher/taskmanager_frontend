import type { IRootTypes } from '@/types/root.types'

export interface IPomodoroRoundResponse extends IRootTypes {
	isCompleted?: boolean
	totalSeconds: number
}

export interface IPomodoroSessionResponse extends IRootTypes {
	isCompleted?: boolean
	rounds?: IPomodoroRoundResponse[]
}

export type TypePomodoroSessionState = Partial<
	Omit<IPomodoroSessionResponse, 'id' | 'createdAt' | 'updatedAt'>
>
export type TypePomodoroRoundState = Partial<
	Omit<IPomodoroRoundResponse, 'id' | 'createdAt' | 'updatedAt'>
>
