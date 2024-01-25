import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, Loader, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (posts.length === 0) {
    return (
<<<<<<< HEAD
      <div className="mx-auto w-[200px] my-10 p-10">
        <Loader />
=======
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Post is not available. Please add one!
              </h1>
            </div>
          </div>
        </Container>
>>>>>>> cba93fa114fddd17369af3215104a4a2b6a2bdab
      </div>
    );
  }
  return (
    <div className="w-full">
      <div className="bg-[#b75660] py-12">
        <h1 className="text-center text-white font-semibold text-4xl">Blogs</h1>
      </div>
      <Container>
        <div className="flex flex-wrap py-8 mx-20">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/3">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
