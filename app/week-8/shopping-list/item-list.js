import { useState } from "react";
import Item from "./item";

export default function ItemList(props) {
  const [sortBy, setSortBy] = useState("name");
  const [grouped, setGrouped] = useState(false);

  const handleSortByName = () => setSortBy("name");
  const handleSortByCategory = () => setSortBy("category");
  const handleToggleGrouping = () => setGrouped(!grouped);

  const { items } = props;

  // Sort items by name without mutating the original array
  const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));

  // Group and sort items by category without mutating the original array
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
          style={{ backgroundColor: sortBy === "name" ? "lightblue" : "black" }}
        >
          Sort by Name
        </button>
        <button
          onClick={handleSortByCategory}
          style={{ backgroundColor: sortBy === "category" ? "lightblue" : "black" }}
        >
          Sort by Category
        </button>
        <button
          onClick={handleToggleGrouping}
          style={{ backgroundColor: grouped ? "lightblue" : "black" }}
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
        : sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
    </div>
  );
}