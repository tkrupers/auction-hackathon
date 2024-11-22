import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { getAuctionsByUserId } from '../auction-actions';
import SimpleGrid from '@/components/SimpleGrid';
import { AuctionCard } from '@/components/Auctions/AuctionCard';

export default async function ProtectedPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect('/sign-in');
    }

    const userAuctions = await getAuctionsByUserId(user.id);

    return (
        <div className="flex-1 w-full flex flex-col gap-12">
            <h1 className="text-2xl font-semibold">Your auctions</h1>
            <SimpleGrid>
                {userAuctions.map((auction) => (
                    <AuctionCard
                        key={auction.id}
                        {...auction}
                        showButton={false}
                        to={`/admin/auction/${auction.id}`}
                    />
                ))}
            </SimpleGrid>
        </div>
    );
}
