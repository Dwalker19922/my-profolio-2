import './App.css';
import { Route } from "react-router-dom"
import Landing from "./Components/Landing"
import{useState} from "react"
import StatHome from "./Components/StatHome"
function App() {
const [StaticPage,setStaticPage]=useState(false)
  return (
    <>
    <Route path="/">
    {StaticPage===false?<Landing setStat={setStaticPage} stat={StaticPage}/>:<StatHome/>}
    </Route>
  </>
  );
}

export default App;
