import React from 'react'
import Im1 from './AboutSlide/im1.jpg'
// import Im2 from './AboutSlide/Andre_code_Safu_.jpg'
// import Im3 from './AboutSlide/Barek  Zombie .jpg'
// import Im4 from './AboutSlide/CowBoy Andre.jpg'
import './About.css';

var images = [Im1];
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
            <div className="data">
                <h1>About Magus Prime NFTs</h1>
                <p>The fantastic trading-card themed Magus Prime NFTs have had all the assets handmade in-house by their  amazing graphical designer.</p> 
                <p>Each NFT has it's own unique look with both an artistic and use-case value.</p>
                <div style={{display:"inline"}}>
                    <a href="https://discord.gg/fgCYe52GEt" style={{borderColor:"rgb(124, 0, 0)",backgroundColor:"rgb(71, 12, 12)"}}>Discord</a>
                    <a href="https://twitter.com/MagusNodes" style={{borderColor:"rgb(124, 0, 0)",backgroundColor:"rgb(71, 12, 12)"}}>Twitter</a>
                 </div>
            </div>
        </div>
    )
    }
}
export default About;