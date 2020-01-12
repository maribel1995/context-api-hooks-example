import PropTypes from 'prop-types'

const Trip = ({ from, to, price }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <div>
        <h3>From</h3>
        <p>{from}</p>
      </div>
      <div>
        <h3>To </h3>
        <p>{to}</p>
      </div>
      <p>Price: {price}</p>
    </div>
  )
}

Trip.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  price: PropTypes.string
}

export default Trip
