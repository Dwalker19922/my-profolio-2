import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useState} from "react";
import homebck from "../img/hmPage.jpg"
import profileImage from "../img/profile_pic.jpg"

export default function StatHome(props) {
    const defaultValue = 5
    const maxDist = 2
    const maxMarquee =-120
    const [slider, setSlider] = useState(false)
    const [marquee,setMarquee] = useState(-440)
    const [distance,setDistance] =useState(defaultValue)
    const transparency =  (marquee + 440)*2
    console.log(transparency)
    const runMarquee = ()=>{
        if(marquee<maxMarquee){

        setTimeout(() =>{
        setMarquee(marquee+.5)

    },40)}

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
            minWidth:"40px",
            marginTop:"5%"
        },
        main: {
            width: `100%`
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            width: `${distance+98}vw`,
            height: "80%"
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

          },
          info:{
              backgroundColor:"grey",
              display:"flex",
              flexDirection:"column",
              alignItems: "center",
              justifyContent:"center",
              padding:"10%",
              width:"60%",
              height:"70%",
              opacity:`${transparency}%`,
              borderRadius:"10%",
              maxHeight:"500px",
              maxWidth:"400px",
              minHeight:"520px",
              marginLeft:"10%",
              border:"10px solid black"

          },
          infoOne:{
            color: "black",
            fontSize:"4.5vh"
          },
          profilePic:{
            backgroundImage:`url(${profileImage})`,
            padding: "3%",
            backgroundPosition:"center",
            backgroundRepeat: "no-repeat",
            backgroundSize:"110%",
            width:"20%",
            height:"20%",
            borderRadius:"50%",
            margin:"0 auto",
            minWidth:"100px",
            maxWidth:"30%",
            minHeight:"100px",
            maxHeight:"30%",
            marginTop:"70px"
          },
          para: {
              fontSize:"1.2vh",
              fontWeight:"bold",
            wordSpacing:"2px"
          }
    })

    const classes = styled()
    return (

        <div className={classes.home}> 
          <div className={classes.name}>
                    <h1>I am Daniel Walker</h1>
                    </div>
            <div className={classes.container}>
                <div className={classes.main}>
                    <div className={classes.info}>
                        <div className={classes.profilePic}/>
                        <p className={classes.infoOne}>welcome to my page</p>
                        <p className={classes.para}>Info about me blah blah blah.....</p>
                        <p className={classes.para}>Info about me blah blah blah.....</p>
                        <p className={classes.para}>Info about me blah blah blah.....</p>
                        <p className={classes.para}>Info about me blah blah blah.....</p>
                        <p className={classes.para}>Link to resume</p>
                        <p className={classes.para}>Link to LinkedIn</p>
                        </div>
                  
                    <div className={classes.intro}>
                    <a href='https://www.freepik.com/vectors/background'>Basckground vector created by liuzishan - www.freepik.com</a>
                    
                    </div>
                    
                    
                </div>
                <div className={classes.sidebar}>
                    {slider === true ? <ArrowForwardIosIcon onClick={controlSlider} /> : <ArrowBackIosIcon onClick={controlSlider} />}
                    <HomeIcon className={classes.toggle} />
                    <ComputerIcon className={classes.toggle} />
                    <InfoIcon className={classes.toggle} />

                </div>
            </div>

            
        </div>
   
    )
}