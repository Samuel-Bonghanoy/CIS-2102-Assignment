import { useState, useEffect } from "react";
import "./WaifuIsLaifu.css";

function WaifuisLaifu() {
  const [waifu, setWaifu] = useState(null);
  const [wantsWaifu, setWantsWaifu] = useState(false);
  const queryParams = new URLSearchParams({ included_tags: "maid" });

  async function getWaifu() {
    const res = await fetch(`https://api.waifu.im/search?${queryParams}`);
    const waifuData = await res.json();

    console.log(waifuData);
    setWaifu(waifuData);
  }

  useEffect(() => {
    getWaifu();
  }, []);

  return (
    <div className="waifu-container">
      {waifu && <img className="waifu" src={waifu.images[0].url} />}
      <button onClick={getWaifu} className="waifu-btn">
        Get Waifu
      </button>
    </div>
  );
}

export default WaifuisLaifu;
