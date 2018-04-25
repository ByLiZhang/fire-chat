import React, { Component } from 'react';
import db from '../firebase';  
import { connect } from 'react-redux';
import { updateChat } from '../actions';

class Chat extends Component {
	componentDidMount(){
		db.ref('/chat').on('value', snapshot => {
			this.props.updateChat(snapshot.val());
		});
	}

	render(){
		console.log('Chat Log:', this.props.log);
		return (
			<div>
				<h1 className='center'>Chat Room</h1>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		log: state.chat.log
	}
}

export default connect(mapStateToProps, { updateChat})(Chat);