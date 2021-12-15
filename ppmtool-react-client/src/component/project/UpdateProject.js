import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import { getProject,createProject } from '../../action/projectActions'
import classNames from 'classnames'

class UpdateProject extends Component {

    constructor() {
        super()
        this.state = {
            "id": "",
            "projectName": "",
            "projectIdentifier": "",
            "description": "",
            "startDate": "",
            "endDate": "",
            "errors":{}
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)

    }

    componentDidMount() {
        const {id} = this.props.match.params
        this.props.getProject(id,this.props.history)
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors:nextProps.errors
            })
        }

        const { id, projectName, projectIdentifier, description, startDate, endDate} = nextProps.project

        this.setState({
            id, projectName, projectIdentifier, description, startDate, endDate
        })
    }
    
    onChangeHandler(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmitHandler(e) {
        e.preventDefault()
        const updatedProject= {
            "id": this.state.id,
            "projectName": this.state.projectName,
            "projectIdentifier": this.state.projectIdentifier,
            "description": this.state.description,
            "startDate": this.state.startDate,
            "endDate": this.state.endDate
        }

        this.props.createProject(updatedProject,this.props.history)
    }
    


    render() {
        const {projectName, projectIdentifier, description, startDate, endDate ,errors} = this.state
        return (
        <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Edit Project form</h5>
                    <hr />
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="form-group">
                                    <input type="text"
                                        className={classNames("form-control form-control-lg", {
                                            "is-invalid": errors.projectName
                                        })}
                                        placeholder="Project Name"
                                        name="projectName"
                                        value={projectName}
                                        onChange={this.onChangeHandler}
                                    />
                                    {
                                        errors.projectName && (
                                            <div className="invalid-feedback">{errors.projectName}</div>
                                        )
                                    }
                        </div>
                        <div className="form-group">
                                    <input type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Unique Project ID"
                                        name="projectIdentifier"
                                        value={projectIdentifier}
                                disabled />
                        </div>
                        <div className="form-group">
                                    <textarea
                                    className={classNames("form-control form-control-lg", {
                                        "is-invalid": errors.description
                                    })}
                                        placeholder="Project Description"
                                        name="description"
                                        value={description}
                                        onChange={this.onChangeHandler}
                                    />
                                    {
                                        errors.description && (
                                            <div className="invalid-feedback">{errors.description}</div>
                                        )
                                    }
                        </div>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" 
                                        className="form-control form-control-lg"
                                        name="startDate"
                                        value={startDate}
                                        onChange={this.onChangeHandler}
                                        />
                        </div>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                                    <input type="date"
                                        className="form-control form-control-lg"
                                        name="endDate"
                                        value={endDate}
                                        onChange={this.onChangeHandler}
                                        />
                        </div>

                        <input type="submit" className="btn btn-primary btn-block mt-4" value="save"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
        )
    }
}


UpdateProject.propTypes = {
    getProject : PropTypes.func.isRequired,
    createProject : PropTypes.func.isRequired,
    project : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    project : state.project.project,
    errors : state.errors
 })

export default connect(
    mapStateToProps,
    {
        getProject,
        createProject
    }
)(UpdateProject)
