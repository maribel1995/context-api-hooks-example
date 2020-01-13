import Connect from 'store/config/connect'
import { setTrips, setDate } from 'store/search'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Trip from './trip'
import Tabs from './tabs'

const DEPARTURE = 'departures'
const RETURN = 'returns'
const Search = ({ search, dispatch, trips, date }) => {
  const [context, setContext] = useState(DEPARTURE)

  useEffect(() => {
    dispatch(setTrips(context, trips[context]))
  }, [search[context].trips])

  useEffect(() => {
    dispatch(setDate(context, date[context]))
  }, [context])

  const contextTrip = search[context].trips
  const contextDate = search[context].date

  const noReturnWarning = () => (<h1>No returns</h1>)

  return (
    <div>
      <div><Tabs contextDate={contextDate} context={context}/></div>
      <button onClick={() => setContext(DEPARTURE)}>Departures</button>
      <button onClick={() => setContext(RETURN)}>Returns</button>
      <div>{contextDate.toString()}</div>
      {contextTrip.length !== 0 ? contextTrip.map((trip, i) => <Trip key={i} {...trip} />) : noReturnWarning()}
    </div>
  )
}

const mapStateToProps = ({ search }, props) => {
  return {
    search,
    ...props
  }
}

Search.propTypes = {
  search: PropTypes.object,
  dispatch: PropTypes.func,
  trips: PropTypes.object,
  context: PropTypes.string,
  date: PropTypes.object
}

export default Connect(mapStateToProps)(Search)
