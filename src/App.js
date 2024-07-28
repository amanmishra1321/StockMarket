import './App.css';
import Header from './components/header';
import Data from "./components/data";
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [niftyList, setNiftyList] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/').then((res) =>
      res.json()
    ).then((res) => {
      console.log(res?.nifty50);
      setNiftyList(res?.nifty50);
    })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <div>
      <Header arr={niftyList} setArr={setNiftyList} />
      <Data />
    </div>
  );
}

export default App;
