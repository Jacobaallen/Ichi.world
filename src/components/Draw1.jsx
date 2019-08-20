import React from 'react';
import Drawer from 'react-drag-drawer';
import Forex from './Forex';
import '../styles/Draw1.css';




class Draw1 extends React.Component {
  state = {
  toggle: ''
}
  return(
    toggle = () => {
    let toggle = this.state

    this.state({toggle: !toggle}
  }))
//    toggle (){
//     let toggle = this.state
//
//     this.state({toggle: !toggle});
//   }
//   render() {
//     const { open } = this.state
// //   return (
// //     <Drawer
// //       open={open}
// //       onRequestClose={this.toggle}
// //     >
// //       <div className="money">
// //         <Forex/>
// //       </div>
// //     </Drawer>
// //   );}
};

export default Draw1;
