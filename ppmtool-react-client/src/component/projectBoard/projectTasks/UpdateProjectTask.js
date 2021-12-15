import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import classnames from "classnames"
import PropTypes from "prop-types"
import {getProjectTask,updateProjectTask} from "../../../action/backlogActions"
import moment from 'moment';


 class UpdateProjectTask extends Component {

    constructor() {
        super();
    
        this.state = {
          id: "",
          projectSequence: "",
          summary: "",
          acceptanceCriteria: "",
          status: "",
          priority: "",
          dueDate: "",
          projectIdentifier: "",
          createdAt: "",
          errors:{}
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler     = this.onSubmitHandler.bind(this);
      }
      


      componentDidMount(){
        const { backlog_id, pt_id } = this.props.match.params
        this.props.getProjectTask(backlog_id, pt_id, this.props.history)
    }
    


      componentWillReceiveProps(nextProps) {
          if(nextProps.errors){
            this.setState({errors:nextProps.errors})
          }


        const {
          id,
          projectSequence,
          summary,
          acceptanceCriteria,
          status,
          priority,
          dueDate,
          projectIdentifier,
          createdAt  
        } = nextProps.projectTask;
    
        this.setState({
          id,
          projectSequence,
          summary,
          acceptanceCriteria,
          status,
          priority,
          dueDate,
          projectIdentifier,
          createdAt
        });
    }

 


    onChangeHandler(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    onSubmitHandler(e){
        e.preventDefault()

        const {
            id,
            projectSequence,
            summary,
            acceptanceCriteria,
            status,
            priority,
            dueDate,
            projectIdentifier,
            createdAt
        }=this.state

        const newTask={   
            id,   
            projectSequence,
            summary,
            acceptanceCriteria,
            status,
            priority,
            dueDate,
            projectIdentifier,
            createdAt};

            this.props.updateProjectTask(projectIdentifier,projectSequence,newTask,this.props.history)        

    }
    



    render() {
        const { backlog_id } = this.props.match.params
        // const { errors } = this.state;

        const {
            projectSequence,
            summary,
            acceptanceCriteria,
            status,
            priority,
            dueDate,
            projectIdentifier,
            errors
        }=this.state

        return (
            <div className="add-PBI">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link to={`/projectBoard/${backlog_id}`} className="btn btn-light">
                            Back to Project Board
                        </Link>
                        <h4 className="display-4 text-center">Update Project Task</h4>
                        <p className="lead text-center">Project Name: {projectIdentifier} + Project Task ID: {projectSequence}</p>
                        <form onSubmit={this.onSubmitHandler}>
                            <div className="form-group">
                                <input type="text" 
                                className={classnames("form-control form-control-lg",{
                                    "is-invalid": errors.summary
                                })}
                                 name="summary" 
                                 placeholder="Project Task summary"
                                 value={summary} 
                                 onChange={this.onChangeHandler}
                                 />
                                 
                                 {
                                     errors.summary && (
                                     <div className="invalid-feedback">{errors.summary}</div>
                                 )
                                
                                }
                            </div>
                            <div className="form-group">
                                <textarea className="form-control form-control-lg"
                                 placeholder="Acceptance Criteria" 
                                 name="acceptanceCriteria"
                                 value={acceptanceCriteria}
                                 onChange={this.onChangeHandler}
                                 ></textarea>
                            </div>
                            <h6>Due Date</h6>
                            <div className="form-group">
                                <input type="date" 
                                className="form-control form-control-lg" 
                                name="dueDate"
                                value={moment(dueDate).format('YYYY-MM-DD')} 
                                onChange={this.onChangeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <select 
                                className="form-control form-control-lg" 
                                name="priority"
                                value={priority}
                                onChange={this.onChangeHandler}

                                >
                                    <option value={0}>Select Priority</option>
                                    <option value={1}>High</option>
                                    <option value={2}>Medium</option>
                                    <option value={3}>Low</option>
                                </select>
                            </div>
    
                            <div className="form-group">
                                <select 
                                className="form-control form-control-lg"
                                 name="status"
                                 value={status}
                                 onChange={this.onChangeHandler}

                                 >
                                    <option value="">Select Status</option>
                                    <option value="TO_DO">TO DO</option>
                                    <option value="IN_PROGRESS">IN PROGRESS</option>
                                    <option value="DONE">DONE</option>
                                </select>
                            </div>
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" value="save" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


UpdateProjectTask.propTypes = {
    getProjectTask: PropTypes.func.isRequired,
    projectTask: PropTypes.object.isRequired,
    updateProjectTask:PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    projectTask: state.backlog.project_task,
    errors:state.errors
})


export default connect(
    mapStateToProps,
    {getProjectTask,updateProjectTask})
    (UpdateProjectTask) 