import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

type CardProps = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    active: boolean;
    endsAt: Date;
};

const formatDate = (date: Date) => {
    return date.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

export const CardsContainer = ({ cards }: { cards: CardProps[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
                <Card key={card.id}>
                    <CardHeader>
                        <div className="flex justify-between">
                            <CardTitle>{card.title}</CardTitle>
                            <Badge className="text-sm" variant={card.active ? 'active' : 'destructive'}>
                                {card.active ? 'Active' : 'Ended'}
                            </Badge>
                        </div>
                        <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <img
                            src={card.imageUrl}
                            alt={card.title}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                    </CardContent>
                    <CardFooter className="flex flex-col  md:flex-row gap-6 justify-start items-start">
                        <div className="flex-1">
                            <p className="text-sm text-muted-foreground">Current price</p>
                            <p className="text-lg font-semibold">{card.price} €</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-muted-foreground">Ends at</p>
                            <p className="text-lg font-semibold">{formatDate(card.endsAt)}</p>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};