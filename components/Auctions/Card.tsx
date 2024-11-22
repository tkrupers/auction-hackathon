import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { CardProps } from './CardsContainer';

const formatDate = (date: Date) => {
    return date.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

export const AuctionCard = ({ card }: { card: CardProps }) => {
    return (
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
                <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover rounded-lg" />
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
    );
};
