"use client";

import { useState, useEffect } from 'react';
import { getItems, addItem } from '../_services/shopping-list-service';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Function to load items from Firestore
  async function loadItems() {
    try {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    } catch (error) {
      console.error("Error loading items: ", error);
    }
  }

  // useEffect to call loadItems on component mount
  useEffect(() => {
    loadItems();
  }, [user.uid]);
  
  // Event handler to add a new item to the list
  const handleAddItem = async (newItem) => {
    try {
      const addedItem = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, addedItem]);
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  };

  // Event handler to select an item from the list
  const handleItemSelect = (item) => {
    let itemName;
    let cleanName;

    if (item.name.includes(",")) {
      itemName = item.name.split(",");
      cleanName = itemName[0].trim();
    } else {
      itemName = item.name.split(" ");
      cleanName = itemName[0].trim();
    }
    let withOutEmoji = cleanName.replace(/[\u{1F600}-\u{1F6FF}]/gu, "");
    setSelectedItemName(withOutEmoji);

    // Clean up the item name (remove emojis, sizes, etc.)
    //const cleanedItemName = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
    // setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="flex min-h-screen flex-col justify-between p-10">
      <h2 className="ml-4 text-3xl font-bold text-black">Shopping List</h2>
      <div className="mt-4 ml-4">
        <NewItem onAddItem={handleAddItem} />
      </div>
      <div className="mt-4 flex">
        <div className="w-1/2">
        <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}