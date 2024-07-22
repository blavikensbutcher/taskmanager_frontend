import { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Statistics } from '@/app/i/Statistics'
import DashboardLayout from "@/components/Dashboard-layout/DashboardLayout";
import {Settings} from "@/app/i/settings/Settings";

export const metadata: Metadata = {
    title: 'Settings',
    ...NO_INDEX_PAGE
}

export default function SettingsPage() {
    return (
        <div>
            <Heading title='Settings' />
            <Settings />
        </div>
    )
}
