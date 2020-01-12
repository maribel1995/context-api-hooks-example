import Search from 'container/search'

const App = ({ trips }) => {
  return (
    <>
      <Search trips={trips} context={'returns'}/>
    </>
  )
}

export default App
