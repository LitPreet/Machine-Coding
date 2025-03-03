import React, { useEffect, useState } from "react";



interface Post{
    userId: number,
    id: number,
    title: string,
    body: string
}
const InfiniteScrolling = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const data = await res.json();
      setPosts((prev:Post[]) => [...prev, ...data]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  // Throttle function to control function execution frequency
  const throttle = (func:Function, delay:number) => {
    let lastExecution = 0;
    return (...args:any) => {
      const now = Date.now();
      if (now - lastExecution >= delay) {
        lastExecution = now;
        func(...args);
      }
    };
  };

  const infiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  // Throttle the infiniteScroll function with a 300ms delay
  const throttledInfiniteScroll = throttle(infiniteScroll, 300);

  useEffect(() => {
    window.addEventListener("scroll", throttledInfiniteScroll);
    return () => window.removeEventListener("scroll", throttledInfiniteScroll);
  }, [throttledInfiniteScroll]);

  return (
    <div className="my-2">
      {posts &&
        posts.length > 0 &&
        posts.map((post:Post, i) => {
          return (
            <div
              key={i}
              className="p-2 my-2 bg-white border border-black flex flex-col items-center justify-center w-[800px]"
            >
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
          );
        })}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScrolling;
