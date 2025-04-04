import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/query';
import { notFound } from 'next/navigation';
import {formatDate} from '@/lib/utils';
import React, { Suspense } from 'react';
import Link from 'next/link';
import markdonwit from 'markdown-it';
import {Skeleton} from '@/components/ui/skeleton';
import View from '@/components/View';
const md = markdonwit();    

export const experimental_ppr = true;
const Page = async({params} :{params : Promise<{id:string}>}) => {
    const id = (await params).id;

    const post = await client.fetch(STARTUP_BY_ID_QUERY,{id});

    if(!post) return notFound();
    const parsedContent = md.render(post?.pitch || '');
    return (
        <>
        <section className='pink_container !min-h-[230px]'>
            <p className='tag-tri'>{formatDate(post?._createdAt)}</p>
        <h1 className="heading">
            {post.title}
        </h1>
        <p className='sub-heading !max-w-5xl'>{post?.description}</p>
        </section>
        
        <section className='section_container'>
            <img src={post.image} alt='thumbnail' className='w-full h-auto rounded-xl'></img>

            <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
                <div className='flex-between gap-5'>
                    <Link href={`user/${post.author?._id}`}>
                        <div className='flex gap-5'>
                            <img src={post.author?.image} alt='author' className='w-16 h-16 rounded-full object-cover' />
                            <div>
                                <h2 className='text-20-medium font-semibold'>{post.author?.name}</h2>
                                <p className='text-16-medium text-gray-500'>@{post.author?.username}</p>
                                <p className='text-16-medium text-gray-500'>{post.author?.bio}</p>
                            </div>
                        </div>
                    </Link>
                    <p className = "category-tag">{post.category}</p>

                </div>
                <h3 className='text-30-bold'>Product Detail</h3>
                {parsedContent ?
                      <div
                        className="markdown-content"
                        dangerouslySetInnerHTML={{ __html: parsedContent }}
                      />
                 : <p className='no-result'>No details provided</p>}
            </div>

            
            <hr className='divider'></hr>
            {/* editor selected startup */}

        </section>

        <Suspense fallback={<Skeleton className ="view_skeleton"></Skeleton>}>
        <View id ={id}></View>
        </Suspense>
        </>
        
    )
};
export default Page;