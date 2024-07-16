import {IRootTypes} from "@/types/root.types";

export interface ITimeBlockResponse extends IRootTypes{


	name: string
	color?: string
	duration: number
	order: number
}

export type TypeTimeBlockFormState = Partial<
	Omit<ITimeBlockResponse, 'createdAt' | 'updatedAt'>
>
