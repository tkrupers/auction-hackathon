'use client';

import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Tables } from '@/types';
import { useForm, Form } from 'react-hook-form';

export default function AuctionForm({ auction }: { auction: Tables<'auctions'> }) {
    const form = useForm({
        defaultValues: {
            title: auction.title,
            description: auction.description,
            price: auction.price,
            imgUrl: auction.imgUrl,
        },
    });

    function onSubmit(data: any) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <Input {...form.register('title')} />
                <textarea {...form.register('description')} />
                <Input {...form.register('price')} />
                <Input {...form.register('imgUrl')} />
                <p>{auction.description}</p>
            </form>
        </Form>
    );
}
