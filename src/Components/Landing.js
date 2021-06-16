import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import homeImg from "../img/hmPage.jpg"
import LandingImage from "../img/Vector_2646.jpg"
import { makeStyles } from '@material-ui/core/styles';
import TDiv from "./ToggleArrow";
import { getWindowDimensions, activateScroll } from "./LandingScrollFunction";



const preload = homeImg
localStorage.setItem("preloadImg", preload)
const home = localStorage.getItem("preloadImg")


function Landing(props) {
  console.log(props)
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
  const [maxDistance, setMD] = useState(-Math.round((windowDimensions.height/10)*10)-800)
  const trip=distance===maxDistance?true:false
  console.log(trip,distance,maxDistance)
  props.setTC(trip)


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
      display: distance === maxDistance - 2 ? "none" : "block",
      paddingBottom:"30%"
     
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
    },
    description:{
      marginBottom:"50%"
    },
    splash:{
      display:"inline-block",
      position:"absolute",
      top:"0",
      left:"0"
    }

  })

  const setState = () => {
    props.setStat(true)
    setScroll(true)
    return activateScroll(distance, setDistance, scroll, maxDistance)

  }

  activateScroll(distance, setDistance, scroll, maxDistance)
  const classes = styled();

  return (
    <div className={classes.splash}>
      <div className={classes.app}>

        <div className="coverInfo">
        <a className="ReqAtt" href='https://www.freepik.com/vectors/background'>Background vector created by liuzishan - www.freepik.com</a>
          <header className="App-header">
            <h1 className="Name"> Daniel Walker</h1>
            <h2 className="title">Full Stack Web Developer</h2>
            <p className={classes.description}> click below to view my portfolio</p>
          </header>
          <TDiv onClick={setState} />
          
        </div>
      </div>

      {scroll === true&&distance===-1000 ? <></> :push("/home")}

    

      </div>
  );
}

export default Landing;
