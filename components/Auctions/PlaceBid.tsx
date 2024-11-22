'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const PlaceBid = () => {
    const [bid, setBid] = useState<number>(0);

    // todo: implement place bid logic

    return (
        <div className="flex flex-col gap-2">
            <Input
                type="number"
                placeholder="Enter your bid"
                value={bid}
                onChange={(e) => setBid(Number(e.target.value))}
            />
            <Button>Place bid</Button>
        </div>
    );
};
