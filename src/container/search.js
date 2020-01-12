import Connect from 'store/config/connect'
import { setTrips } from 'store/search'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import Trip from './trip'

const Search = ({ search, dispatch, trips, context }) => {
  useEffect(() => {
    dispatch(setTrips(context, trips[context]))
  }, [search[context].trips])

  const contextTrip = search[context].trips

  return (
    <div>
      <div>TabContainer</div>
      <div>{contextTrip.map((trip, i) => <Trip key={i} {...trip} />)}</div>
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
  context: PropTypes.string
}

export default Connect(mapStateToProps)(Search)
