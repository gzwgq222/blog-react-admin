// import api from './api'
import Routers from './Router/router'
import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import './App.css';
import { Layout, Menu, Icon } from 'antd'
const { Header, Sider, Content, Footer } = Layout

class App extends Component {
  constructor(props) {
    // es6继承必须用super调用父类的constructor
    super(props)
    this.state = {
      collapsed: false,
      data: 'hello',
      person: '',
      menuList: [
        { icon: 'home', title: '首页', path: '/' },
        { icon: 'edit', title: '文章', path: '/article' },
        { icon: 'bars', title: '分类', path: '/info' }
      ]
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  async componentDidMount () {
    // console.log(this)
    // const data = await api.get('users/bar')
    // this.setState({
    //   data
    // })
    // const person = await api.get('example/info', {name: 'gong'})
    // console.log(person)
  }
  menuItem = () => {
    return this.state.menuList.map((item, index) => {
      return (
      <Menu.Item key={ index }>
        <Link to={item.path}>
          <Icon type={ item.icon } />
          <span>{ item.title }</span>
        </Link>
      </Menu.Item>)
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout style={{height: '100vh'}}>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
                { this.menuItem() }
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
              <Content className='content'>{ Routers }</Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
