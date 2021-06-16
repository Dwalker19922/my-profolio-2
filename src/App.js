import './App.css';

import Landing from "./Components/Landing"
import{useState} from "react"
import StatHome from "./Components/StatHome"
function App() {
const [staticPage,setStaticPage]=useState(false)
const [transitionCompleate, setTransitionCompleate]=useState(false) //eslint-disable-line
  return (
    <>
    <StatHome stat={staticPage}/>
    <Landing setTC={setTransitionCompleate} setStat={setStaticPage} stat={staticPage}/>
   
   

  </>
  );
}

export default App;
