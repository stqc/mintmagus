import React from 'react'
import Im1 from './AboutSlide/Andre Cronje Zombie.jpg'
import Im2 from './AboutSlide/Andre_code_Safu_.jpg'
import Im3 from './AboutSlide/Barek  Zombie .jpg'
import Im4 from './AboutSlide/CowBoy Andre.jpg'
import Im5 from './AboutSlide/Egor Lysenko 27.jpg'
import Im6 from './AboutSlide/Harry17.jpg'
import Im7 from './AboutSlide/Harry Yeh 18.jpg'
import Im9 from './AboutSlide/Jason Kwon 21.jpg'
import Im8 from './AboutSlide/Kong Zombie 2.jpg'

import { connectedTo,contract } from './Opening'

var images = [Im1,Im2,Im3,Im4,Im5,Im6,Im7,Im8,Im9];
class Mint extends React.Component{
    
    state ={
        image:0
    }
    mintNFT = async ()=>{
        try{
            var fees = await contract.methods.intMintFee().call();
            console.log(fees);
            var mint = await contract.methods.publicMint().send({from:connectedTo,value:fees});
            console.log(mint);
       }
       catch(exception){
           console.log(exception);
       }   

    }

    componentDidMount(){
        setInterval(() => {
            if(this.state.image<images.length-1){
                this.setState({image: this.state.image+1});
            }
            else{
                this.setState({image: 0});
            }
    },300);
}
    
    render(){
    return(
        <div className ="about-data" id ="mint">
            <div className="im-slide">
                <img src={images[this.state.image]} alt="slide"/>
            </div>
            <div className="data">
                <h1 style={{color:"rgb(131, 0, 0)"}}>Mint your zombie here!</h1>
                <p>Your very own zombie is just one click away</p>
                <div className='btn' onClick={this.mintNFT}>
                            Mint
                 </div>
            </div>
        </div>
    )
    }
}
export default Mint;