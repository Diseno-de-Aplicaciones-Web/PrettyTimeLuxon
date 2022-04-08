import { DateTime } from "luxon";
import { useEffect, useState, useRef } from "react";
import './App.css';

function App() {

  const [ times, setTimes ] = useState([]);
  const [ humanMoments, setHumanMoments ] = useState([]);
  const interval = useRef(0);

  function addTimeHandler() {
    setTimes([ ...times, DateTime.now().toISO() ])
  }

  useEffect (
    ()=>{

      clearInterval(interval.current);
      setInterval(addTimeHandler,5000);

      const moments =  times.map(
        time => <li key={time}>{DateTime.fromISO(time).toRelative()}</li>
      ).reverse()
      
      setHumanMoments(moments)
    },
    [times]
  )

  return (
    <>
      <h1>Espera...</h1>
      <ol>{humanMoments}</ol>
    </>
  );
}

export default App;
