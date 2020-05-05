import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../user/userApi";
import { getPost, remove, uri } from "./adminApi";
import { Link } from "react-router-dom";

const ManagePost = () => {
  const [post, setPost] = useState([]);

  const loadPost = () => {
    getPost().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setPost(data);
      }
    });
  };

  const { user, token } = isAuthenticated();

  const destroy = (postId) => {
    remove(postId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadPost();
      }
    });
  };

  useEffect(() => {
    loadPost();
    console.log(post);
  }, []);

  return (
    <Layout
      title="Mange Post!"
      description="Perform CRUD on Post"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-md-12">
          <ul className="list-group">
            {post.map((results, i) => {
              const postPhoto = results._id
                ? `${uri}/post/photo/${results._id}?${new Date().getTime()}`
                : "";
              return (
                <li
                  key={i}
                  className="list-group d-flex justify-content-between align-items-center"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <strong>{results.title}</strong>
                    </div>
                    <div class="col-sm-6">
                      <Link to={`/post/update/${results._id}`}>
                        <span className="badge badge-warning badge-pill">
                          Edit
                        </span>
                      </Link>
                      <span
                        onClick={() => destroy(results._id)}
                        className="badge badge-danger badege-pill"
                      >
                        Delete
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
            ;
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ManagePost;
