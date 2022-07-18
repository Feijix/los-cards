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

  return <CardRow posts={posts} />;
}

export default App;
