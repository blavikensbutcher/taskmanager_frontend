import { PropsWithChildren } from 'react'

import { Header } from '@/components/Header/Header'
import { Sidebar } from '@/components/Sidebar/Sidebar'

import styles from './dashboard.module.css'

export default function DashboardLayout({
	children
}: PropsWithChildren) {
	return (
		<div className={styles.container}>
			<Sidebar />
			<main className={styles.main}>
				<Header />
				{children}
			</main>
		</div>
	)
}
