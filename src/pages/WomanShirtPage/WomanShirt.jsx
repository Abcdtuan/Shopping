import React from 'react'
import WomanShirtComponent from '../../components/WomanShirtComponent/WomanShirtComponent'


const WomanShirtPage = () => {
  return (
    <div style={{ marginTop: '50px', display:'flex', alignItems: 'center', gap: '51px', }}>
      <WomanShirtComponent poster_url="https://levents.asia/cdn/shop/files/Tan_LHZBXCLE101UT0402FW24_1.jpg?v=1729511524&width=437" name_card="Classic Zipper Hoodie Boxy 2.0" price="360.000"></WomanShirtComponent>
      <WomanShirtComponent poster_url="https://levents.asia/cdn/shop/files/Tan_LTSSOCOA420UT0400FW24_1.jpg?v=1729691307&width=713" name_card="My Garden Semi-Oversize Tee" price="220.000"></WomanShirtComponent>
      <WomanShirtComponent poster_url="https://levents.asia/cdn/shop/files/LightBlue_LTSRBCOA210UB0201FW24_1.jpg?v=1726572999&width=713" name_card="LVS Authentic Raglan Boxy 2.0 Tee" price="250.000"></WomanShirtComponent>
      <WomanShirtComponent poster_url="https://levents.asia/cdn/shop/files/Cream_LSHOVCOB362UC0102SS24_1.jpg?v=1721379837&width=713" name_card="Baseball Jersey" price="350.000"></WomanShirtComponent> 
    </div>
  )
}

export default WomanShirtPage