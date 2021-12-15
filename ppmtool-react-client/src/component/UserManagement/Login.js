import React, { Component } from 'react'
import {connect} from "react-redux"
import PropTypes from "prop-types"
import classNames from 'classnames'
import {login} from "../../action/securityActions"



class Login extends Component {

    constructor(){
        super()

        this.state = {
            username:"",
            password:"",
            errors:{}
        }

        this.onCHangeHandler = this.onCHangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

    }


    componentDidMount(){
        if(this.props.security.validToken){
            this.props.history.push('/dashboard')
        }
    }

    onCHangeHandler(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.security.validToken){
            this.props.history.push('/dashboard')
        }

        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
    }

    onSubmitHandler(e){
        e.preventDefault()

        const LoginRequest = {
            username:this.state.username,
            password:this.state.password
        }
        
        this.props.login(LoginRequest)
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Log In</h1>
                        <form onSubmit={this.onSubmitHandler}>
                            <div className="form-group">
                                <input type="email"
                                 className={classNames("form-control form-control-lg mb-2",{
                                     "is-invalid":errors.username
                                 })}
                                  placeholder="Email Address"
                                   name="username"
                                   value={this.state.username}
                                   onChange={this.onCHangeHandler}
                                   />
                                   {
                                       errors.username && (
                                           <div className="invalid-feedback">{errors.username}</div>
                                       )
                                   }
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                className={classNames("form-control form-control-lg",{
                                    "is-invalid":errors.password
                                })}
                                 placeholder="Password" 
                                 name="password"
                                 value={this.state.password}
                                 onChange={this.onCHangeHandler}
                                 />
                                 {
                                    errors.password && (
                                        <div className="invalid-feedback">{errors.password}</div>
                                    )
                                }
                            </div>
                            <input type="submit" className="btn btn-info btn-block mt-4" value="Sign in"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


Login.propTypes = {
    login:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired,
    security:PropTypes.object.isRequired
}

const mapStateToProps =state=>({
    security:state.security,
    errors:state.errors
})

export default connect(
    mapStateToProps,
    {
    login
})(Login) 