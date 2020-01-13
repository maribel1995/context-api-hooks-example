import { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Tab from './tab'

const Tabs = ({ contextDate, context }) => {
  const numberOfTabs = [...new Array(5)]
  const [tabs, setTabs] = useState([])

  useEffect(() => {
    setTabs(getTabDates())
  }, [contextDate])

  const getTabDates = useCallback(
    () => {
      let cont = 0
      return numberOfTabs.map(() => {
        const date = new Date(getInicialDate())
        const newDate = new Date(contextDate)
        date.setDate(getInicialDate().getDate() + cont)
        cont++
        return { date: date.toDateString(), active: date.getDay() === newDate.getDay() }
      })
    }
  )

  const getInicialDate = useCallback(
    () => {
      const inicialDate = new Date(contextDate)
      const date = new Date(contextDate)
      inicialDate.setDate(date.getDate() - 2)
      return inicialDate
    }
  )

  return (
    <div style={{ display: 'flex' }}>
      { tabs.map((tab, i) => <Tab key={i} {...tab} context={context}/>) }
    </div>
  )
}

Tabs.propTypes = {
  contextDate: PropTypes.string,
  context: PropTypes.string
}

export default Tabs
