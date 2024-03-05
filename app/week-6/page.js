"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (newItems) => {
    setItems([...items, newItems]);
  };

  return (
    <main className="bg-blue-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold m-6 text-center text-yellow-300">
        Shopping List
      </h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}

