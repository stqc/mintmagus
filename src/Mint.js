import React from 'react'
import Im1 from './AboutSlide/Andre Cronje Zombie.jpg'
import Im2 from './AboutSlide/Andre_code_Safu_.jpg'
import Im3 from './AboutSlide/Barek  Zombie .jpg'
import Im4 from './AboutSlide/CowBoy Andre.jpg'
import { connectedTo,contract } from './Opening'

var images = [Im1,Im2,Im3,Im4];
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
    },1000);
}
    
    render(){
    return(
        <div className ="about-data" >
            <div className="im-slide">
                <img src={images[this.state.image]} alt="slide"/>
            </div>
            <div className="data">
                <h1 style={{color:"white"}}>Mint your zombie here!</h1>
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