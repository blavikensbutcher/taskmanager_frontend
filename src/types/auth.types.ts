export interface IAuthForm {
	email: string
	password: string
}

export interface IUser {
	id: number
	name?: string
	email: string
	accessToken: string,
	refreshToken: string
	workInterval?: number
	breakInterval?: number
	intervalCount?: number
}

export interface IAuthResponse {
	user: IUser
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string}
