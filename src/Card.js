import React from "react";

class Card extends React.Component{

    render(){
        return(
        <div style={{padding:"10px"}}>
            <div>
            <img src={this.props.image} alt={this.props.name} style={{width:"100%"}}/></div>
            <div style={{padding:"5px"}}>
                {this.props.name}
            </div>
            <div style={{padding:"5px"}}>
                {this.props.title}
            </div>
        </div>
        )
    }
}

export default Card;