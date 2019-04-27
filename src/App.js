import React, { Component } from 'react';
import { Route, Link, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom';

const Home = () => <h1>Home</h1>
const WillMatch = () => <h1>Matched!</h1>

const NoMatch = ({location}) => (
	<div>
		<h3>No match for <code>{location.pathname}</code></h3>
	</div>
)

 class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/old-match'>Old Match, to be redirected</Link></li>
						<li><Link to='will-match'>Will Match</Link></li>
						<li><Link to='/will-not-match'>Will Not Match</Link></li>
						<li><Link to='/also/will/not/match'>Also will not match</Link></li>
					</ul>

					<Switch>
						<Route exact path='/' component={Home} />
						<Redirect from='/old-match' to='/will-match' />
						<Route path='/will-match' component={WillMatch} />
						<Route component={NoMatch} />
					</Switch>
				</div>
			</Router>
		)
	}
}
export default App;
