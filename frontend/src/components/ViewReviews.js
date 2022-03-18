import React, { useEffect, useState } from "react";
import { serverIp } from "../constants";
import Nav from "../components/Nav";

function ViewReviews({ user }) {
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
    <div>
      <Nav props={{ user: user, mode: "TRUNCATED" }} />
      <section>
        {items.map((item) => (
          <div key={item.name}>
            <p>{item.name}</p>
            <p>{item.msg}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ViewReviews;
