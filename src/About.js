import React from 'react'
import Im1 from './AboutSlide/Andre Cronje Zombie.jpg'
import Im2 from './AboutSlide/Andre_code_Safu_.jpg'
import Im3 from './AboutSlide/Barek  Zombie .jpg'
import Im4 from './AboutSlide/CowBoy Andre.jpg'
import './About.css';

var images = [Im1,Im2,Im3,Im4];
class About extends React.Component{
    
    state ={
        image:0
    }
    
    componentDidMount(){
        setInterval(() => {
            if(this.state.image<images.length-1){
                this.setState({image: this.state.image+1});
            }
            else{
                this.setState({image: 0});
            }
    },1000);
}
    
    render(){
    return(
        <div className ="about-data" id ="about">
            <div className="im-slide">
                <img src={images[this.state.image]} alt="slide"/>
            </div>
            <div className="data">
                <h1 style={{color:"white"}}>About Fantom Zombie</h1>
                <p>Fantom Zombie NFTs ART is a Mythologically resurrected dead person's land. The living dead are a subset of the undead, which are mythical creatures that have been "re-animated." The legend of the Fantom Zombies began with the Fantom Marines.</p>
                <p>Fantom Zombie is an undead collection of 1031 interactively created zombie art that exists in perpetuity throughout the Fantom block chain’s undead. Each Zombie is not only unique, but it also provides its owner with unique opportunities in the future.</p>
                <p>Everyone has heard of fictional zombies, but few are aware of the truth about Fantom Zombies. Many people, both in the Crypto space and elsewhere, believe in the existence of zombies. They are more than just a form of art; they must be taken seriously. Magic and witchcraft are widely accepted in Crypto space and among the Fantom Marines, and are frequently practiced as religions in a mythological wasteland.</p>
                <p>Explore the undead , Be a zombie</p>
                <div style={{display:"inline"}}>
                    <a href="#">Discord</a>
                    <a href="#">Telegram</a>
                 </div>
            </div>
        </div>
    )
    }
}
export default About;