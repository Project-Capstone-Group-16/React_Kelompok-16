import React from 'react'
import FirstSection from './sections/first-section/firstSection'
import Unggulan from './unggulan'
import Penitipan from './penitipan'
import TentangKami from './tentangKami/tentangKami'
import HubungiKami from './hubungiKami/HubungiKami'
import Unduhan from './unduhan/unduhan'

const LandingPage = () => {
  return (
    <>
      <FirstSection />
      <Unggulan />
      <Penitipan />
      <TentangKami />
      <section>
        <HubungiKami />
        <Unduhan />
      </section>
    </>
  )
}

export default LandingPage
