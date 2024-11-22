import { getUser } from '@/app/actions';
import { getAuctionById } from '@/app/auction-actions';
import CountDown from '@/components/Auctions/CountDown';
import { PlaceBid } from '@/components/Auctions/PlaceBid';
import { Badge } from '@/components/ui/badge';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import Image from 'next/image';

const priceFormatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR',
});

export default async function AuctionDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const user = await getUser();
    const data = await getAuctionById(parseInt(id));

    if (!data) {
        return <div>Auction not found</div>;
    }

    const { title, description, imgUrl, price, active, winnerId, bids, endsAt } = data;

    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">{title}</h1>
                <Badge className="text-sm" variant={active ? 'active' : 'destructive'}>
                    {active ? 'Active' : 'Ended'}
                </Badge>
            </div>
            <CountDown endsAt={endsAt} />
            <div className="w-full gap-10 flex justify-between">
                <Image src={imgUrl} alt={title} width={450} height={450} className="flex-grow-0 w-1/2" />
                <div className="flex flex-grow-2 w-full flex-col ">
                    {description && (
                        <div className="flex-1">
                            <p className="text-xl text-muted-foreground">Description</p>
                            <p className="text-lg font-semibold">{description}</p>
                        </div>
                    )}
                    <div className="flex-1">
                        <p className="text-xl text-muted-foreground">
                            {active ? 'Current price' : 'Sold for'}
                        </p>
                        <p className="text-lg font-semibold">{price}€</p>
                    </div>
                    {active && <PlaceBid auctionId={parseInt(id)} userId={user?.id} />}
                </div>
            </div>
            <Table>
                <TableCaption>A list of recent biddings</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Bid</TableHead>
                        <TableHead>User email</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bids.map((bid: any) => (
                        <TableRow>
                            <TableCell>{bid.id}</TableCell>
                            <TableCell>{bid.userId}</TableCell>
                            <TableCell className="text-right">{priceFormatter.format(bid.price)}</TableCell>
                        </TableRow>
                    ))}
                    {bids.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={3}>No biddings yet</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
