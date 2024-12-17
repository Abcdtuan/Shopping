import React from 'react'
import MenShirtComponent from '../../components/MenShirtComponent/MenShirtComponent'

const MenShirtPage = () => {
  return (
    <div style={{ marginTop: '50px', display:'flex', alignItems: 'center', gap: '51px', }}>
        <MenShirtComponent poster_url="https://levents.asia/cdn/shop/files/Blue_LSHBOCOB233UB0102FW24_1.jpg?v=1733740731&width=437" name_card="Striped Boxy Long Sleeve Shirt" price="350.000"></MenShirtComponent>
        <MenShirtComponent poster_url="https://levents.asia/cdn/shop/files/Black_LHOBXCLD132UD0102FW24_1.jpg?v=1732699435&width=437" name_card="Classic Authentic Hoodie Boxy 2.0" price="320.000"></MenShirtComponent>
        <MenShirtComponent poster_url="https://levents.asia/cdn/shop/files/Black_LTSBXCOA229UD0101FW24_1.jpg?v=1729757299&width=437" name_card="Spooky Stars Boxy 2.0 Tee" price="250.000"></MenShirtComponent>
        <MenShirtComponent poster_url="https://levents.asia/cdn/shop/files/DarkBlue_LJABOCOM281UB0502SS24_1.jpg?v=1729691455&width=437" name_card="Striped Boxy Khaki Jacket" price="420.000"></MenShirtComponent>
        
    </div>
  )
}

export default MenShirtPage