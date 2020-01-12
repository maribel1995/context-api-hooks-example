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

Index.getInitialProps = async () => {
  const res = await getTrips('sao-paulo-sp-todos', 'rio-de-janeiro-rj-todos', '2020-01-13', '2020-01-15')
  const data = await res.data
  return { trips: data }
}

export default Index
