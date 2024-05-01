import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import NoFoodMsg from "./components/NoFoodMsg";
import { useState } from "react";

function App() {
  let [foodItem, setFoodItem] = useState(["Butter", "aalu", "tomatoo"]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      console.log(`${newFoodItem} being Entered`);
      let newItems = [...foodItem, newFoodItem];
      setFoodItem(newItems);
      event.target.value = ""; // Reset input value
    }
  };

  return (
    <>
      <div>
        <h1>Food Items</h1>
        <input onKeyDown={onKeyDown} type="text" placeholder="Enter New Food" />
        <NoFoodMsg items={foodItem} />
        <FoodItems items={foodItem} />
      </div>
    </>
  );
}

export default App;
