'use client'

import Loader from '@/components/ui/Loader'

import { useProfile } from '@/hooks/useProfile'

import style from './statistics.module.css'

export const Statistics = () => {
	const { data, isLoading } = useProfile()

	return isLoading ? (
		<Loader />
	) : (
		<div className={style.container}>
			{data?.statistics.length ? (
				data.statistics.map(statistic => (
					<div className={style.statistics} key={statistic.label}>
						<p className={style.label}>{statistic.label}</p>
						<p className={style.value}>{statistic.value}</p>
					</div>
				))
			) : (
				<p>Statistic not loaded</p>
			)}
		</div>
	)
}
