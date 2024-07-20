import { PropsWithChildren } from 'react'

import { Header } from '@/components/header/Header'
import { Sidebar } from '@/components/sidebar/Sidebar'

import styles from './dashboard.module.css'

export default function DashboardLayout({
	children
}: PropsWithChildren<unknown>) {
	return (
		<div className={styles.container}>
			<Sidebar />
			<main>
				<Header />
				{children}
			</main>
		</div>
	)
}
