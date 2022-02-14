export default (state, action) => {
    switch (action.type) {

        case 'ADD-TASK':
            return {
                ...state,
                tasklist: [action.payload, ...state.tasklist],
                filtertasklist: [action.payload, ...state.tasklist],
            }
        case 'ALL-LIST':
            return {
                ...state,
                tasklist: state.tasklist,
                filtertasklist: state.tasklist,
            }
        case 'DELETE-TASK':
            return {
                ...state,
                tasklist: state.tasklist.filter((task) => task.id !== action.payload),
                filtertasklist: state.tasklist.filter((task) => task.id !== action.payload),
            }
        case 'FAV-TASK':
            return {
                ...state,
                tasklist: state.tasklist.map((task) => (
                    (task.id === action.payload) ? { ...task, fav: !task.fav } : { ...task }
                )),
                filtertasklist: state.tasklist.map((task) => (
                    (task.id === action.payload) ? { ...task, fav: !task.fav } : { ...task }
                )),

            }
        case 'SEARCH-TASK':
            return {
                ...state,
                tasklist: [...state.tasklist],
                filtertasklist: (action.payload === "") ? state.tasklist : state.tasklist.filter((task) => task.task.toLowerCase().includes(action.payload.trim()))

            }
        default:
            return state;

    }
}