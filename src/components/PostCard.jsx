import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function PostCard({ $id, title, featuredImage, content }) {
  const mystyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "5",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxHeight: "125px",
  };
  return (
    <div className="w-full border border-t  rounded-xl p-4">
      <Link to={`/post/${$id}`}>
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt="{title}"
            className="rounded-xl"
          />
        </div>
      </Link>
      <Link to={`/post/${$id}`}>
        <h2 className="text-2xl font-bold text-center text-[#b75660]">
          {title}
        </h2>
      </Link>
      <div className="browser-css" style={mystyle}>
        {parse(content)}
      </div>
      <div className="text-center mt-2">
        <Link to={`/post/${$id}`}>
          <button className="bg-white border border-t border-[#b75660] text-slate-500 rounded-full px-4 py-2 hover:bg-[#b75660] hover:text-white font-semibold">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
