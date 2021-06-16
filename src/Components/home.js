
import {useEffect } from "react";
import StatHome from "./StatHome"
export default function HomePg(props) {
    const scroll=props.scroll
    const stat=props.stat
    const setStat=props.setStat

    useEffect(()=>{
       
        if(scroll===true){
        setTimeout(()=>{
            setStat(true)
        },1000)}
    })

    const window = props.window
    return (
 <>
 <StatHome window={window} classes={props.classes.home}/>
 </>
     
    )
}