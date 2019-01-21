import {
    CHANGE_COLOR
} from './Types';

export const changeActive = (id) =>{
    return{
        type: CHANGE_COLOR,
        id
    }
}