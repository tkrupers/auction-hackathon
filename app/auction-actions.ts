"use server";

import { createClient } from "@/utils/supabase/server";

export const getAuctions = async () => {
  const db = await createClient();

  const { data, error } = await db.from("auctions").select();

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};

export const getAuctionById = async (id: number) => {
  const db = await createClient();

  const { data, error } = await db
    .from("auctions")
    .select(
      `
    id,
    title,
    description,
    price,
    imgUrl,
    ownerId,
    winnerId,
    active,

    bids (
    id,
    price
    )
`
    )
    .eq("id", id);

  if (error) {
    console.error(error);
    return null;
  }

  return data;
};

export const placeBid = async (
  auctionId: number,
  price: number,
  userId: string
) => {
  const db = await createClient();

  const { error } = await db.from("bids").insert({
    auctionId,
    price,
    userId,
  });

  if (error) {
    console.error(error);
    return false;
  }

  return true;
};
