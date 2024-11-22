
export default async function AuctionDetailPage({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const  { id } = await params
    
    return (
        <>Auction detail {id} </>
    )
}