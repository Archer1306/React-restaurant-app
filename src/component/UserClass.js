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
            <h1>User Profile Class</h1>
            <p>Name: {name}</p>
            <p>Email: {mail}</p>
            <p>Count: {count}</p>
            <p>Count1: {count1}</p>
            <button onClick={()=>
                this.setState({
                    count:this.state.count+1
                })
            }>Count</button>
             
        </div>
    )
    }
}

export default UserClass;