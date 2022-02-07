import React from 'react'

import NavBar from './NavBar'
import GifListContainer from "/Users/shamitomita/Flatiron/code/react-async-gif-search-lab/src/containers/GifListContainer.js"
// the App component should render out the GifListContainer component DONEdoneDONE!

const App = () => {
  return (
    <div>
      <div>
        < NavBar color='black' title="Giphy Search" />
      </div>
      <div>
      <GifListContainer />
      </div>
    </div>
  )
}

export default App
