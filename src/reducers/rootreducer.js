const initialState = {
    active: false,
    id: '1',
    navList: [
        {
            id: 1,
            navLink: 'Dashboard',
            link: ''
        },
        {
            id: 2,
            navLink: 'User Profile',
            link: 'profile'
        },
        {
            id: 3,
            navLink: 'Table List',
            link: 'table'
        },
        {
            id: 4,
            navLink: 'Typography',
            link: 'typography'
        },
        {
            id: 5,
            navLink: 'Notifications',
            link: 'notification'
        },


    ]
}

const rootreducer = (state = initialState, action) =>{
    if (action.type === 'CHANGE_COLOR'){
       let active = true
       let id = action.id
       return{
        ...state,
        active: active,
        id: id
       }
    }

    return state
}

export default rootreducer