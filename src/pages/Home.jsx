import { ListPosts } from "../components/ListPosts.jsx";
export const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet News</h2>
      </div>
      <ListPosts url={"/posts"} />
    </main>
  );
};
