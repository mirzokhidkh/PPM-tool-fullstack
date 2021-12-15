import './App.css'
import Dashboard from './component/Dashboard'
import Header from './component/layout/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import AddProject from './component/project/AddProject'
import {Provider} from "react-redux"
import store from './store'
import UpdateProject from './component/project/UpdateProject'
import ProjectBoard from './component/projectBoard/ProjectBoard'
import AddProjectTask from './component/projectBoard/projectTasks/AddProjectTask'
import UpdateProjectTask from './component/projectBoard/projectTasks/UpdateProjectTask'
import Landing from './component/layout/Landing'
import Login from './component/UserManagement/Login'
import Register from './component/UserManagement/Register'
import jwt_decode from 'jwt-decode'
import setJWTToken from './securityUtils/setJWTToken'
import {SET_CURRENT_USER} from "./action/types"
import {logout} from "./action/securityActions"
import SecuredRoute from './securityUtils/SecureRoute'


const jwtToken = localStorage.jwtToken

if(jwtToken){
  setJWTToken(jwtToken)
  const decoded_jwtToken = jwt_decode(jwtToken)
  store.dispatch({
    type:SET_CURRENT_USER,
    payload:decoded_jwtToken
  })

  const currentTime = Date.now() / 1000

  if(decoded_jwtToken.exp < currentTime){
    store.dispatch(logout())
    window.location.href = "/"

  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Header/>


        {
          //PUBLIC ROUTES
        }
        <Route exact path="/"  component={Landing}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>


        {
          //PRIVATE ROUTES
        }

        <Switch> 
        
        <SecuredRoute  exact path="/dashboard"  component={Dashboard}/>
        <SecuredRoute  exact path="/addProject" component={AddProject}/>
        <SecuredRoute  exact path="/updateProject/:id" component={UpdateProject}/>
        <SecuredRoute  exact path="/projectBoard/:id" component={ProjectBoard}/>
        <SecuredRoute  exact path="/addProjecttask/:id" component={AddProjectTask}/>
        <SecuredRoute  exact path="/updateProjecttask/:backlog_id/:pt_id" component={UpdateProjectTask}/>

        </Switch>

      
        </div>
     </Router>
    </Provider>


  );
}

export default App;
