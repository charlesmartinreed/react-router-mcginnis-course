import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// you can render more than one route at any point in your app
const routes = [
	{
		path: '/',
		exact: true,
		sidebar: () => <div>home!</div>,
		main: () => <h2>Home</h2>,
	},
	{
		path: '/bubblegum',
		sidebar: () => <div>bubblegum!</div>,
		main: () => <h2>Bubblegum</h2>,
	},
	{
		path: '/shoelaces',
		sidebar: () => <div>shoelaces!</div>,
		main: () => <h2>Shoelaces</h2>,
	}
]

// map over routes array, render either sidebar or main
class App extends Component {
	render() {
		return (
			<Router>
				<div style={{display: 'flex'}}>
				<div style={{
					padding: '10px',
					width: '40%',
					background: '#f0f0f0'
				}}>
					<ul style={{listStyleType: 'none', padding: 0}}>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/bubblegum'>Bubblegum</Link></li>
						<li><Link to='/shoelaces'>Shoelaces</Link></li>
					</ul>

					{routes.map((route) => (
						<Route
						key={route.path} path={route.path} exact={route.exact} component={route.sidebar} />
					))}
				</div>
					<div style={{flex: 1, padding: '30px'}}>
						{routes.map(({ path, exact, main}) => (
							<Route
								key={path}
								path={path}
								exact={exact}
								component={main}
							/>
						))}
					</div>
				</div>
			</Router>
		)
	}
}
export default App;
