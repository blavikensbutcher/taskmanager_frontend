import { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Dashboard } from '@/app/i/dashboard/Dashboard'
import {TimeBlocking} from "@/app/i/time-blocks/TimeBlocking";

export const metadata: Metadata = {
    title: 'Time blocks',
    ...NO_INDEX_PAGE
}

export default function TimeBlockingPage() {
    return (
        <div>
            <Heading title='Time blocks' />
            <TimeBlocking />
        </div>
    )
}
