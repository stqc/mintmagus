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

import { connectedTo,contract,connected, minted } from './Opening'

var images = [Im1,Im2,Im3,Im4,Im5,Im6,Im7,Im8,Im9];
var ref  = React.createRef();


class Mint extends React.Component{
    constructor(){
        super();
        this.newRef = React.createRef();
    }
    state ={
        image:0,
        toMint: 1,
    }

    updateMint = async ()=>{

        await this.setState({toMint:ref.current.value});
        console.log(ref);
        console.log(this.state.toMint);
    }
    mintNFT = async ()=>{
        try{
            await this.updateMint();
            var fees = await contract.methods.minterFees().call();
            console.log(fees/1e18);
            fees*=this.state.toMint;
            console.log(fees);
            var mint = await contract.methods.publicMint(this.state.toMint).send({from:connectedTo,value:String(fees)});
            console.log(mint);
            this.newRef.current.innerHTML = await contract.methods.totalSupply().call();
            
       }
       catch(exception){
           this.newRef.current.innerHTML = await contract.methods.totalSupply().call();
           console.log(this.newRef.current.innerHTML);
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
                <table style={{width:"100%", textAlign:"left"}}>
                <tbody>
                    <tr>
                        <td style={{color:"rgb(131, 0, 0)"}}>Mint Price</td><td>75 FTM</td>
                    </tr>
                    <tr>
                        <td style={{color:"rgb(131, 0, 0)"}}>Max mint allowed</td> <td>7</td>
                    </tr>
                    {connected?<tr>
                        <td style={{color:"rgb(131, 0, 0)"}}>Total Zombies Minted</td>
                        <td ref={this.newRef}>{minted}</td>
                    </tr>:null}
                </tbody>
                </table>
                {connected?
                <div>

                <input type="number" className="noOfMint" placeholder="Enter number of zombies"  style={{width:"80%", padding:"1%", margin:"10px"}} ref={ref} min="1" max="7"/>
                </div>:<h4> connect your wallet before mint</h4>}
                {connected?<div className='btn' onClick={this.mintNFT}>
                            Mint
                 </div>:
                    <div >
                            <a href="#open" style={{backgroundColor:"rgb(71, 12, 12)",border:"2px solid rgb(124, 0, 0)", width:"100%"}}>Connect</a>
                 </div>}
                
            </div>
        </div>
    )
    }
}
export default Mint;