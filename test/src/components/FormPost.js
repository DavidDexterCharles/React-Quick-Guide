import React from "react";

//another way to write the code if it is we dont have any state as in the App component
//changes: the 'this' keyword is removed, as well as the other shortening of the code
const FormPost = props => (
    <form onSubmit={props.sendData}>
        <input type="text" name="senduser" placeholder="New User"/>
        <button>Add user</button>
    </form>
)



// class FormPost extends React.Component{
    
//  sendData = async(e) =>{
   
//     e.preventDefault();
//     //POST working, but reactjs giving probs
//     const user = e.target.elements.senduser.value
//     const headers =  new Headers()
//     headers.append('Content-Type', 'application/json')//'application/vnd.api+json'
//     const body= JSON.stringify(	
//          {	
  
// 	       "email": "davidtest5@test.com",
// 	       "name": "david"
//          }
// 	       )
//     const options = {
//       method: 'POST',
//       headers,
//       body
//     }
//     const request = new Request('http://gsc-ice-wolf.c9users.io:8082/user',options)
//     console.log(request);
//     const response = await fetch(request);
//     const status = await response.status;
//     console.log(response);
    
//   }
//     render(){
//         return(
//           <form onSubmit={this.sendData}>Apples
//                 <input type="text" name="senduser" placeholder="New User Email"/>
//                 <button>Add user</button>
//             </form>
//         );
//     }
// };

export default FormPost;