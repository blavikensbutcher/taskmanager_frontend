import { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Dashboard } from '@/app/i/dashboard/Dashboard'
import DashboardLayout from "@/components/Dashboard-layout/DashboardLayout";

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

export default function DashboardPage() {
	return (
		<div>
			<Heading title='Dashboard' />
			<Dashboard />
		</div>
	)
}
