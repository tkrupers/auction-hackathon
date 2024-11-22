import { AuctionCard } from './Card';

export type CardProps = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    active: boolean;
    endsAt: Date;
};

export const CardsContainer = ({ cards }: { cards: CardProps[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
                <AuctionCard card={card} key={card.id}/>
            ))}
        </div>
    );
};
