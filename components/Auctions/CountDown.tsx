'use client';

import { useEffect, useRef, useState } from 'react';

export default function CountDown({ endsAt }: { endsAt: string }) {
    const [timeLeft, setTimeLeft] = useState<number>(new Date(endsAt).getTime() - new Date().getTime());

    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                const now = new Date().getTime();
                const ends = new Date(endsAt).getTime();

                const timeLeft = new Date(ends - now).getTime();

                setTimeLeft(timeLeft);

                if (timeLeft < 0) {
                    clearInterval(timerRef.current!);
                    timerRef.current = null;
                }
            }, 1000);
        }
    }, []);

    return (
        <div className="flex items-center justify-center bg-gray-800 text-white rounded-full">
            <span className="text-2xl font-semibold">{new Date(timeLeft).toLocaleTimeString()}</span>
        </div>
    );
}
