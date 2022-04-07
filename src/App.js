import "./App.scss";
import { useEffect, useState } from "react";
import { Card } from "@mui/material";

const url =
  "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setData(response);
      });
  }, []);

  return (
    <div className="App">
      {data.map((item) => (
        <Card className="card">
          <div className="img-dev">
            <img src={item.image_link} alt="Image" />
          </div>
        </Card>
      ))}
    </div>
  );
}

export default App;
