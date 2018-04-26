import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Card from './card';
import renderInput from './render_input';
import { connect } from 'react-redux';
import { signIn } from '../actions';

class SignIn extends Component {

	handleSignIn(values){
		console.log('Sign In info:', values);
		this.props.signIn(values);
	}

	render(){
		const { handleSubmit } = this.props;

		return (
			<Card title ='SIGN IN'>
	  			<form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
	  				<Field name='email' label='Email' component={renderInput}  />
	  				<Field name='password' label='Password' component={renderInput} type='password' />
	  				<button className='btn'>Sign In</button>
	  			</form>
			</Card>
		);
	}
}

function validate(values) {
	const { email, username, password, confirmPassword} = values;
	const errors = {};
	if(!email) errors.email = "Please enter your email";
	if(!password) errors.password = "Please enter your password";
	
	return errors; 
}

SignIn = reduxForm({
	form: 'sign-In',
	validate
})(SignIn);

export default connect(null, { signIn })(SignIn);
