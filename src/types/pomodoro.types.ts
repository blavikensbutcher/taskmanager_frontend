import type { IRootTypes } from '@/types/root.types'

export interface IPomodoroRoundResponse extends IRootTypes {
	isCompleted?: boolean
	totalSeconds: number
}

export interface IPomodoroSessionResponse extends IRootTypes {
	isCompleted?: boolean
	rounds?: IPomodoroRoundResponse[]
}

export interface PomodoroRound {
	id: string;
	createdAt: string;
	updatedAt: string;
	isCompleted: boolean;
	totalSeconds: number;
	pomodoroId: string;
}

export  interface Pomodoro {
	id: string;
	createdAt: string;
	updatedAt: string;
	isCompleted: boolean;
	userId: string;
	PomodoroRound: PomodoroRound[];
}

export type TypePomodoroSessionState = Partial<
	Omit<IPomodoroSessionResponse, 'id' | 'createdAt' | 'updatedAt'>
>
export type TypePomodoroRoundState = Partial<
	Omit<IPomodoroRoundResponse, 'id' | 'createdAt' | 'updatedAt'>
>
