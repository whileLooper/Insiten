import React from 'react';
import { Menu, Icon } from 'antd';

export default class TopNavHeader extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        style={{backgroundColor: '#001529'}}
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="bank" >
          <h3 style={{color: 'white', marginBottom: 0}}><Icon type="bank" />Insiten Acquisition Dashboard</h3>
        </Menu.Item>
      </Menu>
    );
  }
}
