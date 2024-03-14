import { useEffect, useState } from "react";
import {
  useParams,
  Routes,
  Route,
  Link,
  useResolvedPath,
} from "react-router-dom";
import { fetchData } from "../api/api";
import { ListCategories } from "../components/ListCategories";
import { ListPosts } from "../components/ListPosts";
import { SubCategory } from "./SubCategory";
import "../assets/css/blog.css";

export const Category = () => {
  const [subcategories, setSubcategories] = useState([]);
  const { id } = useParams();

  const urlSubcategory = useResolvedPath("").pathname;
  // console.log(urlSubcategory);

  useEffect(() => {
    // Fetch subcategories for the selected category
    fetchData(`/categories?id=${id}`, (response) =>
      setSubcategories(response[0].subcategories)
    );
  }, [id]);

  return (
    <>
      {/* Display category name and subcategories */}
      <div className="container">
        <h2 className="title-page">Pet News</h2>
      </div>
      <ListCategories />
      <ul className="category-list container flex">
        {subcategories.map((subcategory) => (
          <li
            className={`category-list__category category-list__category--${id}`}
            key={subcategory}
          >
            {/* Link to subcategory page */}
            <Link to={`${urlSubcategory}/${subcategory}`}>{subcategory}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        {/* Route for displaying posts for selected category */}
        <Route
          path="/"
          element={<ListPosts endpoint={`/posts?category=${id}`} />}
        />
        {/* Route for subcategory pages */}
        <Route path="/:subcategory" element={<SubCategory />} />
      </Routes>
    </>
  );
};
