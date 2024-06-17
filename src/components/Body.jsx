import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  const fetchData = async () => {
    setShowShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const res = await data.json();
    setTimeout(() => {
      setShowShimmer(false);
      setMemes((memes) => [...memes, ...res.memes]);
    }, 3000);
  };

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY + 1 >= document.body.scrollHeight) {
      fetchData();
    }
  };

  console.log({ showShimmer });

  return (
    <div>
      <div className="flex items-center flex-wrap justify-center gap-8">
        {memes?.length > 0 &&
          memes?.map((meme, i) => <Card key={i} data={meme} />)}

        {showShimmer && <Shimmer />}
      </div>
    </div>
  );
};
export default Body;
