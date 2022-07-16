import React, { Component } from 'react'

 class ClassForm extends Component {
    state={
        username : "",
        email : "",
        password : ""
    }
    onSubmit = e =>{
        e.preventDefault();
        console.log("Username: " + this.state.username + " Email:" + " "+ this.state.email + " Password:" + " " + this.state.password);                                                                                              
         this.setState=({username : "",
                         email : "",
                        password : ""});
    }
    onChange = e =>{
    //    { console.log(e.target.value);}
        this.setState({[e.target.name] : e.target.value});
    }
    render() {
        const {username,email,password}=this.state;
      return (
      <div>
        <h1>Username : {username}</h1>
        <h1>Email : {email}</h1>
        <h1>Password : {password}</h1>
        
        <form onSubmit={this.onSubmit}>
       
            <label for="username" style={{textAlign:"start"}}>Ussername :</label>
            <br/>
            <input type="text"value={username} placeholder="Your Username"
                onChange={this.onChange} name="username"/>
                <br/>
                <label for="username" style={{textAlign:"start"}}>Email :</label>
                <br/>
            <input type="text"value={email}placeholder="Your email"onChange={this.onChange} name="email"/>
                <br/>
                <label for="username" style={{textAlign:"start"}}>Password :</label>
                <br/>
            <input type="text"value={password} placeholder="Your password"
                onChange={this.onChange} name="password"/><br/>
                <button type="submit">Submit</button>
                
        </form>
        
        
      </div>
    )
  }
}
export default ClassForm;