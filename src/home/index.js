import React, {Component} from 'react';
import {connect} from 'dva';
import {Layout, Menu, Icon} from 'antd';
import './index.less';
import img2 from './1.jpg';
console.log(img2);
const {Header, Content, Footer, Sider} = Layout;
@connect(state => ({home: state.home}))
class Home extends Component {
	render() {
		return (
			<Layout className="home">
			    <img src={img2}/>
				<Sider
					breakpoint="lg"
					collapsedWidth="0"
					onBreakpoint={broken => {
						console.log(broken);
					}}
					onCollapse={(collapsed, type) => {
						console.log(collapsed, type);
					}}
				>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
						<Menu.Item key="1">
							<Icon type="user" />
							<span className="nav-text">nav 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="video-camera" />
							<span className="nav-text">nav 2</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="upload" />
							<span className="nav-text">nav 3</span>
						</Menu.Item>
						<Menu.Item key="4">
							<Icon type="user" />
							<span className="nav-text">nav 4</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{background: '#fff', padding: 0}} />
					<Content style={{margin: '24px 16px 0'}}>
						<div style={{padding: 24, background: '#fff', minHeight: 360}}>content</div>
					</Content>
					<Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default Home;
