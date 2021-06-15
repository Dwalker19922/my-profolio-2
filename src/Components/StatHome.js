import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useState} from "react";
import homebck from "../img/hmPage.jpg"

export default function StatHome(props) {
    const defaultValue = 5
    const maxDist = 2
    const [slider, setSlider] = useState(false)
    const [marquee,setMarquee] = useState(-440)
    const [distance,setDistance] =useState(defaultValue)

    const runMarquee = ()=>{
        if(marquee<-120){

        setTimeout(() =>{
        setMarquee(marquee+1)

    },40)}
    else{
        setMarquee(-440)
    }

}
runMarquee()
     

    const timerBack = ()=>{
        if(distance>maxDist&&slider===true){
        setTimeout(() =>{
        setDistance(distance-1)

    },50)}

}
const timerFWD = ()=>{
    if(distance>=maxDist&&slider===false&&distance<defaultValue){

    setTimeout(() =>{
    setDistance(distance+1)

},50)}

}

    const controlSlider = (e) => {
        if(slider===true) {
            setSlider(false)
            timerFWD()
        }
        else {
            setSlider(true)
            
        }
    }
    timerBack()
    timerFWD()
    const width = 100
    const styled = makeStyles({
        sidebar: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'green',
            height:slider===true?"80vh":"40vh",
            width: slider===true? "20%" :"30%" ,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderRadius:"20%",
            maxWidth:"140px",
            minWidth:"120px",
            marginTop:"5%"
        },
        main: {
            width: `${width}%`
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            width: `${distance+98}vw`,
        },
        toggle:{
            display: slider===true?"block":"none"
        },
        home: {
            textAlign: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${homebck})`,
            color: "white",
            backgroundSize: "cover",
           width: `100vw`,
           height: `100vh`,
            overflow: 'hidden'
          },
          name: {
              marginRight:"-300%",
              marginLeft:`${marquee}%`,

          }
    })
//  -440  -120

    const classes = styled()
    return (

        <div className={classes.home}> 
          <div className={classes.name}>
                    <h1>I am Daniel Walker</h1>
                    </div>
            <div className={classes.container}>
                <div className={classes.main}>
                  
                    <div className={classes.intro}>
                    
                    </div>
                    
                    
                </div>
                <div className={classes.sidebar}>
                    {slider === true ? <ArrowForwardIosIcon onClick={controlSlider} /> : <ArrowBackIosIcon onClick={controlSlider} />}
                    <HomeIcon className={classes.toggle} />
                    <ComputerIcon className={classes.toggle} />
                    <InfoIcon className={classes.toggle} />

                </div>
            </div>

            <a href='https://www.freepik.com/vectors/background'>Basckground vector created by liuzishan - www.freepik.com</a>
        </div>
   
    )
}