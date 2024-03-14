import { ListPosts } from "../components/ListPosts.jsx";
import { ListCategories } from "../components/ListCategories.jsx";
export const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet News</h2>
      </div>
      <ListCategories />
      <ListPosts endpoint={"/posts"} />
    </main>
  );
};
