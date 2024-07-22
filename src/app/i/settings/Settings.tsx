import { useForm } from 'react-hook-form'

import { TypeUserForm } from '@/types/auth.types'

export function Settings() {
	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange'
	})
}
