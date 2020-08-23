import React, { useState } from 'react';
import Box from "./box";
import "./App.css";

const App = ()=> {
  const [selectNum,SetNum] = useState("");
  

  return (
    <>
      <input type="text" value={selectNum} onChange={(e)=>SetNum(e.target.value)}/><br/>
      <Box selected={selectNum}>0</Box>
      <Box selected={selectNum}>1</Box>
      <Box selected={selectNum}>2</Box>
      <Box selected={selectNum}>3</Box>
      <Box selected={selectNum}>4</Box>
      <Box selected={selectNum}>5</Box>
      <Box selected={selectNum}>6</Box>
      <Box selected={selectNum}>7</Box>
      <Box selected={selectNum}>8</Box>
      <Box selected={selectNum}>9</Box>
    </>
  );
}

export default App;
