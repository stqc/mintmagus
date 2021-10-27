import React from "react";
import './Team.css';
import Card from "./Card";
import Im5 from './AboutSlide/GOLDEN.jpeg'
import Im6 from './AboutSlide/AK.jpeg'
import Im7 from './AboutSlide/ALEX.jpeg'
import Im9 from './AboutSlide/MAX.jpeg'
import Im8 from './AboutSlide/SHIBA DEV.jpeg'
import Im1 from './AboutSlide/WOLF.jpeg'

class Team extends React.Component{

    render(){
        return(
            <div className="tt">
                <h1> Meet The Team </h1>
                <div className="main-team">
                    <Card image={Im1} name={"Wolf"} title={'Co-Founder'}></Card>
                    <Card image={Im8} name={"Lord Shiba"} title={'Dev Lead'}></Card>
                    <Card image={Im6} name={"AK"} title={"Visual Art Lead"}></Card>
                    <Card image={Im9} name={"Maxflow"} title={'Dev'}></Card>
                    <Card image={Im5} name={"Golden"} title={'Marketing'}></Card>
                    <Card image={Im7} name={"Alex"} title={'Marketing/CM'}></Card>
                </div>
            </div>
        )
    }

}

export default Team;