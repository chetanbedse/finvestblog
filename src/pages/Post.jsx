import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container, Loader } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && (userData ? post.userId === userData.$id : false);

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div>
      <div className="bg-[#b75660] py-20">
        <h1 className="text-center text-white font-semibold text-4xl">Blog</h1>
      </div>
      <Container>
        <div className="py-8 mx-auto flex flex-wrap">
          <div className="w-2/3 mb-4 border rounded-xl shadow p-2">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-xl"
            />
          </div>
          {isAuthor && (
            <div className="w-1/3  text-center">
              <Link to={`/edit-post/${post.$id}`}>
                <Button
                  bgColor="bg-green-500"
                  className="w-full lg:w-1/3 mx-2 mb-1"
                >
                  Edit
                </Button>
              </Link>
              <Button
                bgColor="bg-red-500"
                className="w-full lg:w-1/3 mx-2 mt-1"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          )}
          <div className="w-full lg:w-2/3 mb-6 px-2">
            <h1 className="text-2xl font-bold text-[#b8565f]">{post.title}</h1>
            <div className="browser-css text-justify">
              {parse(post.content)}
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : (
    <div className="mx-auto w-[200px] my-10 p-10">
      <Loader />
    </div>
  );
}
