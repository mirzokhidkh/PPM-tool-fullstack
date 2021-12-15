import React, { Component } from 'react'
import {connect} from "react-redux"
import PropTypes from "prop-types"
import classNames from 'classnames'
import {createNewUser} from "../../action/securityActions"

class Register extends Component {


    constructor(){

        super()

        this.state = {
            username:"",
            fullName:"",
            password:"",
            confirmPassword:"",
            errors:{}
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    componentDidMount() {
        if (this.props.security.validToken) {
          this.props.history.push("/dashboard");
        }
      }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.errors);
        if(nextProps.errors){
            this.setState({errors: nextProps.errors})
        }
    }


    onSubmitHandler(e){
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            fullName: this.state.fullName,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
        }

        console.log("NEWUSER:",newUser);
        this.props.createNewUser(newUser,this.props.history)
    }


    onChangeHandler(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {
        const {username, fullName, password, confirmPassword, errors} = this.state

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your Account</p>
                            <form onSubmit={this.onSubmitHandler}>
                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    className={classNames("form-control form-control-lg mb-2",{
                                        "is-invalid":errors.fullName
                                    })} 
                                    placeholder="Full Name" 
                                    name="fullName"
                                    value={fullName}
                                    onChange={this.onChangeHandler}
                                    />
                                    {
                                        errors.fullName && (
                                            <div className="invalid-feedback">{errors.fullName}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    className={classNames("form-control form-control-lg mb-2",{
                                        "is-invalid":errors.username
                                    })} 
                                    placeholder="Email Address (Username)" 
                                    name="username"
                                    value={username}
                                    onChange={this.onChangeHandler}
                                    />
                                    {
                                        errors.fullName && (
                                            <div className="invalid-feedback">{errors.username}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group">
                                    <input 
                                    type="password" 
                                    className={classNames("form-control form-control-lg mb-2",{
                                        "is-invalid":errors.password
                                    })} 
                                    placeholder="Password" 
                                    name="password" 
                                    value={password}
                                    onChange={this.onChangeHandler}
                                    />
                                    {
                                        errors.fullName && (
                                            <div className="invalid-feedback">{errors.password}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group">
                                    <input 
                                    type="password" 
                                    className={classNames("form-control form-control-lg mb-2",{
                                        "is-invalid":errors.confirmPassword
                                    })} 
                                    placeholder="Confirm Password"
                                    name="confirmPassword" 
                                    value={confirmPassword}
                                    onChange={this.onChangeHandler}
                                    />
                                    {
                                        errors.fullName && (
                                            <div className="invalid-feedback">{errors.confirmPassword}</div>
                                        )
                                    }
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" value="Sign up"/>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}


Register.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    errors: state.errors,
    security: state.security
})



export default connect(
    mapStateToProps,{
    createNewUser
})(Register)