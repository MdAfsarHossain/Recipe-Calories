import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Header from "./components/Header/Header";
import RecipesBookMarks from "./components/RecipesBookMarks/RecipesBookMarks";
import RecipesHeading from "./components/RecipesHeading/RecipesHeading";
import RecipesItems from "./components/RecipesItems/RecipesItems";

function App() {
  const [wantToCook, setWantToCook] = useState([]);
  const [currentCooking, setCurrentCooking] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleWantToCook = (cook) => {
    if (!wantToCook.includes(cook)) {
      setWantToCook([...wantToCook, cook]);
      toast.success("Added to the want to cook list!");
    } else {
      // setWantToCook(wantToCook.filter((item) => item!== cook));
      // alert("This is already added to the want to cook list!");
      toast.error("This is already added to the want to cook list!");
    }
  };

  const handleCurrentCook = (recipe) => {
    setCurrentCooking([...currentCooking, recipe]);
    setWantToCook(wantToCook.filter((r) => r.id !== recipe.id));
    toast.success("Added to the currently cooking recipe list!");
  };

  const calculateTotalTime = (time) => {
    setTotalTime(totalTime + parseInt(time));
  };

  const calculateTotalCalories = (calories) => {
    setTotalCalories(totalCalories + parseInt(calories));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <ToastContainer position="top-center" reverseOrder={false} />
      <Header></Header>

      <div className="">
        {/* Recipes Heading */}
        <RecipesHeading></RecipesHeading>

        <div className="flex flex-col justify-center items-center md:items-start md:flex-row gap-5 mb-10 px-5">
          <RecipesItems handleWantToCook={handleWantToCook}></RecipesItems>

          <RecipesBookMarks
            wantToCook={wantToCook}
            handleCurrentCook={handleCurrentCook}
            currentCooking={currentCooking}
            totalCalories={totalCalories}
            totalTime={totalTime}
            calculateTotalCalories={calculateTotalCalories}
            calculateTotalTime={calculateTotalTime}
          ></RecipesBookMarks>
        </div>
      </div>
    </div>
  );
}

export default App;
