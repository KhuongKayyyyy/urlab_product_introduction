import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard } from "../../components/StartupCard";
import { STARTUP_QUERY } from "@/sanity/lib/query";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
export default async function Home({ searchParams }: { searchParams: { query?: string } }) {

  const query = (await searchParams).query;
  const params = {search :query || null};
  const {data:posts} = await sanityFetch({query :STARTUP_QUERY,params});
  console.log(JSON.stringify(posts, null, 2));
  return (
   <>
   <section className="pink_container --primary">
   <h1 className="heading">Let us introduce you what we have done so far</h1>
   <p className="sub-heading !max-w-3xl">Một cái mô tả nhỏ ở đây, anh em suy nghĩ đi</p>

   <SearchForm query = {query}/>
   </section>
   <section className ="section_container">
    <p className="text-30-semibold">
      {query ? `Search results for "${query}"` : "All products"}  
    </p>
    <ul className = "mt-7 card_grid">
      {posts?.length ? posts.map((post: StartupTypeCard) => (
        <StartupCard 
        key = {post?._id}
        post = {post}
          // description={post.description}
          // image={post.image}
          // category={post.category}
          // views={post.views}
          // author={post.author}
          // createdAt={post._createdAt}
        />
    )) : <p>No posts found.</p>}
    </ul>
   </section>

   <SanityLive></SanityLive>
   </>
  );
}
