import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

const[isDark,setIsDark]=useState(false)
function setMode(){
  setIsDark((isDark)=>!isDark)
}
  return (
    <div className={isDark ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={setMode}>{isDark ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
