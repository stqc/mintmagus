import React from 'react'
import Im1 from './AboutSlide/im1.gif'


import { connectedTo,contract,connected, minted } from './Opening'

var images = [Im1];
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

   
    mintNFT = async ()=>{
        try{
            var fees;
            await contract.methods.whitelistTime().call()==true?fees = 500*1e18:fees=500*1e18;
            console.log(fees);
            var mint = await contract.methods.mint().send({from:connectedTo,value:String(fees)});
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
                <h1 >Mint one of Magus255 here!</h1>
                <table style={{width:"100%", textAlign:"left"}}>
                <tbody>
                    <tr>
                        <td style={{color:"rgb(195 177 99)"}}>Mint Price</td><td>500 CRO(whitelist)<br/>/550 CRO(public)</td>
                    </tr>
                   
                    {connected?<tr>
                        <td style={{color:"rgb(195 177 99)"}}>Total Minted</td>
                        <td ref={this.newRef}>{minted}</td>
                    </tr>:null}
                </tbody>
                </table>
                {connected?
                <div>
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
