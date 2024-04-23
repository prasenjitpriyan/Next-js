import React from "react";

const BlogePostPage = ({ params }) => {
  return (
    <div>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </div>
  );
};

export default BlogePostPage;
