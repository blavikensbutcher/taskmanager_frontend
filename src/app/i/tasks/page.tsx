import { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { View } from '@/app/i/tasks/View'

export const metadata: Metadata = {
	title: 'Tasks',
	...NO_INDEX_PAGE
}

export default function TasksPage() {
	return (
		<div>
			<Heading title='Tasks' />
			<View />
		</div>
	)
}
