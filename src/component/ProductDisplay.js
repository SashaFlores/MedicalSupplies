import React from 'react';
import './Product.css';

const Display = (props) => {
    console.log(props)

    const renderProduct = props.prodData.map((item) => {
        return(
            <div className="card" key={item.id}>
                <img src={item.image} alt={item.name}/>
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Rs.{item.cost}</p>
                    <p>{item.uses}</p>
                </div>
            </div>
        )
    })
    return(
       <div className="main">
           {renderProduct}
       </div>
    )
}
export default Display