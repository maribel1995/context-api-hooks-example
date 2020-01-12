import { createContext } from 'react'
import { searchStore } from 'store/search'

export const initialState = {
  store: {
    ...searchStore
  },
  dispatch: () => {}
}

const Context = createContext(initialState)

export default Context
