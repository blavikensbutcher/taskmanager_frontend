import type {IRootTypes} from "@/types/root.types";

export enum EnumTaskPriority {
	LOW = 'LOW',
	MEDIUM = 'MEDIUM',
	HIGH = 'HIGH'
}

export interface ITaskResponse extends IRootTypes{
	text: string
	priority?: EnumTaskPriority
	isCompleted: boolean
}

export type TypeTaskFormState = Partial<Omit<ITaskResponse, 'id' | 'updatedAt'>>
