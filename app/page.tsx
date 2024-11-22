import { CardsContainer } from '@/components/CardsContainer';

export default async function Index() {
    const auctions = [
        {
            id: 1,
            title: 'Auction 1',
            description: 'Auction 1 description',
            imageUrl: 'https://via.placeholder.com/150',
            price: 100,
            active: true,
            endsAt: new Date(),
        },
        {
            id: 2,
            title: 'Auction 2',
            description: 'Auction 2 description',
            imageUrl: 'https://via.placeholder.com/150',
            price: 200,
            active: true,
            endsAt: new Date(),
        },
        {
            id: 3,
            title: 'Auction 3',
            description: 'Auction 3 description',
            imageUrl: 'https://via.placeholder.com/150',
            price: 300,
            active: true,
            endsAt: new Date(),
        },
        {
            id: 4,
            title: 'Auction 4',
            description: 'Auction 4 description',
            imageUrl: 'https://via.placeholder.com/150',
            price: 400,
            active: true,
            endsAt: new Date(),
        },
    ];

    const endedAuctions = [
        {
            id: 5,
            title: 'Auction 5',
            description: 'Auction 5 description',
            imageUrl: 'https://via.placeholder.com/150',
            price: 500,
            active: false,
            endsAt: new Date(),
        },
        {
            id: 6,
            title: 'Auction 6',
            description: 'Auction 6 description',
            imageUrl: 'https://via.placeholder.com/150',
            price: 600,
            active: false,
            endsAt: new Date(),
        },
        {
            id: 7,
            title: 'Auction 7',
            description: 'Auction 7 description',
            imageUrl: 'https://via.placeholder.com/150',
            price: 700,
            active: false,
            endsAt: new Date(),
        },
        {
            id: 8,
            title: 'Auction 8',
            description: 'Auction 8 description',
            imageUrl: 'https://via.placeholder.com/150',
            price: 800,
            active: false,
            endsAt: new Date(),
        },
    ];

    return (
        <main className="flex-1 flex flex-col gap-6 px-4">
            <h3 className="font-medium text-xl mb-4">Active auctions</h3>
            <CardsContainer cards={auctions} />

            <h3>Ended auctions</h3>
            <CardsContainer cards={endedAuctions} />
        </main>
    );
}
