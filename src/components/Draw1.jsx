import React from 'react';
import Drawer from 'react-drag-drawer';
import Forex from './Forex';
import '../styles/Draw1.css';



toggle = () => {
  let { toggle } = this.state

  this.setState({ toggle: !toggle })
}

logState = () => {
  console.log(`Drawer now ${this.state.open ? 'open' : 'closed'}`)
}

render () {
  const { open } = this.state

  return (
    <Drawer
      open={open}
      onRequestClose={this.toggle}
    >
      <div className="money">
        <Forex/>
      </div>
    </Drawer>
  )
};

export default Draw1;
