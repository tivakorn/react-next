export default function (state = true, action) {
    switch (action.type) {
        case 'SHOW':
            return action.show
        default:
            return state
    }
}