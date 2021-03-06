import React, { Component } from 'react'
import ProjectTask from './projectTasks/ProjectTask'

 class Backlog extends Component {
    render() {
        const {projectTasks} = this.props

        const tasks = projectTasks.map(projectTask=>(
            <ProjectTask key={projectTask.id} projectTask={projectTask}/>
        ))

        let todoItems = []
        let inProgressItems = []
        let doneItems = []


        for (let i = 0; i < tasks.length; i++) {
            const el = tasks[i];

            if(el.props.projectTask.status === "TO_DO"){
                todoItems.push(el)
            }
            if(el.props.projectTask.status === "IN_PROGRESS"){
                inProgressItems.push(el)
            }
            if(el.props.projectTask.status === "DONE"){
                doneItems.push(el)
            }
            
        }

        return (
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-secondary text-white">
                            <h3>TO DO</h3>
                        </div>
                    </div>
                    {todoItems}

                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-primary text-white">
                            <h3>In Progress</h3>
                        </div>
                    </div>
                    {inProgressItems}
                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-success text-white">
                            <h3>Done</h3>
                        </div>
                    </div>
                    {doneItems}

                </div>
            </div>
        </div>

        )
    }
}


export default Backlog 
