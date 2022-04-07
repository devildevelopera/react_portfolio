import React, { useState, useEffect } from "react";
import Note from "./Note";
import DraggableMasonryLayout from "./DraggableMasonryLayout";

const url =
  "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

function Notes() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [nodes, setNodes] = useState([]);
  const [fNodes, setFNodes] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        setNodes(response.slice(0, 30));
        setFNodes(response.slice(0, 30));
      });
  }, []);

  useEffect(() => {
    setFNodes(nodes.filter((item) => item.name.includes(search)));
  }, [search]);

  return (
    <div className="App">
      <input value={search} onChange={handleChange} />
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          {fNodes.length && (
            <DraggableMasonryLayout>
              {fNodes.map((node, index) => (
                <Note node={node} index={index} key={node.id} />
              ))}
            </DraggableMasonryLayout>
          )}
        </>
      )}
    </div>
  );
}

export default Notes;
