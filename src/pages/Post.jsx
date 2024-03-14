import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchData } from "../api/api";
import "../assets/css/components/card.css";

export const Post = () => {
  const [post, setPost] = useState({});

  // console.log(useParams());
  // Get post ID from URL params: Destructuring useParams
  const { id } = useParams();
  // console.log(id);

  // Get navigate function for navigation
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch individual post data based on post ID
    fetchData(`/posts/${id}`, setPost).catch(() => {
      // Redirect to 404 page if post not found
      navigate("/not-found");
    });
  }, [id]);

  return (
    <main className="container flex flex--center">
      <article className="card post">
        <h2 className="post-card__title">{post.title}</h2>
        <p className="text__card">{post.body}</p>
      </article>
    </main>
  );
};
