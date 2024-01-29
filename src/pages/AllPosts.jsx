import React, { useEffect, useState } from "react";
import { Container, Loader, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (posts.length === 0) {
    return (
      <div className="mx-auto w-[200px] my-10 p-10">
        <Loader />
      </div>
    );
  }
  return (
    <div className="w-full">
      <div className="bg-[#b75660] py-20">
        <h1 className="text-center text-white font-semibold text-4xl">
          All Blogs
        </h1>
      </div>
      <Container>
        <div className="flex flex-wrap py-8 mx-auto">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-full md:w-1/2 lg:w-1/3">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
