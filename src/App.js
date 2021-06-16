import './App.css';
import { Route } from "react-router-dom"
import Landing from "./Components/Landing"
import{useState} from "react"
import StatHome from "./Components/StatHome"
function App() {
const [staticPage,setStaticPage]=useState(false)
  return (
    <>
    <Route path="/">
    {staticPage===false?<Landing setStat={setStaticPage} stat={staticPage}/>:<StatHome stat={staticPage}/>}
    </Route>
  </>
  );
}

export default App;
