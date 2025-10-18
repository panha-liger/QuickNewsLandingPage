'use client';

import { useEffect, useState } from 'react';


export default function UserBar() {
    const [stats, setStats] = useState<number>(226);
    const [loading, setLoading] = useState(false);
    const [displayCount, setDisplayCount] = useState(226);
    const goal = 1000; // Goal of 1,000 users

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('/api/waitlist');
                if (response.ok) {
                    const data = await response.json();
                    setStats(prev => prev + parseInt(data.userCount.toString()));
                }
            } catch (error) {
                console.error('Failed to fetch stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    // Count up animation
    useEffect(() => {
        if (stats === 226 || loading) return;

        let startTime: number | null = null;
        const duration = 2000;
        let animationFrame: number;
        const startValue = 226;
        const endValue = stats;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const easeOut = 1 - Math.pow(1 - percentage, 3);
            const currentCount = Math.floor(startValue + (easeOut * (endValue - startValue)));

            setDisplayCount(currentCount);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setDisplayCount(stats);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [stats, loading]);

    const percentage = Math.min((displayCount / goal) * 100, 100);

    return (
        <div className="w-full max-w-xl mx-auto px-4">
            <div className="flex flex-col items-center gap-4">
                {/* Number Display */}
                <div className="text-center">
                    <h2 className="text-5xl flex items-center font-bold text-black tabular-nums">
                        {loading ? '—' : displayCount.toLocaleString()}
                        <span className="text-3xl ml-2 font-normal">Joined</span>
                    </h2>
                </div>

                {/* Progress Bar */}
                <div className="w-full">
                    <div className="w-full h-8 p-0.5 rounded-full overflow-hidden border-2 border-black">
                        <div
                            className="h-full bg-black transition-all duration-500 ease-out rounded-full"
                            style={{ width: `${percentage}%` }}
                        />
                    </div>
                    <div className="flex justify-between mt-2 text-sm font-telegraf font-bold text-black/60">
                        <span>226</span>
                        <span>{goal.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

