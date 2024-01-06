import React, { useContext } from "react";
import { Context } from "../AppContext";

const Form = () => {
  const {
    gridSize,
    numberOfCards,
    userPhrases,
    handleInputChange,
  } = useContext(Context);  

  return (
    <form 
      className="user-input-form"
      // onSubmit={handleSubmit}
    >
      <label className="user-input-form__label">
        Enter Phrases (one per line):
        <textarea
          name="userPhrases"
          value={userPhrases}
          onChange={handleInputChange}
          rows={25}
        />
      </label>
      <label className="user-input-form__label user-input-form__label--half">
        Grid Size: {gridSize} x {gridSize}
        <input
          type="number"
          max="7"
          min="3"
          name="gridSize"
          value={gridSize}
          onChange={handleInputChange}
        />
      </label>
      <label className="user-input-form__label user-input-form__label--half">
        Cards to Generate: {numberOfCards}
        <input
          type="number"
          max="100"
          min="1"
          name="numberOfCards"
          value={numberOfCards}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Generate Bingo Cards</button>
    </form>
  );
};

export default Form;