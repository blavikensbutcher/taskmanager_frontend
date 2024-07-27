import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

import Loader from '@/components/ui/Loader'

import { useTimeBlockDnd } from '@/hooks/time-blocks/useTimeBlockDnd'
import { useTimeBlocks } from '@/hooks/time-blocks/useTimeBlocks'

import styles from './TimeBlock.module.scss'
import { TimeBlock } from '@/app/i/time-blocks/TimeBlock'
import { calcHoursLeft } from '@/helpers/calc-hours-left'

export function TimeBlockingList() {
	const { items, setItems, isLoading } = useTimeBlocks()
	const { handleDragEnd, sensors } = useTimeBlockDnd(items, setItems)



	if (isLoading) return <Loader />

	const {hoursLeft} = calcHoursLeft(items)

	return (
		<div>
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
			>
				<div className={styles.list}>
					<SortableContext
						items={items || []}
						strategy={verticalListSortingStrategy}
					>
						{items?.length ? (
							items?.map(item => (
								<TimeBlock
									item={item}
									key={item.id}
								/>
							))
						) : (
							<div>Add first time block on the right form</div>
						)}
					</SortableContext>
				</div>
			</DndContext>
			{hoursLeft > 0
				? `${hoursLeft} hours out of 24 left for sleep`
				: `No hours left for sleep :(`}
		</div>
	)
}
