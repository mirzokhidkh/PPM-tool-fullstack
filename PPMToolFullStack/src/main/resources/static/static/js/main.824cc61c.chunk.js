(this["webpackJsonpppmtool-react-client"]=this["webpackJsonpppmtool-react-client"]||[]).push([[0],{47:function(e,t,a){},48:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(25),s=a.n(c),o=(a(47),a(48),a(4)),i=a(5),l=a(7),d=a(6),j=a(2),u=a(9),p=a.n(u),b=a(17),m=a(14),h=a.n(m),O="GET_ERRORS",v="GET_PROJECTS",f="GET_PROJECT",x="DELETE_PROJECT",g="GET_BACKLOG",N="GET_PROJECT_TASK",y="DELETE_PROJECT_TASK",k="SET_CURRENT_USER",C=function(e,t){return function(){var a=Object(b.a)(p.a.mark((function a(r){return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h.a.post("/api/project",e);case 3:t.push("/dashboard"),r({type:O,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:O,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},w=a(8),D=a(0),S=function(){return Object(D.jsx)(n.a.Fragment,{children:Object(D.jsx)(w.b,{to:"/addProject",className:"btn btn-lg btn-info",children:"Create a Project"})})},P=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"onDelete",value:function(e){this.props.deleteProject(e)}},{key:"render",value:function(){var e=this.props.project;return Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("div",{className:"card card-body bg-light mb-3",children:Object(D.jsxs)("div",{className:"row",children:[Object(D.jsx)("div",{className:"col-2",children:Object(D.jsx)("span",{className:"mx-auto",children:e.projectIdentifier})}),Object(D.jsxs)("div",{className:"col-lg-6 col-md-4 col-8",children:[Object(D.jsx)("h3",{children:e.projectName}),Object(D.jsx)("p",{children:e.description})]}),Object(D.jsx)("div",{className:"col-md-4 d-none d-lg-block",children:Object(D.jsxs)("ul",{className:"list-group",children:[Object(D.jsx)(w.b,{to:"/projectBoard/".concat(e.projectIdentifier),children:Object(D.jsx)("li",{className:"list-group-item board",children:Object(D.jsx)("i",{className:"fa fa-flag-checkered pr-1",children:" Project Board "})})}),Object(D.jsx)(w.b,{to:"/updateProject/".concat(e.projectIdentifier),children:Object(D.jsx)("li",{className:"list-group-item update",children:Object(D.jsx)("i",{className:"fa fa-edit pr-1",children:" Update Project Info"})})}),Object(D.jsx)("li",{className:"list-group-item delete",onClick:this.onDelete.bind(this,e.projectIdentifier),children:Object(D.jsx)("i",{className:"fa fa-minus-circle pr-1",children:" Delete Project"})})]})})]})})})}}]),a}(r.Component),H=Object(j.b)(null,{deleteProject:function(e){return function(){var t=Object(b.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure ? This will be delete the object and all the data related to it")){t.next=4;break}return t.next=3,h.a.delete("/api/project/".concat(e));case 3:a({type:x,payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(P),T=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return Object(D.jsx)("div",{className:"projects",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("div",{className:"row",children:Object(D.jsxs)("div",{className:"col-md-12",children:[Object(D.jsx)("h1",{className:"display-4 text-center",children:"Projects"}),Object(D.jsx)("br",{}),Object(D.jsx)(S,{}),Object(D.jsx)("br",{}),Object(D.jsx)("hr",{}),e.map((function(e){return Object(D.jsx)(H,{project:e},e.id)}))]})})})})}}]),a}(r.Component),I=Object(j.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(){var e=Object(b.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/project/all");case 2:a=e.sent,t({type:v,payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(T),E=a(26),_=function(e){e?h.a.defaults.headers.common.Authorization=e:delete h.a.defaults.headers.common.Authorization},R=function(){return function(e){localStorage.removeItem("jwtToken"),_(!1),e({type:k,payload:{}})}},A=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"logout",value:function(){this.props.logout(),window.location.href="/"}},{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,r=t.user,n=Object(D.jsxs)("div",{className:"collapse navbar-collapse",id:"mobile-nav",children:[Object(D.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(D.jsx)("li",{className:"nav-item",children:Object(D.jsx)(w.b,{className:"nav-link",to:"/dashboard",children:"Dashboard"})})}),Object(D.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(D.jsx)("li",{className:"nav-item",children:Object(D.jsxs)(w.b,{className:"nav-link",to:"/dashboard",children:[Object(D.jsx)("i",{className:"fas fa-user-circle mr-1"}),r.fullname]})}),Object(D.jsx)("li",{className:"nav-item",children:Object(D.jsx)(w.b,{className:"nav-link",to:"/logout",onClick:this.logout.bind(this),children:"Logout"})})]})]}),c=Object(D.jsx)("div",{className:"collapse navbar-collapse",id:"mobile-nav",children:Object(D.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(D.jsx)("li",{className:"nav-item",children:Object(D.jsx)(w.b,{className:"nav-link",to:"/register",children:"Sign Up"})}),Object(D.jsx)("li",{className:"nav-item",children:Object(D.jsx)(w.b,{className:"nav-link",to:"/login",children:"Login"})})]})});return e=a&&r?n:c,Object(D.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4",children:Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)(w.b,{to:"/",className:"navbar-brand",children:"Personal Project Management Tool"}),Object(D.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav",children:Object(D.jsx)("span",{className:"navbar-toggler-icon"})}),e]})})}}]),a}(r.Component),U=Object(j.b)((function(e){return{security:e.security}}),{logout:R})(A),B=(a(78),a(10)),M=a(15),q=a(12),G=a(13),L=a.n(G),W=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={projectName:"",projectIdentifier:"",description:"",startDate:"",endDate:"",errors:{}},e.onChangeHandler=e.onChangeHandler.bind(Object(q.a)(e)),e.onSubmitHandler=e.onSubmitHandler.bind(Object(q.a)(e)),e}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChangeHandler",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"onSubmitHandler",value:function(e){e.preventDefault();var t=this.state,a={projectName:t.projectName,projectIdentifier:t.projectIdentifier,description:t.description,startDate:t.startDate,endDate:t.endDate};this.props.createProject(a,this.props.history)}},{key:"clearProject",value:function(){this.setState({projectName:"",projectIdentifier:"",description:"",startDate:"",endDate:""})}},{key:"render",value:function(){var e=this.state.errors;return Object(D.jsx)("div",{children:Object(D.jsx)("div",{className:"project",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("div",{className:"row",children:Object(D.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(D.jsx)("h5",{className:"display-4 text-center",children:"Create"}),Object(D.jsx)("hr",{}),Object(D.jsxs)("form",{onSubmit:this.onSubmitHandler,children:[Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"text",className:L()("form-control form-control-lg mb-2",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChangeHandler}),e.projectName&&Object(D.jsx)("div",{className:"invalid-feedback",children:e.projectName})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"text",className:L()("form-control form-control-lg mb-2",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChangeHandler}),e.projectIdentifier&&Object(D.jsx)("div",{className:"invalid-feedback",children:e.projectIdentifier})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("textarea",{className:L()("form-control form-control-lg  mb-2",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChangeHandler}),e.description&&Object(D.jsx)("div",{className:"invalid-feedback",children:e.description})]}),Object(D.jsx)("h6",{children:"Start Date"}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"startDate",value:this.state.startDate,onChange:this.onChangeHandler})}),Object(D.jsx)("h6",{children:"Estimated End Date"}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"endDate",value:this.state.endDate,onChange:this.onChangeHandler})}),Object(D.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4",value:"save"})]})]})})})})})}}]),a}(r.Component),J=Object(j.b)((function(e){return{errors:e.errors}}),{createProject:C})(W),F=a(22),Y=a(40),K={},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return t.payload;default:return e}},V=a(11),z={projects:[],project:{}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(V.a)(Object(V.a)({},e),{},{projects:t.payload});case f:return Object(V.a)(Object(V.a)({},e),{},{project:t.payload});case x:return Object(V.a)(Object(V.a)({},e),{},{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},Z={project_tasks:[],project_task:{}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(V.a)(Object(V.a)({},e),{},{project_tasks:t.payload});case N:return Object(V.a)(Object(V.a)({},e),{},{project_task:t.payload});case y:return Object(V.a)(Object(V.a)({},e),{},{project_tasks:e.project_tasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},ee={validToken:!1,user:{}},te=function(e){return!!e},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(V.a)(Object(V.a)({},e),{},{validToken:te(t.payload),user:t.payload});default:return e}},re=Object(F.b)({errors:X,project:Q,backlog:$,security:ae}),ne={},ce=[Y.a],se=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),oe=window.navigator.userAgent.includes("Chrome")&&se?Object(F.d)(re,ne,Object(F.c)(F.a.apply(void 0,ce),se)):Object(F.d)(re,ne,Object(F.c)(F.a.apply(void 0,ce))),ie=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={id:"",projectName:"",projectIdentifier:"",description:"",startDate:"",endDate:"",errors:{}},e.onChangeHandler=e.onChangeHandler.bind(Object(q.a)(e)),e.onSubmitHandler=e.onSubmitHandler.bind(Object(q.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project,a=t.id,r=t.projectName,n=t.projectIdentifier,c=t.description,s=t.startDate,o=t.endDate;this.setState({id:a,projectName:r,projectIdentifier:n,description:c,startDate:s,endDate:o})}},{key:"onChangeHandler",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"onSubmitHandler",value:function(e){e.preventDefault();var t={id:this.state.id,projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,startDate:this.state.startDate,endDate:this.state.endDate};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state,t=e.projectName,a=e.projectIdentifier,r=e.description,n=e.startDate,c=e.endDate,s=e.errors;return Object(D.jsx)("div",{className:"project",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("div",{className:"row",children:Object(D.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(D.jsx)("h5",{className:"display-4 text-center",children:"Edit Project form"}),Object(D.jsx)("hr",{}),Object(D.jsxs)("form",{onSubmit:this.onSubmitHandler,children:[Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"text",className:L()("form-control form-control-lg",{"is-invalid":s.projectName}),placeholder:"Project Name",name:"projectName",value:t,onChange:this.onChangeHandler}),s.projectName&&Object(D.jsx)("div",{className:"invalid-feedback",children:s.projectName})]}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Unique Project ID",name:"projectIdentifier",value:a,disabled:!0})}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("textarea",{className:L()("form-control form-control-lg",{"is-invalid":s.description}),placeholder:"Project Description",name:"description",value:r,onChange:this.onChangeHandler}),s.description&&Object(D.jsx)("div",{className:"invalid-feedback",children:s.description})]}),Object(D.jsx)("h6",{children:"Start Date"}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"startDate",value:n,onChange:this.onChangeHandler})}),Object(D.jsx)("h6",{children:"Estimated End Date"}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"endDate",value:c,onChange:this.onChangeHandler})}),Object(D.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4",value:"save"})]})]})})})})}}]),a}(r.Component),le=Object(j.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(){var a=Object(b.a)(p.a.mark((function a(r){var n;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h.a.get("/api/project/".concat(e));case 3:n=a.sent,r({type:f,payload:n.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.push("/dashboard");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},createProject:C})(ie),de=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"onDeleteClick",value:function(e,t){this.props.deleteProjectTask(e,t)}},{key:"render",value:function(){var e,t,a=this.props.projectTask;return 1===a.priority&&(t="bg-danger text-light",e="HIGH"),2===a.priority&&(t="bg-warning text-light",e="MEDIUM"),3===a.priority&&(t="bg-info text-light",e="LOW"),Object(D.jsxs)("div",{className:"card mb-1 bg-light",children:[Object(D.jsxs)("div",{className:"card-header text-primary ".concat(t),children:["ID: ",a.projectSequence," -- Priority:",e]}),Object(D.jsxs)("div",{className:"card-body bg-light",children:[Object(D.jsx)("h5",{className:"card-title",children:a.summary}),Object(D.jsx)("p",{className:"card-text text-truncate ",children:a.acceptanceCriteria}),Object(D.jsx)(w.b,{to:"/updateProjecttask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-primary",children:"View / Update"}),Object(D.jsx)("button",{className:"btn btn-danger ml-4",onClick:this.onDeleteClick.bind(this,a.projectIdentifier,a.projectSequence),children:"Delete"})]})]})}}]),a}(r.Component),je=Object(j.b)(null,{deleteProjectTask:function(e,t){return function(){var a=Object(b.a)(p.a.mark((function a(r){return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("You are deleting project task ".concat(t,", this action cannot be undone"))){a.next=4;break}return a.next=3,h.a.delete("/api/backlog/".concat(e,"/").concat(t));case 3:r({type:y,payload:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(de),ue=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){for(var e=this.props.projectTasks.map((function(e){return Object(D.jsx)(je,{projectTask:e},e.id)})),t=[],a=[],r=[],n=0;n<e.length;n++){var c=e[n];"TO_DO"===c.props.projectTask.status&&t.push(c),"IN_PROGRESS"===c.props.projectTask.status&&a.push(c),"DONE"===c.props.projectTask.status&&r.push(c)}return Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)("div",{className:"row",children:[Object(D.jsxs)("div",{className:"col-md-4",children:[Object(D.jsx)("div",{className:"card text-center mb-2",children:Object(D.jsx)("div",{className:"card-header bg-secondary text-white",children:Object(D.jsx)("h3",{children:"TO DO"})})}),t]}),Object(D.jsxs)("div",{className:"col-md-4",children:[Object(D.jsx)("div",{className:"card text-center mb-2",children:Object(D.jsx)("div",{className:"card-header bg-primary text-white",children:Object(D.jsx)("h3",{children:"In Progress"})})}),a]}),Object(D.jsxs)("div",{className:"col-md-4",children:[Object(D.jsx)("div",{className:"card text-center mb-2",children:Object(D.jsx)("div",{className:"card-header bg-success text-white",children:Object(D.jsx)("h3",{children:"Done"})})}),r]})]})})}}]),a}(r.Component),pe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={errors:{}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklog(e)}},{key:"render",value:function(){var e,t=this.props.match.params.id,a=this.props.backlog.project_tasks;return e=function(e,t){return t.length<1?e.projectNotFound?Object(D.jsx)("div",{className:"alert alert-danger text-center",role:"alert",children:e.projectNotFound}):e.projectIdentifier?Object(D.jsx)("div",{className:"alert alert-danger text-center",role:"alert",children:e.projectIdentifier}):Object(D.jsx)("div",{className:"alert alert-info text-center",role:"alert",children:"No Projects Tasks on this board"}):Object(D.jsx)(ue,{projectTasks:a})}(this.state.errors,a),Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)(w.b,{to:"/addProjectTask/".concat(t),className:"btn btn-primary mb-3",children:Object(D.jsx)("i",{className:"fas fa-plus-circle",children:" Create Project Task"})}),Object(D.jsx)("br",{}),Object(D.jsx)("hr",{}),e]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e?{errors:e.errors}:null}}]),a}(r.Component),be=Object(j.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:function(e){return function(){var t=Object(b.a)(p.a.mark((function t(a){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("/api/backlog/".concat(e));case 3:r=t.sent,a({type:g,payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:O,payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})(pe),me=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var r;Object(o.a)(this,a);var n=(r=t.call(this,e)).props.match.params.id;return r.state={summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:n,errors:{}},r.onChangeHandler=r.onChangeHandler.bind(Object(q.a)(r)),r.onSubmitHandler=r.onSubmitHandler.bind(Object(q.a)(r)),r}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChangeHandler",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"onSubmitHandler",value:function(e){e.preventDefault();var t=this.state,a={summary:t.summary,acceptanceCriteria:t.acceptanceCriteria,status:t.status,priority:t.priority,dueDate:t.dueDate};this.props.addProjectTask(this.state.projectIdentifier,a,this.props.history)}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.errors;return Object(D.jsx)("div",{className:"add-PBI",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("div",{className:"row",children:Object(D.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(D.jsx)(w.b,{to:"/projectBoard/".concat(e),className:"btn btn-light",children:"Back to Project Board"}),Object(D.jsx)("h4",{className:"display-4 text-center",children:"Add Project Task"}),Object(D.jsx)("p",{className:"lead text-center",children:"Project Name + Project Code"}),Object(D.jsxs)("form",{onSubmit:this.onSubmitHandler,children:[Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"text",className:L()("form-control form-control-lg",{"is-invalid":t.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChangeHandler}),t.summary&&Object(D.jsx)("div",{className:"invalid-feedback",children:t.summary})]}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChangeHandler})}),Object(D.jsx)("h6",{children:"Due Date"}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChangeHandler})}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsxs)("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChangeHandler,children:[Object(D.jsx)("option",{value:0,children:"Select Priority"}),Object(D.jsx)("option",{value:1,children:"High"}),Object(D.jsx)("option",{value:2,children:"Medium"}),Object(D.jsx)("option",{value:3,children:"Low"})]})}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsxs)("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChangeHandler,children:[Object(D.jsx)("option",{value:"",children:"Select Status"}),Object(D.jsx)("option",{value:"TO_DO",children:"TO DO"}),Object(D.jsx)("option",{value:"IN_PROGRESS",children:"IN PROGRESS"}),Object(D.jsx)("option",{value:"DONE",children:"DONE"})]})}),Object(D.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})}}]),a}(r.Component),he=Object(j.b)((function(e){return{errors:e.errors}}),{addProjectTask:function(e,t,a){return function(){var r=Object(b.a)(p.a.mark((function r(n){return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,h.a.post("/api/backlog/".concat(e),t);case 3:a.push("/projectBoard/".concat(e)),n({type:O,payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),n({type:O,payload:r.t0.response.data});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}})(me),Oe=a(41),ve=a.n(Oe),fe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:"",dueDate:"",projectIdentifier:"",createdAt:"",errors:{}},e.onChangeHandler=e.onChangeHandler.bind(Object(q.a)(e)),e.onSubmitHandler=e.onSubmitHandler.bind(Object(q.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlog_id,a=e.pt_id;this.props.getProjectTask(t,a,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.projectTask,a=t.id,r=t.projectSequence,n=t.summary,c=t.acceptanceCriteria,s=t.status,o=t.priority,i=t.dueDate,l=t.projectIdentifier,d=t.createdAt;this.setState({id:a,projectSequence:r,summary:n,acceptanceCriteria:c,status:s,priority:o,dueDate:i,projectIdentifier:l,createdAt:d})}},{key:"onChangeHandler",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"onSubmitHandler",value:function(e){e.preventDefault();var t=this.state,a=t.id,r=t.projectSequence,n=t.summary,c=t.acceptanceCriteria,s=t.status,o=t.priority,i=t.dueDate,l=t.projectIdentifier,d={id:a,projectSequence:r,summary:n,acceptanceCriteria:c,status:s,priority:o,dueDate:i,projectIdentifier:l,createdAt:t.createdAt};this.props.updateProjectTask(l,r,d,this.props.history)}},{key:"render",value:function(){var e=this.props.match.params.backlog_id,t=this.state,a=t.projectSequence,r=t.summary,n=t.acceptanceCriteria,c=t.status,s=t.priority,o=t.dueDate,i=t.projectIdentifier,l=t.errors;return Object(D.jsx)("div",{className:"add-PBI",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("div",{className:"row",children:Object(D.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(D.jsx)(w.b,{to:"/projectBoard/".concat(e),className:"btn btn-light",children:"Back to Project Board"}),Object(D.jsx)("h4",{className:"display-4 text-center",children:"Update Project Task"}),Object(D.jsxs)("p",{className:"lead text-center",children:["Project Name: ",i," + Project Task ID: ",a]}),Object(D.jsxs)("form",{onSubmit:this.onSubmitHandler,children:[Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"text",className:L()("form-control form-control-lg",{"is-invalid":l.summary}),name:"summary",placeholder:"Project Task summary",value:r,onChange:this.onChangeHandler}),l.summary&&Object(D.jsx)("div",{className:"invalid-feedback",children:l.summary})]}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:n,onChange:this.onChangeHandler})}),Object(D.jsx)("h6",{children:"Due Date"}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:ve()(o).format("YYYY-MM-DD"),onChange:this.onChangeHandler})}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsxs)("select",{className:"form-control form-control-lg",name:"priority",value:s,onChange:this.onChangeHandler,children:[Object(D.jsx)("option",{value:0,children:"Select Priority"}),Object(D.jsx)("option",{value:1,children:"High"}),Object(D.jsx)("option",{value:2,children:"Medium"}),Object(D.jsx)("option",{value:3,children:"Low"})]})}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsxs)("select",{className:"form-control form-control-lg",name:"status",value:c,onChange:this.onChangeHandler,children:[Object(D.jsx)("option",{value:"",children:"Select Status"}),Object(D.jsx)("option",{value:"TO_DO",children:"TO DO"}),Object(D.jsx)("option",{value:"IN_PROGRESS",children:"IN PROGRESS"}),Object(D.jsx)("option",{value:"DONE",children:"DONE"})]})}),Object(D.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4",value:"save"})]})]})})})})}}]),a}(r.Component),xe=Object(j.b)((function(e){return{projectTask:e.backlog.project_task,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(){var r=Object(b.a)(p.a.mark((function r(n){var c;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,h.a.get("/api/backlog/".concat(e,"/").concat(t));case 3:c=r.sent,n({type:N,payload:c.data}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a.push("/dashboard");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},updateProjectTask:function(e,t,a,r){return function(){var n=Object(b.a)(p.a.mark((function n(c){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.a.patch("/api/backlog/".concat(e,"/").concat(t),a);case 3:r.push("/projectBoard/".concat(e)),c({type:O,payload:{}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c({type:O,payload:n.t0.response.data});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}})(fe),ge=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(D.jsx)("div",{className:"landing",children:Object(D.jsx)("div",{className:"light-overlay landing-inner text-dark",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("div",{className:"row",children:Object(D.jsxs)("div",{className:"col-md-12 text-center",children:[Object(D.jsx)("h1",{className:"display-3 mb-4",children:"Personal Kanban Tool"}),Object(D.jsx)("p",{className:"lead",children:"Create your account to join active projects or start you own"}),Object(D.jsx)("hr",{}),Object(D.jsx)(w.b,{to:"/register",className:"btn btn-lg btn-primary mr-2",children:"Sign Up"}),Object(D.jsx)(w.b,{to:"/login",className:"btn btn-lg btn-secondary",children:"Login"})]})})})})})}}]),a}(r.Component),Ne=Object(j.b)((function(e){return{security:e.security}}))(ge),ye=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={username:"",password:"",errors:{}},e.onCHangeHandler=e.onCHangeHandler.bind(Object(q.a)(e)),e.onSubmitHandler=e.onSubmitHandler.bind(Object(q.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"onCHangeHandler",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"componentWillReceiveProps",value:function(e){e.security.validToken&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"onSubmitHandler",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};this.props.login(t)}},{key:"render",value:function(){var e=this.state.errors;return Object(D.jsx)("div",{className:"login",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("div",{className:"row",children:Object(D.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(D.jsx)("h1",{className:"display-4 text-center",children:"Log In"}),Object(D.jsxs)("form",{onSubmit:this.onSubmitHandler,children:[Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"email",className:L()("form-control form-control-lg mb-2",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onCHangeHandler}),e.username&&Object(D.jsx)("div",{className:"invalid-feedback",children:e.username})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"password",className:L()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onCHangeHandler}),e.password&&Object(D.jsx)("div",{className:"invalid-feedback",children:e.password})]}),Object(D.jsx)("input",{type:"submit",className:"btn btn-info btn-block mt-4",value:"Sign in"})]})]})})})})}}]),a}(r.Component),ke=Object(j.b)((function(e){return{security:e.security,errors:e.errors}}),{login:function(e){return function(){var t=Object(b.a)(p.a.mark((function t(a){var r,n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.post("/api/users/login",e);case 3:r=t.sent,n=r.data.token,localStorage.setItem("jwtToken",n),_(n),c=Object(E.a)(n),a({type:k,payload:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:O,payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})(ye),Ce=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={username:"",fullName:"",password:"",confirmPassword:"",errors:{}},e.onChangeHandler=e.onChangeHandler.bind(Object(q.a)(e)),e.onSubmitHandler=e.onSubmitHandler.bind(Object(q.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){console.log(e.errors),e.errors&&this.setState({errors:e.errors})}},{key:"onSubmitHandler",value:function(e){e.preventDefault();var t={username:this.state.username,fullName:this.state.fullName,password:this.state.password,confirmPassword:this.state.confirmPassword};console.log("NEWUSER:",t),this.props.createNewUser(t,this.props.history)}},{key:"onChangeHandler",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state,t=e.username,a=e.fullName,r=e.password,n=e.confirmPassword,c=e.errors;return Object(D.jsx)("div",{className:"register",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("div",{className:"row",children:Object(D.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(D.jsx)("h1",{className:"display-4 text-center",children:"Sign Up"}),Object(D.jsx)("p",{className:"lead text-center",children:"Create your Account"}),Object(D.jsxs)("form",{onSubmit:this.onSubmitHandler,children:[Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"text",className:L()("form-control form-control-lg mb-2",{"is-invalid":c.fullName}),placeholder:"Full Name",name:"fullName",value:a,onChange:this.onChangeHandler}),c.fullName&&Object(D.jsx)("div",{className:"invalid-feedback",children:c.fullName})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"text",className:L()("form-control form-control-lg mb-2",{"is-invalid":c.username}),placeholder:"Email Address (Username)",name:"username",value:t,onChange:this.onChangeHandler}),c.fullName&&Object(D.jsx)("div",{className:"invalid-feedback",children:c.username})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"password",className:L()("form-control form-control-lg mb-2",{"is-invalid":c.password}),placeholder:"Password",name:"password",value:r,onChange:this.onChangeHandler}),c.fullName&&Object(D.jsx)("div",{className:"invalid-feedback",children:c.password})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("input",{type:"password",className:L()("form-control form-control-lg mb-2",{"is-invalid":c.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:n,onChange:this.onChangeHandler}),c.fullName&&Object(D.jsx)("div",{className:"invalid-feedback",children:c.confirmPassword})]}),Object(D.jsx)("input",{type:"submit",className:"btn btn-info btn-block mt-4",value:"Sign up"})]})]})})})})}}]),a}(r.Component),we=Object(j.b)((function(e){return{errors:e.errors,security:e.security}}),{createNewUser:function(e,t){return function(){var a=Object(b.a)(p.a.mark((function a(r){return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("NEWUSER:",e),a.prev=1,a.next=4,h.a.post("/api/users/register",e);case 4:t.push("/login"),r({type:O,payload:{}}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),r({type:O,payload:a.t0.response.data});case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()}})(Ce),De=a(42),Se=["component","security"],Pe=Object(j.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,r=Object(De.a)(e,Se);return Object(D.jsx)(B.b,Object(V.a)(Object(V.a)({},r),{},{render:function(e){return!0===a.validToken?Object(D.jsx)(t,Object(V.a)({},e)):Object(D.jsx)(B.a,{to:"/login"})}}))})),He=localStorage.jwtToken;if(He){_(He);var Te=Object(E.a)(He);oe.dispatch({type:k,payload:Te});var Ie=Date.now()/1e3;Te.exp<Ie&&(oe.dispatch(R()),window.location.href="/")}var Ee=function(){return Object(D.jsx)(j.a,{store:oe,children:Object(D.jsx)(w.a,{children:Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)(U,{}),Object(D.jsx)(B.b,{exact:!0,path:"/",component:Ne}),Object(D.jsx)(B.b,{exact:!0,path:"/login",component:ke}),Object(D.jsx)(B.b,{exact:!0,path:"/register",component:we}),Object(D.jsxs)(B.d,{children:[Object(D.jsx)(Pe,{exact:!0,path:"/dashboard",component:I}),Object(D.jsx)(Pe,{exact:!0,path:"/addProject",component:J}),Object(D.jsx)(Pe,{exact:!0,path:"/updateProject/:id",component:le}),Object(D.jsx)(Pe,{exact:!0,path:"/projectBoard/:id",component:be}),Object(D.jsx)(Pe,{exact:!0,path:"/addProjecttask/:id",component:he}),Object(D.jsx)(Pe,{exact:!0,path:"/updateProjecttask/:backlog_id/:pt_id",component:xe})]})]})})})};s.a.render(Object(D.jsx)(n.a.StrictMode,{children:Object(D.jsx)(Ee,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.824cc61c.chunk.js.map