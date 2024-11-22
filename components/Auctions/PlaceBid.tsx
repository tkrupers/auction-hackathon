'use client';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { placeBid } from '@/app/auction-actions';
import { toast } from '@/hooks/use-toast';

export const PlaceBid = ({ auctionId, userId }: { auctionId: number; userId: string | undefined }) => {
    const [bid, setBid] = useState<number>(0);

    // todo: implement place bid logic
    const onSubmit = () => {
        if (!userId) {
            toast({
                title: 'You need to be logged in to place a bid',
                description: 'There was a problem with your request.',
                variant: 'destructive',
            });

            return;
        }

        placeBid(auctionId, bid, userId);
    };

    return (
        <div className="flex flex-col gap-2">
            <Input
                placeholder="Enter your bid"
                value={bid}
                onChange={(e) => setBid(Number(e.target.value))}
            />
            <Button onClick={onSubmit}>Place bid</Button>
        </div>
    );
};
