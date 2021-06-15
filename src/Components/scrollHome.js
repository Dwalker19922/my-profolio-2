import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useState } from "react";


export default function ScrollHome(props) {


    const defaultValue = 5

    const maxDist = 2
    const [slider, setSlider] = useState(false)
    const [distance, setDistance] = useState(defaultValue)
    const window = props.window

    const timerBack = () => {
        if (distance > maxDist && slider === true) {
            setTimeout(() => {
                setDistance(distance - 1)
            }, 50)
        }
    }

    const timerFWD = () => {
        if (distance >= maxDist && slider === false && distance < defaultValue) {

            setTimeout(() => {
                setDistance(distance + 1)
            }, 50)
        }

    }

    const controlSlider = (e) => {
        if (slider === true) {
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
            height: slider === true ? window.height - 200 : "40vh",
            width: slider === true ? "20%" : "30%",
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderRadius: "20%",
            maxWidth: "140px",
            minWidth: "70px"
        },
        main: {
            width: `${window.width}px`
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            width: `${distance + 98}vw`,
        },
        toggle: {
            display: slider === true ? "block" : "none"
        },
    })

    const classes = styled()

    return (

        <div className={props.classes}>
            <div className={classes.container}>
                <div className={classes.main}>
                    <h1>WELCOME!</h1>
                    <a href='https://www.freepik.com/vectors/background'>Basckground vector created by liuzishan - www.freepik.com</a>
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