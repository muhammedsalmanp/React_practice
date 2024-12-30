import React,{Component} from "react";


class GreetinClss extends Component {
    render(){
        return(
            <div>
                <h1>hi {this.props.name} and the you are {this.props.age}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default GreetinClss;