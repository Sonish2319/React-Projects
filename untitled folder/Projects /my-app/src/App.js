import { useState, useEffect } from "react";
import PostCard from "./componenst/PostCards";
import "./App.css";
import { getPosts } from "./api";
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);
  return (
    <div>
      {data ? (
        data.map((e) => <PostCard title={e.title} body={e.body} />)
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}

export default App;
