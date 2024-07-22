'use client'

import { GlobalLoader } from '@/components/Global-loader/GlobalLoader'
import { Profile } from '@/components/Header/Profile/Profile'
import Loader from '@/components/ui/Loader'

import { useProfile } from '@/hooks/useProfile'

import styles from './Profile/profile.module.css'

export const Header = () => {
	return (
		<header>
			<GlobalLoader />
			<Profile />
		</header>
	)
}
