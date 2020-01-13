import App from './App'
import Provider from 'store/config/provider'
import { getTrips } from 'api/trip-service'

const Index = (props) => {
  return (
    <Provider>
      <App {...props}/>
    </Provider>
  )
}

Index.getInitialProps = async ({ query }) => {
  const res = await getTrips({ ...query })
  const data = await res.data
  return {
    trips: data,
    date: {
      departures: query.departureDate,
      returns: query.returnDate
    }
  }
}

export default Index

// ?from=sao-paulo-sp-todos&to=rio-de-janeiro-rj-todos&departureDate=2020-01-24&returnDate=2020-01-23
