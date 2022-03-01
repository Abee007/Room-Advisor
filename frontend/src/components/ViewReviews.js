import React, { useEffect, useState } from "react";
import { serverIp } from "../constants";

function ViewReviews() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(`${serverIp}/viewreviews`);
    const items = await data.json();
    setItems(items);
  };

  return (
    <section>
      {items.map((item) => (
        <div key={item.name}>
          <p>{item.name}</p>
          <p>{item.msg}</p>
        </div>
      ))}
    </section>
  );
}

export default ViewReviews;
