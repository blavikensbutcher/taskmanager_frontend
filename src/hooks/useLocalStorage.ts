

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

interface IUseLocalStorage<T> {
	key: string
	defaultValue: T
}

export function useLocalStorage<T>({
	defaultValue,
	key
}: IUseLocalStorage<T>): [T, Dispatch<SetStateAction<T>>, boolean] {
	const [loading, setLoading] = useState(true)
	const isMounted = useRef(false)
	const [value, setValue] = useState<T>(defaultValue)

	useEffect(() => {
		try {
			const storage = window.localStorage.getItem(key)
			if (storage) {
				setValue(JSON.parse(storage))
			}
		} catch (e) {
			console.error(e)
		} finally {
			setLoading(false)
		}

		return () => {
			isMounted.current = false
		}
	}, [key])

	useEffect(() => {
		if (isMounted.current) {
			window.localStorage.setItem(key, JSON.stringify(value))
		} else {
			isMounted.current = true
		}
	}, [key, value])

	return [value, setValue, loading]
}
