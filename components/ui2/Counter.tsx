'use client';

import { useEffect, useState } from 'react';

interface Stats {
    total: number;
    userCount: number;
    creatorCount: number;
}

function useCountUp(end: number, duration: number = 2000) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (end === 0) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out cubic for smooth deceleration
            const easeOut = 1 - Math.pow(1 - percentage, 3);
            const currentCount = Math.floor(easeOut * end);

            setCount(currentCount);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return count;
}

export default function Counter() {
    const [stats, setStats] = useState<Stats>({ total: 0, userCount: 0, creatorCount: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('/api/waitlist');
                if (response.ok) {
                    const data = await response.json();
                    setStats(data);
                }
            } catch (error) {
                console.error('Failed to fetch stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const StatItem = ({ label, value }: { label: string; value: number }) => {
        const animatedValue = useCountUp(value);

        return (
            <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-telegraf font-bold uppercase tracking-wider text-black/60">
                    {label}
                </p>
                <p className="text-6xl font-telegraf font-bold text-black tabular-nums">
                    {loading ? '—' : animatedValue.toLocaleString()}
                </p>
            </div>
        );
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 mt-40">
            <h1 className="text-6xl  font-bold text-black text-center">Waitlisting</h1>
            <div className="flex  justify-around items-center gap-8 py-12  border-black rounded-3xl bg-white">
                <StatItem label="Total" value={stats.total} />
                <div className="h-20 w-px bg-black/20" />
                <StatItem label="Consumers" value={stats.userCount} />
                <div className="h-20 w-px bg-black/20" />
                <StatItem label="Creators" value={stats.creatorCount} />
            </div>
        </div>
    );
}

