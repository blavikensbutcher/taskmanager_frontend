import { PropsWithChildren } from 'react'

import DashboardLayout from '@/components/Dashboard-layout/DashboardLayout'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div>
			<DashboardLayout>{children}</DashboardLayout>
		</div>
	)
}
