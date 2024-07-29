import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import type { TypeUserForm } from '@/types/auth.types'

import { userService } from '@/services/user.service'

export function useUpdateSettings() {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['update profile'],
		mutationFn: (data: TypeUserForm) => userService.update(data),
		onSuccess() {
			toast.success('Profile successfully updated')
			queryClient.invalidateQueries({ queryKey: ['profile'] })
		},
		onError(e) {
			toast.error("Update unsuccessful", {
				style: {
					backgroundColor: "red"
				}
			})
		}
	})

	return { mutate, isPending }
}
