import { getAuctionById } from '@/app/auction-actions';
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

export default async function AuctionDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const data = await getAuctionById(Number(id));

    if (!data || data.length === 0) {
        return <div>Auction not found</div>;
    }

    const { title, description, imgUrl, price, active, winnerId } = data[0];

    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">{title}</h1>
                <Badge className="text-sm" variant={active ? 'active' : 'destructive'}>
                    {active ? 'Active' : 'Ended'}
                </Badge>
            </div>
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
                    {active && <PlaceBid />}
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
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>
                            <strong>test@tets.gr</strong>
                        </TableCell>
                        <TableCell className="text-right">200€</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>test@tets.gr</TableCell>
                        <TableCell className="text-right">200€</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>test@tets.gr</TableCell>
                        <TableCell className="text-right">200€</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>test@tets.gr</TableCell>
                        <TableCell className="text-right">200€</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
