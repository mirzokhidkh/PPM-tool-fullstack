import React, { Component } from 'react'
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { createProject } from '../../action/projectActions'
import classNames from 'classnames'

class AddProject extends Component {

    constructor() {
        super()

        this.state = 
            {
                "projectName":"",
                "projectIdentifier":"",
                "description": "",
                "startDate": "",
                "endDate": "",
                "errors":{}
            }
        
        this.onChangeHandler=this.onChangeHandler.bind(this)
        this.onSubmitHandler=this.onSubmitHandler.bind(this)
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors:nextProps.errors
            })
        }
    }

    onChangeHandler(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmitHandler(e) {
        e.preventDefault();
        const { projectName,projectIdentifier,description,startDate,endDate} = this.state;

        const newProject = {
            projectName,
            projectIdentifier,
            description,
            startDate,
            endDate
        }
        this.props.createProject(newProject,this.props.history) 
    }

    clearProject() {
        this.setState({
            projectName:"",
            projectIdentifier:"",
            description: "",
            startDate: "",
            endDate: ""
        })
    }

    render() {

        const {errors} = this.state

        return (
            <div>
            <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create</h5>
                        <hr />
                        <form onSubmit={this.onSubmitHandler}>
                            <div className="form-group">
                                    <input type="text"
                                            className={classNames("form-control form-control-lg mb-2", {
                                            "is-invalid": errors.projectName
                                        })}
                                        placeholder="Project Name"
                                        name="projectName"
                                        value={this.state.projectName}
                                        onChange={this.onChangeHandler}
                                        />

                                        {errors.projectName && (
                                            <div className="invalid-feedback">{errors.projectName}</div>
                                        )}
                             </div>
                                    
                            <div className="form-group">
                                        <input type="text"
                                        className={classNames("form-control form-control-lg mb-2", {
                                            "is-invalid": errors.projectIdentifier
                                        })}
                                        placeholder="Unique Project ID"
                                        name="projectIdentifier"
                                        value={this.state.projectIdentifier}
                                        onChange={this.onChangeHandler}
                                        />
                                        {errors.projectIdentifier && (
                                            <div className="invalid-feedback">{errors.projectIdentifier}</div>
                                        )}
                            </div>
                            <div className="form-group">
                                        <textarea
                                        className={classNames("form-control form-control-lg  mb-2", {
                                            "is-invalid": errors.description
                                        })}
                                        placeholder="Project Description"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChangeHandler}
                                        />
                                        {errors.description && (
                                            <div className="invalid-feedback">{errors.description}</div>
                                        )}
                                        
                            </div>
                            <h6>Start Date</h6>
                            <div className="form-group">
                                    <input type="date"
                                        className="form-control form-control-lg"
                                        name="startDate"
                                        value={this.state.startDate}
                                        onChange={this.onChangeHandler}
                                    />
                            </div>
                            <h6>Estimated End Date</h6>
                            <div className="form-group">
                                    <input type="date"
                                        className="form-control form-control-lg"
                                        name="endDate"
                                        value={this.state.endDate}
                                        onChange={this.onChangeHandler}
                                    />
                            </div>
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" value="save"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            </div>
        )
    }
}


AddProject.propTypes = {
    createProject: PropTypes.func.isRequired,
    errors : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors : state.errors
})


export default connect(
    mapStateToProps,
    { createProject }
)(AddProject)