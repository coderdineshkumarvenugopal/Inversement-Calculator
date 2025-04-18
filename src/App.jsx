import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const validInput = userInput.duration >= 1;
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputIdentifier]: +newValue,
      };
    });
    calculateInvestmentResults(
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration
    );
  };
  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {!validInput && <p className="center">Enter Duration Greater Than Zero</p>}
      {validInput && <Results userInput={userInput} />}
    </>
  );
}

export default App;
