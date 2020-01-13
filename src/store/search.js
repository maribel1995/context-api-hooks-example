export const searchStore = {
  search: {
    departures: {
      date: '',
      trips: []
    },
    returns: {
      date: '',
      trips: []
    }
  }
}

export const SET_DATE = 'SET_DATE'
export const SET_TRIPS = 'SET_TRIPS'

export const searchReducer = (state = searchStore, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        search: {
          ...state.search,
          [action.context]: {
            ...state.search[action.context],
            date: action.set
          }
        }
      }
    case SET_TRIPS:
      return {
        search: {
          ...state.search,
          [action.context]: {
            ...state.search[action.context],
            trips: action.set
          }
        }
      }
    default:
      return state
  }
}

export const setDate = (context, date) => {
  return {
    type: SET_DATE,
    set: date,
    context: context
  }
}

export const setTrips = (context, trips) => {
  return {
    type: SET_TRIPS,
    set: trips,
    context: context
  }
}

export default searchReducer
