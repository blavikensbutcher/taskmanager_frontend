import { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import {Pomodoro} from "@/app/i/timer/Pomodoro";


export const metadata: Metadata = {
    title: 'Pomodoro Timer',
    ...NO_INDEX_PAGE
}

export default function TimerPage() {
    return (
        <div>
            <Heading title='Pomodoro Timer' />
            <Pomodoro />
        </div>
    )
}
