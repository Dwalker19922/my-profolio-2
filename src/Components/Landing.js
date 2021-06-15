import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import homeImg from "../img/hmPage.jpg"
import LandingImage from "../img/Vector_2646.jpg"
import { makeStyles } from '@material-ui/core/styles';
import TDiv from "./ToggleArrow";
import { getWindowDimensions, activateScroll } from "./LandingScrollFunction";
import { Route } from "react-router-dom"
import HomePg from "./home"

const preload = homeImg
localStorage.setItem("preloadImg", preload)
const home = localStorage.getItem("preloadImg")
function Landing(props) {
  const { push } = useHistory()
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    push("/")
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      setMD(-windowDimensions.height)
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[windowDimensions.width, windowDimensions.height,push]);


  const [distance, setDistance] = useState(0)//sets distance to travel and starting point
  const [scroll, setScroll] = useState(false)//sets action boolean
  const [maxDistance, setMD] = useState(-windowDimensions.height)
  

  const styled = makeStyles({
    app: {
      textAlign: "center",

      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${LandingImage})`,
      color: "white",
      backgroundSize: "cover",
      marginTop: `${distance}px`,
      width: `${windowDimensions.width}px`,
      height: `${windowDimensions.height + 100}px`,
      display: distance === maxDistance - 2 ? "none" : "block"
    },
    home: {
      textAlign: "center",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${home})`,
      color: "white",
      backgroundSize: "cover",
      marginTop: `${distance + windowDimensions.height - 100}px`,
      width: `${windowDimensions.width}px`,
      height: `${windowDimensions.height}px`,
      overflow: 'hidden'
    }

  })

  const setState = () => {
    setScroll(true)
    return activateScroll(distance, setDistance, scroll, maxDistance)

  }

  activateScroll(distance, setDistance, scroll, maxDistance)
  const classes = styled();

  return (
    <>
      <div className={classes.app}>

        <div className="coverInfo">
          <header className="App-header">
            <h1 className="Name"> Daniel Walker</h1>
            <h2 className="title">Full Stack Web Developer</h2>
            <p className="coverDescription">click below to view my portfolio</p>
          </header>
          <TDiv onClick={setState} />
          <a className="ReqAtt" href='https://www.freepik.com/vectors/background'>Background vector created by liuzishan - www.freepik.com</a>
        </div>
      </div>

      {scroll === true&&distance===-1000 ? <></> :push("/home")}

    
    <Route exact path="/home">
    <HomePg push={push} scroll={scroll} window={windowDimensions} distance={distance} classes={classes} setStat={props.setStat} stat={props.stat}/>
  </Route>
  </>
  );
}

export default Landing;
