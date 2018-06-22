import React from "react";

//another way to write the code if it is we dont have any state as in the App component
//changes: the 'this' keyword is removed, as well as the other shortening of the code
const Form = props => (
    <form onSubmit={props.getData}>
                <input type="text" name="user" placeholder="User...."/>
                <input type="text" name="email" placeholder="Email...."/>
                <button>Get user</button>
    </form>
)



// class Form extends React.Component{
//     render(){
//         return(
//             <form onSubmit={this.props.getData}>
//                 <input type="text" name="user" placeholder="User...."/>
//                 <input type="text" name="email" placeholder="Email...."/>
//                 <button>Get user</button>
//             </form>
//         );
//     }
// };

export default Form;