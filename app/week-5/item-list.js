"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");
    const [grouped, setGrouped] = useState(false);
  
    const handleSortByName = () => setSortBy("name");
    const handleSortByCategory = () => setSortBy("category");
    const handleToggleGrouping = () => setGrouped(!grouped);
  
    // Group and sort items by category
    const groupedItems = grouped
      ? items.reduce((result, item) => {
          const category = item.category;
          if (!result[category]) {
            result[category] = [];
          }
          result[category].push(item);
          return result;
        }, {})
      : null;
  
    return (
      <div>
        <h1>Item List</h1>
        <div>
          <button
            onClick={handleSortByName}
            style={{
              backgroundColor: sortBy === "name" ? "lightblue" : "black",
              color: sortBy === "name" ? "black" : "white",
            }}
          >
            Sort by Name
          </button>
          <button
            onClick={handleSortByCategory}
            style={{
              backgroundColor: sortBy === "category" ? "lightblue" : "black",
              color: sortBy === "category" ? "black" : "white",
            }}
          >
            Sort by Category
          </button>
          <button
            onClick={handleToggleGrouping}
            style={{
              backgroundColor: grouped ? "lightblue" : "black",
              color: grouped ? "black" : "white",
            }}
          >
            {grouped ? "Grouped Category" : "Ungrouped Category"}
          </button>
        </div>
        {grouped
          ? Object.keys(groupedItems)
              .sort()
              .map((category) => (
                <div key={category}>
                  <h2 className="capitalize">{category}</h2>
                  {groupedItems[category]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((item) => (
                      <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                      />
                    ))}
                </div>
              ))
          : items
              .sort((a, b) => {
                if (sortBy === "name") {
                  return a.name.localeCompare(b.name);
                } else if (sortBy === "category") {
                  return a.category.localeCompare(b.category);
                }
              })
              .map((item) => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))
        }
      </div>
    );
  }