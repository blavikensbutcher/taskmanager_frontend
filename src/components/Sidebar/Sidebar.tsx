import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'

import { MenuItem } from '@/components/MenuItem/MenuItem'
import { LogoutBtn } from '@/components/Sidebar/LogoutBtn'
import { MENU } from '@/components/Sidebar/menu.data'

import { COLORS } from '@/constants/color.constants'

import styles from './sidebar.module.css'

export const Sidebar = () => {
	return (
		<aside className={styles.sidebar}>
			<div>
				<Link
					href='/i'
					className={styles.link}
				>
					<GanttChartSquare
						color={COLORS.primary}
						size={35}
					/>
					<span>Task Manager</span>
				</Link>
			</div>

			<div className={styles.logout_container}>

				{MENU.map(item => (
					<MenuItem
						item={item}
						key={item.link}
					/>
				))}
				<LogoutBtn />
			</div>
		</aside>
	)
}
