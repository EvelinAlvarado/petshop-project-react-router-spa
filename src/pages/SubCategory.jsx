import { useParams } from "react-router-dom";
import { ListPosts } from "../components/ListPosts";

export const SubCategory = () => {
  const { subcategory } = useParams();
  return <ListPosts endpoint={`/posts?subcategory=${subcategory}`} />;
};
