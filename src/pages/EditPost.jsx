import React, { useEffect, useState } from "react";
import { Container, Loader, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <div>
      <div className="bg-[#b75660] py-12">
        <h1 className="text-center text-white font-semibold text-4xl">
          Edit Post
        </h1>
      </div>
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : (
    <div className="mx-auto w-[200px] my-10 p-10">
      <Loader />
    </div>
  );
}

export default EditPost;
