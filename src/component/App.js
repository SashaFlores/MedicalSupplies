import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Display from './ProductDisplay';
import JSON from './db.json';


class App extends Component {
    constructor(props) {
        super()
        this.state={
            productData:JSON,
            filterData: JSON
        }
    }
    filterData = (keyword) => {
        let output = this.state.productData.filter((data) => {
            return data.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })

        this.setState({filterData:output})
    }
    render() {
        return (
            <div>
                {/* Props w/ function */}
                <Header userInput={(data) => {this.filterData(data)}}/>
                <Display prodData={this.state.filterData}/>
                <Footer year='2023'/>
            </div>
        )

    }
    
}
export default App;
