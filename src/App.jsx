import { useState } from "react";
import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidDuratin = 0 < userInput.duration;

  const handleChange = (identifier, inputValue) => {
    setUserInput((prevInputs) => {
      return {
        ...prevInputs,
        [identifier]: +inputValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInputs userInput={userInput} onChangeHandle={handleChange} />
      { isValidDuratin && <Results inputs={userInput} /> }
      { !isValidDuratin && <p className="center">Invalid Duration</p> }
      
    </>
  );
}

export default App;
