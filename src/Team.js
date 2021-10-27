import React from "react";
import './Team.css';
import Card from "./Card";
import Im5 from './AboutSlide/Egor Lysenko 27.jpg'
import Im6 from './AboutSlide/Harry17.jpg'
import Im7 from './AboutSlide/Harry Yeh 18.jpg'
import Im9 from './AboutSlide/Jason Kwon 21.jpg'
import Im8 from './AboutSlide/Kong Zombie 2.jpg'

class Team extends React.Component{

    render(){
        return(
            <div className="tt">
                <h1> Meet The Team </h1>
                <div className="main-team">
                    <Card image={Im5} name={"some name"}></Card>
                    <Card image={Im6} name={"some name"}></Card>
                    <Card image={Im7} name={"some name"}></Card>
                    <Card image={Im8} name={"some name"}></Card>
                    <Card image={Im9} name={"some name"}></Card>
                    <Card image={Im5} name={"some name"}></Card>
                </div>
            </div>
        )
    }

}

export default Team;