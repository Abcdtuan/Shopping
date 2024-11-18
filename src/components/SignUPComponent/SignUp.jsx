import React from 'react'
import InputForm from '../InputFormComponent/InputForm'
import { WrapperContainer } from './style'

const SignUp = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height:'90vh' }}>
        <div style={{width: '600px', height: '500px',padding:'20px', borderRadius:'6px ', border:'1px solid black', background: 'fff', }}>
            <WrapperContainer style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <h1 style={{textAlign: 'center'}}>Xin Chào</h1>
                <p style={{fontFamily: 'Futura, sans-serif', fontSize: '15px'}}>Email</p>
                <InputForm placeholder="Email"/>
                <p style={{fontFamily: 'Futura, sans-serif', fontSize: '15px'}}>Mật khẩu</p>
                <InputForm placeholder="Mật Khẩu"/>
                <p style={{fontFamily: 'Futura, sans-serif', fontSize: '15px'}}>Nhập lại mật khẩu</p>
                <InputForm placeholder="Thông tin này cần bắt buộc"/>
                <p style={{fontFamily: 'Futura, sans-serif', fontSize: '15px'}}>Số điện thoại</p>
                <InputForm placeholder="Thông tin này cần bắt buộc"/>
                <button  style={{
                marginTop: '30px',
                width: '100%',
                height: '50px',
                border:'1px solid #ccc ',
                color: '#ffff',
                backgroundColor:'black',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                borderRadius: "6px",
                cursor: "pointer",
                }}  >
                    Đăng ký
                </button>
            </WrapperContainer>
            
        </div>
    </div>
  )
}

export default SignUp