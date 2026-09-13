import './App.css'
import React from 'react'
import HomePage from './HomePage'
import AlgoTraderProject from './AlgoTraderProject'
import JavaClientProject from './JavaClientProject'
import AlgoTraderShowcase from './AlgoTraderShowcase'
import JavaClientShowcase from './JavaClientShowcase'

function App() {

  const [showcaseVisible, setShowcaseVisible] = React.useState(false);
  const [showcaseContent, setShowcaseContent] = React.useState(0);

  const showcase = {
    0: <AlgoTraderShowcase setShowcaseVisible={setShowcaseVisible} />,
    1: <JavaClientShowcase setShowcaseVisible={setShowcaseVisible} />
  }

  return (
    <div>
      {showcaseVisible && 
      
        <div className='showcase-overlay'>
          <div className='showcase-content'>
            {showcase[showcaseContent]}
          </div>
        </div>
      }
      <HomePage />
      <AlgoTraderProject setShowcaseVisible={setShowcaseVisible} setShowcaseContent={setShowcaseContent}/>
      <JavaClientProject setShowcaseVisible={setShowcaseVisible} setShowcaseContent={setShowcaseContent}/>
    </div>
  )
}

export default App
