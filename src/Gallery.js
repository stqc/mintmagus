import React from 'react'
import Im1 from './AboutSlide/photo-2.jpg'
import Im2 from './AboutSlide/photo-4.jpg'
import Im3 from './AboutSlide/photo-5.jpg'
import './Gallery.css';

var images = [Im1,Im2,Im3];
var titles = ['Aesthetic','Rare','Golden']
var content = ['Each of the 999 Fantom Zombies is unique in appearance; each Zombie is created at random and has its own Emotions.','Only 27 Rare Fantom Zombies Team are known to exist, and no two aresame; each Zombie is handcrafted and has its own personality and emotions.','There are only 5 FTM Zombies are golden, and each one is created with a unique personality and set of feelings. Then it\'s transformed into animated art.']
class Gallery extends React.Component{
    
    state ={
        image:0,
        title:0,
        content:0,
        id:'smooth'
    }
    
    componentDidMount(){
        setInterval(() => {
            if(this.state.image<images.length-1){
                this.setState({
                    id:'smooth-out',
                })
                setTimeout(()=>{
                    this.setState({
                        image: this.state.image+1,
                        title:this.state.title+1,
                        content:this.state.content+1,
                        id:'smooth',
                    })},1000);
                }   
            
            else{
                this.setState({
                    id:'smooth-out',
                })
                setTimeout(()=>{
                this.setState({
                    image: 0,
                    title:0,
                    content:0,
                    id:'smooth',
                })},1000);
            }
        }
    ,6500);
}
    
    render(){
    return(
        <div>
            <h1 style={{color:'white'}}> The Gallery</h1>
            <div className ="about-data" id={this.state.id}>
                <div className="im-slide">
                    <img src={images[this.state.image]} alt="slide"/>
                </div>
                <div className="data">
                    <h1 style={{color:"white"}}>{titles[this.state.title]}</h1>
                    <p>{content[this.state.content]}</p>
                </div>
            </div>
        </div>
    )
    }
}
export default Gallery;