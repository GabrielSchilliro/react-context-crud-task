export default function appReducer(state, action) {
    console.log(state, action);

    return ({
        tasks: [...state.tasks, action.payload]
    }
    );
}