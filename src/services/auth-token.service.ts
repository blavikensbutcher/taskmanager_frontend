import Cookies from 'js-cookie'

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken'
}

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {

	console.log("saveTokenStorage", accessToken)

	Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
		sameSite: 'none',
		expires: 1
	});

	const ismounteraccess = Cookies.get(EnumTokens.ACCESS_TOKEN)

	console.log('ismounteraccess', ismounteraccess)
}

export const removeFromStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN)
}
