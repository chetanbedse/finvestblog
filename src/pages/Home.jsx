import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, Loader, PostCard } from "../components";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const loggedIn = useSelector((state) => state.auth.status);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return loggedIn ? (
    <div className="w-full">
      <div className="bg-[#b75660] py-20">
        <h1 className="text-center text-white font-semibold text-4xl">Blogs</h1>
      </div>
      {posts.length ? (
        <Container>
          <div className="flex flex-wrap py-8 mx-auto">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-full md:w-1/2 lg:w-1/3">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      ) : (
        <Container>
          <div className="py-20 mx-auto text-center">
            <h1 className="font-semibold text-4xl">
              No Posts available. Create one.
            </h1>
          </div>
        </Container>
      )}
    </div>
  ) : (
    <div className="w-full">
      <div className="bg-[#b75660] py-20">
        <h1 className="text-center text-white font-semibold text-4xl">
          Login to view Blogs
        </h1>
      </div>
    </div>
  );
}

export default Home;
