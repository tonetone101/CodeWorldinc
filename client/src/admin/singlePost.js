import React, { useEffect, useState } from "react";
import Layout from "../core/Layout";
import { singlePost, remove, uri } from "./adminApi";
import { isAuthenticated } from "../user/userApi";
import { Link, Redirect } from "react-router-dom";

const Post = (props) => {
  const [post, setpost] = useState({});

  const [error, setError] = useState(false);
  const [deleteSuccess, setdeleteSuccess] = useState(false);

  const singlepost = (postId) => {
    singlePost(postId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setpost(data);
      }
    });
  };

  useEffect(() => {
    // grabs postId from params
    const postId = props.match.params.postId;
    singlepost(postId);
  }, [props]); // when props changes useEffect runs again

  return (
    <Layout
      title={post && post.name}
      description={post && post.about && post.about.substring(0, 100)}
      className="container-fluid"
    >
      <div className="container">
        <div className="text-center">
          {post && post.about && (
            <div className="text-center">
              <img
                className="img-thumbnail"
                src={`${uri}/post/photo/${post._id}`}
                width="400"
                height="400"
              />
              <p>{post.title}</p>
              <p>{post.about}</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Post;
