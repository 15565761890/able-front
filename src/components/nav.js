import React, { Component } from 'react'
import {
	Route,
	Switch,
	Link,
	Redirect,
	NavLink,
	BrowserRouter as Router
} from 'react-router-dom'
import './css/index.css'

class Home extends Component {
	constructor(props) {
		super(props);
	}
	render = () => {
		return (
			<Router>
				<div>
					<ul className="navLi">
						<span><NavLink to="/notice" activeClassName="active">课程公告</NavLink></span>
						<span><NavLink to="/outline" activeClassName="active">课程大纲</NavLink></span>
						<span><NavLink to="/resource" activeClassName="active">教学资源</NavLink></span>
						<span><NavLink to="/interact" activeClassName="active">课程互动</NavLink></span>
						<span><NavLink to="/homework" activeClassName="active">课后作业</NavLink></span>
						<span><NavLink to="/answerQuestion" activeClassName="active">课程答疑</NavLink></span>
						<span><NavLink to="/score" activeClassName="active">成绩</NavLink></span>
					</ul>
					<Switch>
						<Redirect from="/" exact to="/notice"/>
						<Route path="/notice" component={Food}/>
						<Route path="/wiki" component={Wiki}/>
						<Route path="/profile" component={Profile}/>
						<Route component={Page404}/>
					</Switch>
				</div>
			</Router>
		)
	}
}
//定义路由使用组件
//在food中定义子路由
const Food = () => (
	<div>
		<Link to="/food/foodlist/3">foodlist</Link><br/>
		<Link to="/food/foodmenu">foodmenu</Link>
		<Route path="/food/foodlist/:id" component={Foodlist} />
		<Route path="/food/foodment" component={Foodmenu} />
	</div>
)

const Wiki = () => (
	<div>Wiki</div>
)

const Profile = () => (
	<div>profile</div>
)

const Page404 = () => (
	<div>Page not found.</div>
)

//子路由调用组件
const Foodlist = () => (
	<div>子路由foodlist</div>
)
const Foodmenu = () => (
	<div>子路由foodmenu</div>
)

export default Home;