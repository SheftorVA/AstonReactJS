import React from "react";
import classes from "./MyButton.module.css"

class MyButton extends React.Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <div>
                <button className={classes.mybutton} 
                    disabled={this.props.disabled} 
                    type={this.props.type}
                    onClick={this.props.onClick}
                >
                    {this.props.buttonText}
                </button>
            </div>
        )
    }
}
export default MyButton