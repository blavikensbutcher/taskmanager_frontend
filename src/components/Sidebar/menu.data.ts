import type {IMenuItem} from "@/components/Sidebar/menu.interface";
import {CalendarRange, KanbanSquare, LayoutDashboard, Settings, Timer} from "lucide-react";
import {DASHBOARD_PAGES} from "@/config/pages-url.config";

export const MENU: IMenuItem[] = [
    {
        icon: LayoutDashboard,
        link: DASHBOARD_PAGES.HOME,
        name: 'Dashboard'
    },
    {
        icon: KanbanSquare,
        link: DASHBOARD_PAGES.TASKS,
        name: 'Tasks'
    },
    {
        icon: Timer,
        link: DASHBOARD_PAGES.TIMER,
        name: 'Pomodoro'
    }, {
        icon: CalendarRange,
        link: DASHBOARD_PAGES.TIME_BLOCKS,
        name: 'Time Blocking'
    },
    {
        icon: Settings,
        link: DASHBOARD_PAGES.SETTINGS,
        name: 'Settings'
    }
]
