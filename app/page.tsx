import SimpleGrid from '@/components/SimpleGrid';
import { getAuctions } from './auction-actions';
import { AuctionCard } from '@/components/Auctions/AuctionCard';

export default async function Index() {
    const auctions = await getAuctions();
    const active = auctions.filter((auction) => new Date(auction.endsAt) > new Date());
    const ended = auctions.filter((auction) => new Date(auction.endsAt) <= new Date());

    const data = [
        { title: 'Active auctions', items: active },
        { title: 'Ended auctions', items: ended },
    ];

    return (
        <main className="flex-1 flex flex-col gap-6 px-4">
            {data.map((section) => (
                <div key={section.title}>
                    <h3 className="font-medium text-xl mb-4">{section.title}</h3>
                    <SimpleGrid>
                        {section.items.map((card) => (
                            <AuctionCard key={card.id} {...card} />
                        ))}
                    </SimpleGrid>
                </div>
            ))}
        </main>
    );
}
