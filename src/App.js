import { useEffect, useState } from "react";
import CardRow from "./components/CardRow";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
    )
      .then((res) => res.json())
      .then((data) => setPosts(data));
  });

  return (
    <>
      {posts.length === 0 && <div class="p-card">No posts found</div>}
      {posts.length > 0 && <CardRow posts={posts} />}
    </>
  );
}

export default App;
