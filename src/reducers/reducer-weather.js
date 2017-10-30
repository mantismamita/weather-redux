import { FETCH_WEATHER } from '../actions/index'

// redux promise middleware transforms promise into data

export default function(state= [], action) {

    switch (action.type){
        case FETCH_WEATHER :
            return [action.payload.data, ...state ]
    }
       
    return state;
}