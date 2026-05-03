import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            count1:2,
        };
    }

    componentDidMount(){
        console.log("Component Did Mount");
    }
    render(){
        const{name,mail}=this.props;
        const{count,count1}=this.state; 

        return(
        <div >
            
            <p>Name: {name}</p>
            <p>Email: {mail}</p>
           
        </div>
    )
    }
}

export default UserClass;