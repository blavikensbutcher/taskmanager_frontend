import Cookies from 'js-cookie'

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken'
}

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
	console.log('getAccessToken', getAccessToken)
	return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
	console.log('saveTokenStorage' ,accessToken)
	Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
		sameSite: 'none',
		expires: 1
	});
}

export const removeFromStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN)
}
