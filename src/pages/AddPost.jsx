import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div>
      <div className="bg-[#b75660] py-20">
        <h1 className="text-center text-white font-semibold text-4xl">
          Add Post
        </h1>
      </div>
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
