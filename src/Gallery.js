import React from 'react'
import Im1 from './AboutSlide/rare1.gif'
import Im2 from './AboutSlide/rare.gif'
import Im3 from './AboutSlide/Golden Mike G2.gif'
import './Gallery.css';

var images = [Im1,Im2,Im3];
var titles = ['Aesthetic','Rare','Golden']
class Gallery extends React.Component{
    
    state ={
        image:0,
        title:0,
        content:0,
        id:'smooth'
    }
    
    render(){
    return(
        <div>
            <div className ="about-data" id={this.state.id}>
                <div className="im-slide">
                    <img src={images[this.state.image]} alt="slide"/>
                </div>
                <div className="data" id="gal">
                    <h1 style={{color:"white"}} style={{color:"rgb(131, 0, 0)"}} id="redhead">{titles[this.state.title]}</h1>
                    <p>The Aesthetic Zombie is a human who has died and been reborn as art, although not usually as a result of a virus. They are frequently combative. They might be interested, yet disoriented, and unsure of themselves and their surroundings. </p>
                    <p>In spite of their undead nature, they are usually immune to injury and decay. They aren't as dangerous as Runners right away, but they attack in bunches and have incredible stamina, making them a serious menace to humanity. Their primary characteristic is a voracious appetite for live flesh. </p>
                    <p>Each of the 999 FTM Zombies is unique in Appearance; each Zombie is created at Random and has its own Emotions.</p>
                </div>
                
            </div>
            <div className ="about-data" id={this.state.id}>
                <div className="im-slide">
                    <img src={images[this.state.image+1]} alt="slide"/>
                </div>
                <div className="data" id="gal">
                    <h1 style={{color:"white"}}id="redhead" style={{color:"rgb(131, 0, 0)"}}>{titles[this.state.title+1]}</h1>
                    <p>Rare kind humanoid zombies, which travel in short circuits about a few blocks and gravitate toward significant noises and visual stimuli, are a typical wondering hazard in infected towns. They may be found almost any place on the ground level, with fewer occurrences on upper levels of buildings or in open areas under direct sunshine. </p>
                    <p>Since this rare zombie loves to keep out of direct sunlight, they tend to congregate in and around huge buildings, and they frequently enter basements. If there's a wandering when a rare zombie sees, smells, or hears what it perceives to be a sign of life, it will moan loudly and run as quickly as it can toward the live signals. If it is a member of a group, the other members will begin to moan in response, drawing the attention of other groups who hear the pursuing frenzy. Their main distinguishing feature is a strong hunger for human small intestine. </p>
                    <p>Only 27 Rare FTM Zombies (FTM Team Members) are known to exist, and no two are same; each Zombie is handcrafted and has its own personality and emotions.</p>
                </div>
                
            </div>
            <div className ="about-data" id={this.state.id}>
                <div className="im-slide">
                    <img src={images[this.state.image+2]} alt="slide"/>
                </div>
                <div className="data" id="gal">
                    <h1 style={{color:"white"}}style={{color:"rgb(131, 0, 0)"}}>{titles[this.state.title+2]}</h1>
                    <p>Golden zombies are a type of fast zombie that, for unexplained reasons, retain their agility after becoming zombies and are capable of fighting, sprinting, and climbing at breakneck speeds. When you combine this with their increased stamina, you get a monster that is extremely difficult to avoid.</p>
                    <p>Like an Olympic athlete, they can climb ladders, steps, chain link fences, and other modestly high walls. Golden Zombies have been reported to assault for more than a mile without exhibiting symptoms of exhaustion. Their greatest unique characteristic is a voracious appetite for human brains. </p>
                    <p>There are only 5 FTM Zombies are golden, and each one is created with a unique personality and set of feelings. Then it's transformed into animated art.</p>
                </div>
                
            </div>
        </div>
    )
    }
}
export default Gallery;