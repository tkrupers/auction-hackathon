'use client';

import { Tables } from '@/types';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { useRouter } from 'next/navigation';

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

export const AuctionCard = (props: Props) => {
    const router = useRouter();
    const { id, title, description, imgUrl, price, active, endsAt } = props;

    const handleClick = () => router.push(`/auction/${id}`);

    return (
        <Card key={id} onClick={handleClick} className="cursor-pointer">
            <CardHeader>
                <div className="flex justify-between">
                    <CardTitle>{title}</CardTitle>
                    <Badge className="text-sm" variant={active ? 'active' : 'destructive'}>
                        {active ? 'Active' : 'Ended'}
                    </Badge>
                </div>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <img src={imgUrl} alt={title} className="w-full h-48 object-cover rounded-lg" />
            </CardContent>
            <CardFooter className="flex flex-col  md:flex-row gap-6 justify-start items-start">
                <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Current price</p>
                    <p className="text-lg font-semibold">{price} €</p>
                </div>
                <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Ends at</p>
                    <p className="text-lg font-semibold">{formatDate(endsAt)}</p>
                </div>
            </CardFooter>
        </Card>
    );
};
