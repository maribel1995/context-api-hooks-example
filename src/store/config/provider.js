import { useReducer } from 'react'
import Context from './config'
import middleware from './middleware'
import searchReducer, { searchStore } from 'store/search'
import PropTypes from 'prop-types'

const Store = ({ children }) => {
  const [searchState, searchDispatch] = useReducer(
    searchReducer,
    searchStore
  )

  const trigglerDispatchs = action => {
    const dispatchs = [searchDispatch]
    for (let i = 0; i < dispatchs.length; i++) {
      dispatchs[i](action)
    }
  }

  const middlewareConstrutur = action => {
    middleware(action)(trigglerDispatchs)
  }

  const combinedReducers = {
    store: {
      ...searchState
    },
    dispatch: middlewareConstrutur
  }

  return (
    <Context.Provider value={combinedReducers}>
      {children}
    </Context.Provider>
  )
}

Store.propTypes = {
  children: PropTypes.node.isRequired
}

export default Store
