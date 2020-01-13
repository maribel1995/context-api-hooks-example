import Connect from 'store/config/connect'
import { setDate } from 'store/search'
import t from 'prop-types'

const Tab = ({ date, active, dispatch, context }) => {
  const isActive = (active) => {
    const style = { border: '1px solid purple', padding: '10px', cursor: 'pointer' }
    return active ? Object.assign(style, { backgroundColor: 'purple', color: 'white' }) : style
  }

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  const dateFormat = (d) => {
    const date = new Date(d)
    return capitalize(date.toLocaleDateString('pt-BR', { weekday: 'short', month: 'short', day: 'numeric' }))
  }

  const changeTabsDate = (e) => {
    const selectedDate = new Date(e.currentTarget.id)
    const todayDate = new Date().setHours(0, 0, 0, 0)

    if (selectedDate.setHours(0, 0, 0, 0) < todayDate) return
    dispatch(setDate(context, selectedDate.toISOString()))
  }

  return (
    <div id={date} style={isActive(active)} onClick={ changeTabsDate }>{dateFormat(date)}</div>
  )
}

const mapStateToProps = ({ search }, props) => {
  return {
    search,
    ...props
  }
}

Tab.propTypes = {
  date: t.string,
  active: t.bool,
  dispatch: t.func,
  context: t.string
}

export default Connect(mapStateToProps)(Tab)
