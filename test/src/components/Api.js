import React from "react";

class Api extends React.Component{
    render(){
        return(
            <div>
                <p>Api Component:</p>
                {
                    this.props.email && this.props.user && <p>Shows only when both emai and name returned from json is populated in props</p>
                }
                {
                    this.props.email && this.props.user
                    && <p>Email:{this.props.email}</p>    
                }
                {
                    this.props.email && this.props.user 
                    && <p>User Name:{this.props.user}</p>
                }
                {this.props.error && <p>{this.props.error}</p>}
                
            </div>
        )
    }
}

export default Api;