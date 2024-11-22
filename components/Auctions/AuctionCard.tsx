'use client';

import { Tables } from '@/types';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/utils/cn';

type Props = Tables<'auctions'>;

const formatDate = (date: string) => {
    return new Date(date).toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

const priceFormatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR',
});

export const AuctionCard = (props: Props) => {
    const router = useRouter();
    const { id, title, description, imgUrl, price, active, endsAt } = props;

    const handleClick = () => router.push(`/auction/${id}`);

    return (
        <Card key={id} onClick={handleClick} className="cursor-pointer">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle>{title}</CardTitle>
                    <span
                        className={cn('flex size-2 rounded-full ', {
                            'bg-green-500': active,
                            'bg-red-500': !active,
                        })}
                    />
                </div>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <img src={imgUrl} alt={title} className="w-full h-48 object-cover rounded-lg" />
            </CardContent>
            <CardFooter className="flex flex-col items-end">
                <div className="flex flex-col md:flex-row gap-6 justify-start items-start mb-3">
                    <div>
                        <p className="text-sm text-muted-foreground">Current price</p>
                        <p className="text-lg font-semibold">{priceFormatter.format(price)}</p>
                    </div>
                    <Button variant="default" size="sm" asChild>
                        <Link href={`/auction/${id}`}>Go to auction</Link>
                    </Button>
                </div>
                <div>
                    <Badge variant="outline">
                        {active ? 'Ends at' : 'Ended at'} {formatDate(endsAt)}
                    </Badge>
                </div>
            </CardFooter>
        </Card>
    );
};
