import React from 'react'
import Channelsubscribers from './Channelsubscribers'
import Videoviews from './Videoviews'
import Channelwatchtime from './Channelwatchtime'
import Videolikes from './Videolikes'
import Lifestreamviews from './Lifestreamviews'
import Videoshare from './Videoshare'

const Youtube = () => {
  return (
    <>
    <Channelsubscribers/>
    <Videoviews/>
    <Channelwatchtime/>
    <Videolikes/>
    <Lifestreamviews/>
    <Videoshare/>
    </>
  )
}

export default Youtube