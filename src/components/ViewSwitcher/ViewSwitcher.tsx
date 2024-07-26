'use client'

import clsx from 'clsx'
import { Kanban, ListTodo } from 'lucide-react'

import style from './ViewSwitcher.module.scss'
import { TypeView } from '@/app/i/tasks/View'

interface IViewSwitcher {
	type: TypeView
	setType: (value: TypeView) => void
}

export function ViewSwitcher({ setType, type }: IViewSwitcher) {
	return (
		<div className={style.container}>
			<button
				className={clsx('flex items-center gap-1', {
					'opacity-40': type === 'kanban'
				})}
				onClick={() => setType('list')}
			>
				<ListTodo />
				List
			</button>
			<button
				className={clsx('flex items-center gap-1', {
					'opacity-40': type === 'list'
				})}
				onClick={() => setType('kanban')}
			>
				<Kanban />
				Board
			</button>
		</div>
	)
}
