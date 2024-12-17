import React from 'react'
import WomanPantsComponent from '../../components/WomanPantsComponent/WomanPantsComponent'

const WomanPants = () => {
  return (
    <div style={{ marginTop: '50px', display:'flex', alignItems: 'center', gap: '51px'}}>
        <WomanPantsComponent poster_url="https://levents.asia/cdn/shop/files/Lilas_LPAWGCLN115UL0302FW24_1.jpg?v=1729510314&width=437" name_card="Classic Wide-Leg Sweatpants" price="360.000"></WomanPantsComponent>
        <WomanPantsComponent poster_url="https://levents.asia/cdn/shop/files/Tan_LSPTRCLO111UT0401FW240_1.jpg?v=1729512352&width=437" name_card=" Classic Short" price="220.000"></WomanPantsComponent>
        <WomanPantsComponent poster_url="https://levents.asia/cdn/shop/files/DarkGreen_LPASTCON232UG0202SS24_1.jpg?v=1712318357&width=437" name_card=" Cargo SweatPants" price="280.000"></WomanPantsComponent>
        <WomanPantsComponent poster_url="https://levents.asia/cdn/shop/files/Beige_LPASTCON321UBEI01FW22_1.jpg?v=1711700084&width=437" name_card=" Khaki Pants" price="320.000"></WomanPantsComponent>
    </div>
  )
}

export default WomanPants