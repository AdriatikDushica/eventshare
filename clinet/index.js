import React from 'react';
import { render } from 'react-dom';
import socket from './tunnel/socket';

class Application extends React.Component {

	constructor(props) {
		super(props);

		this.state = { articles: [] };

		socket.on('setup', (articles) => this.setState({articles}) );
		socket.on('new', (article) => this.setState({ articles: this.state.articles.concat([article]) }) );
	}

	add() {
		socket.emit('add', {
			id: Math.floor(Math.random()*100000), 
			title: 'Aggiunto', 
			body: 'body aggiunto'
		});
	}

	render() {
		return (
			<div>
				{this.state.articles.map((article) => {
					return (
						<div key={article.id}>
							<h4>{article.title}</h4>
							<p>{article.body}</p>
						</div>
					);
				})}
				<button onClick={this.add}>Add</button>
			</div>
		);
	}
}

render(
	<Application />,
	document.getElementById('app')
);