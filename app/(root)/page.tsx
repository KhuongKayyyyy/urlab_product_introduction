import SearchForm from "../../components/SearchForm";
import StartupCard from "../../components/StartupCard";
export default async function Home({ searchParams }: { searchParams: { query?: string } }) {

  const query = (await searchParams).query;

  const posts = [{
    _id: "1",
    _createdAt: new Date(),
    views: 100,
    author: {_id: "1", name: "UR Lab"},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.",
    image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRG1Q9B92H2y-UtN5gS-CCVop0JSG14NpdQg&s",
    category: "UAV",
    title: "Drone",
  },
  {
    _id: "1",
    _createdAt: new Date(),
    views: 100,
    author: {_id: "1", name: "UR Lab"},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.",
    image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRG1Q9B92H2y-UtN5gS-CCVop0JSG14NpdQg&s",
    category: "UAV",
    title: "Drone",
  },
  {
    _id: "1",
    _createdAt: new Date(),
    views: 100,
    author: {_id: "1", name: "UR Lab"},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.",
    image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRG1Q9B92H2y-UtN5gS-CCVop0JSG14NpdQg&s",
    category: "UAV",
    title: "Drone",
  },
  {
    _id: "1",
    _createdAt: new Date(),
    views: 100,
    author: {_id: "1", name: "UR Lab"},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.",
    image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRG1Q9B92H2y-UtN5gS-CCVop0JSG14NpdQg&s",
    category: "UAV",
    title: "Drone",
  },
  {
    _id: "1",
    _createdAt: new Date(),
    views: 100,
    author: {_id: "1", name: "UR Lab"},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.",
    image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRG1Q9B92H2y-UtN5gS-CCVop0JSG14NpdQg&s",
    category: "UAV",
    title: "Drone",
  },
  {
    _id: "1",
    _createdAt: new Date(),
    views: 100,
    author: {_id: "1", name: "UR Lab"},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.",
    image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRG1Q9B92H2y-UtN5gS-CCVop0JSG14NpdQg&s",
    category: "UAV",
    title: "Drone",
  }
]
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
      {posts?.length ? posts.map((post, index) => (
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
   </>
  );
}
