import ItemList from "./item-list.js";

export default function Page() {
  return (
    <main>
      <h1 className="font-bold text-4xl text-yellow-500 text-center">
        Shopping List
      </h1>
      <div className="flex justify-center">
        <ItemList />
      </div>
    </main>
  );
}