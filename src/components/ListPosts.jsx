import { useState, useEffect } from "react";
import { fetchData } from "../api/api.js";
import "../assets/css/components/card.css";
import { Link } from "react-router-dom";

export const ListPosts = ({ url }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData(url, setPosts);
    console.log(posts);
  }, [url]);
  return (
    <section className="posts container">
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
