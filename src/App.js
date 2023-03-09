import React,{useState} from "react";
import "./style.css";

export default function App() {
  const [x,setX] = useState(0)
  const [y,setY] = useState(0)
  const [celsius,setCelsius] = useState(0)
  const [farenheit,setFarenheit] = useState(0)

  function handleChange(e){
    setX(e.target.value)
    console.log(x)
    setCelsius((e.target.value-32)*(5/9))
  }

  function handleChangee(e){
    setY(e.target.value)
    setFarenheit((e.target.value * 9/5)+32)
  }

  return (
    <div>
      <h1>converter </h1>
      Farenheit
      <input type="number" value={x} onChange={handleChange}/>
      <div>
        Celcius: {celsius}
        <br/>
        Celcius
        <input type="number" value={y} onChange={handleChangee}/>
        <br/>
        Farenheit : {farenheit}
      </div>
    </div>
  );
}
