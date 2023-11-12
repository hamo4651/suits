import React, { Component } from 'react'
 class Demo1 extends Component {
  render(props) {
    // const name =this.props.name;
    // const age =this.props.age;
    // const {name,age} =this.props;
     const {allproduct} =this.props;
        const product = allproduct.map(item=>{
        if (item.num == 1) {
          return <h1>not in range</h1>

        } else {
          return (
             <div>
              
              <h1>{item.name} : {item.age}</h1>

             </div>

          )
        }


        })
    return (
      <div>      
        {/* <h2>my name is {name}</h2>
        <h2>my age is {age}</h2> */}         
{product}
      </div>
    )
  }
}
export default Demo1