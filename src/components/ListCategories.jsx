import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../api/api";
import "../assets/css/blog.css";

export const ListCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch and display list of categories
    fetchData(`/categories`, setCategories);
  }, []);
  return (
    <ul className="category-list container flex">
      {/* Display list of categories */}
      {categories.map((category) => (
        <Link to={`/category/${category.id}`} key={category.id}>
          <li
            className={`category-list__category category-list__category--${category.id}`}
          >
            {category.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};
