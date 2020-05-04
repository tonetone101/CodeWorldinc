import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { list } from "./homeApi";

const Home = () => {
  const [post, setPost] = useState([]);

  const loadPost = () => {
    list().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setPost(data);
      }
    });
  };

  useEffect(() => {
    loadPost();
    console.log(post);
  }, []);

  return (
    <Layout
      title="CodeWorldinc"
      description="Its Code Code world"
      className="container-fluid"
    >
      <h4>
        Here at CodeWorldinc, our goal is to make an impact or be part of making
        an impact on the world. We are looking to serve and be an asset to those
        who want to serve others via art, education, music, comedy, business
        whether non profit or profit. Our values goes beyond coding. Our clients
        will know that we care about their vision while still producing quality
        products/ software .
      </h4>
      <h2>My Post</h2>

      <div className="column">
        {post.map((results, i) => {
          return (
            <div key={i} className="mt-5 mb-5">
              {results.title}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;
