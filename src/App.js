import './App.css';

import Landing from "./Components/Landing"
import{useState} from "react"
import StatHome from "./Components/StatHome"
function App() {
const [staticPage,setStaticPage]=useState(false)
const [transitionCompleate, setTransitionCompleate]=useState(false)
  return (
    <>
    {transitionCompleate ===true? null:<Landing setTC={setTransitionCompleate} setStat={setStaticPage} stat={staticPage}/>}
   {staticPage===true? <StatHome stat={staticPage}/>:null}
   

  </>
  );
}

export default App;
