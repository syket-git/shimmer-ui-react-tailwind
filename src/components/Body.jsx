import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState(null);

  const fetchData = async () => {
    const data = await fetch("https://meme-api.com/gimme/20");
    const res = await data.json();
    setTimeout(() => {
      setMemes(res?.memes);
    }, 4000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {!memes ? (
        <Shimmer />
      ) : (
        <div className="flex items-center flex-wrap justify-center gap-8">
          {memes.map((meme, i) => (
            <Card key={i} data={meme} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Body;
