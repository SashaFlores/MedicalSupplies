import React from "react";
import './Header.css';

class Header extends React.Component {

    constructor() {
        super()
        this.state={
            title: 'React App',
            keyword: 'USER INPUT HERE'
        }
    }
    handleChange = (event) => {
        //console.log(event.target.value)
        this.setState({keyword:event.target.value})

        // calling props of App, as App is parent & Header is child
        this.props.userInput(event.target.value)
    }
    render() {
        console.log('inside render')
        return(
            <React.Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'black',fontSize:'20px'}}>{this.state.keyword}</div>
                    </center>
                </header>
            </React.Fragment>
        )
    }
}
export default Header;