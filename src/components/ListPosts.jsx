import { useState, useEffect } from "react";
import { fetchData } from "../api/api";
import { Link } from "react-router-dom";
import "../assets/css/components/card.css";

export const ListPosts = ({ endpoint }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch and display posts based on the endpoint
    fetchData(endpoint, setPosts);
    console.log(posts);
  }, [endpoint]);

  return (
    <section className="posts container">
      {/* Display list of posts */}
      {posts.map((post) => {
        const { id, title, meta_description, category } = post;
        return (
          <Link
            to={`/posts/${id}`}
            className={`post__card post-card--${category}`}
            key={id}
          >
            <article>
              <h3 className="post-card__title">{title}</h3>
              <p className="post-card__meta">{meta_description}</p>
            </article>
          </Link>
        );
      })}
    </section>
  );
};
