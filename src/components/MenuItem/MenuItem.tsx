import Link from 'next/link'

import { IMenuItem } from '@/components/Sidebar/menu.interface'

import styles from './menu-item.module.css'

export function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<div>
			<Link href={item.link} className={styles.link}>
			<item.icon />
			<span>{item.name}</span>
			</Link>
		</div>
	)
}
