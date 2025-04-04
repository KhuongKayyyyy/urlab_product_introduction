// /app/api/views/[id]/route.ts
import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import { WriteClient } from '@/sanity/lib/write-client';
import { STARTUP_VIEW_QUERY } from '@/sanity/lib/query';

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const { views } = await client.fetch(STARTUP_VIEW_QUERY, { id });
  const newViews = views + 1;

  await WriteClient.patch(id).set({ views: newViews }).commit();

  return NextResponse.json({ views: newViews });
}
