import { getAuctionById } from '@/app/auction-actions';

import AuctionForm from './auction-form';

export default async function EditAuctionPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const auction = await getAuctionById(parseInt(id));

    if (!auction) {
        return <>Auction not found</>;
    }

    return <AuctionForm auction={auction} />;
}
