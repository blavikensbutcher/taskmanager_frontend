import type { IPomodoroRoundResponse } from '@/types/pomodoro.types';
import {Dispatch, SetStateAction} from "react";

export interface ITimerState {
    activeRound?: IPomodoroRoundResponse;
    secondsLeft: number;
    setActiveRound: Dispatch<SetStateAction<IPomodoroRoundResponse | undefined | any>>;
    setIsRunning: Dispatch<SetStateAction<boolean>>;
    setSecondsLeft: Dispatch<SetStateAction<number>>;
    isRunning: boolean;
    workInterval?: number;
    isLoading?: boolean;
    refetch?: () => void;
    isSuccess?: boolean;
    sessionResponse?: any;
}
