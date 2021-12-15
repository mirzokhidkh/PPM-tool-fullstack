import { GET_PROJECT, GET_PROJECTS,DELETE_PROJECT } from ".././action/types"

const initialState = {
    projects: [],
    project:{}
}

 const projectReducer =  (state = initialState, action) => {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case GET_PROJECT:
            return {
                ...state,
                project: action.payload
            }
        case DELETE_PROJECT:
                return {
                    ...state,
                    projects: state.projects.filter(
                        p => p.projectIdentifier !== action.payload)
                }
        default:
            return state

    }
}

export default projectReducer;