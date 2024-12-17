import React from 'react'
import MenPantsComponent from '../../components/MenPantsComponent/MenPantsComponent'

const MenPantsPage = () => {
  return (
    <div style={{ marginTop: '50px', display:'flex', alignItems: 'center', gap: '51px' }}>
        <MenPantsComponent poster_url="https://levents.asia/cdn/shop/files/BlendedWhite_LJELSCOP212UBW428FW24_1.jpg?v=1727950573&width=437" name_card="Loose Fit Baggy Jeans" price="620.000"></MenPantsComponent>
        <MenPantsComponent poster_url="https://levents.asia/cdn/shop/files/Indigo_LJESTCLP147UD0102FW23_1.jpg?v=1715791800&width=437" name_card="Classic Straight Jeans" price="320.000"></MenPantsComponent>
        <MenPantsComponent poster_url="https://levents.asia/cdn/shop/files/Blue_LJEBGCLP155UB0102FW23_1.jpg?v=1711443161&width=437" name_card="Classic Straight Jeans" price="300.000"></MenPantsComponent>
        <MenPantsComponent poster_url="https://levents.asia/cdn/shop/files/Black_LPASTCON257UD0102SS24_1.jpg?v=1721636869&width=437" name_card="2tone Track Pants" price="350.000"></MenPantsComponent>
    </div>
  )
}

export default MenPantsPage