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
        <div className ="about-data" >
            <div className="im-slide">
                <img src={images[this.state.image]} alt="slide"/>
            </div>
            <div className="data">
                <h1 style={{color:"white"}}>About Fantom Zombie</h1>
                <p>Fantom Zombie NFTs ART is a
                mythological dead person's land that has
                come back to life. Undead are mythical
                creatures that have been "re-animated,"
                and the living dead are a group of them.
                The Fantom Marines gave birth to the
                Fantom Zombies legend.</p>
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