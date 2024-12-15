import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight } from './style'
import ImageSignIn from '../../assets/images/logo-login.webp'
import {  Image } from 'antd'
import InputForm from '../InputFormComponent/InputForm'




const SignInComponent = () => {  
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height:'100vh' }}>
        <div style={{width: '600px', height: '650px',padding:'20px', borderRadius:'6px ', border:'1px solid black', background: 'fff', }}>
            <WrapperContainerLeft style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <h1 style={{textAlign: 'center'}}>Xin Chào</h1>
                <Image src={ImageSignIn} preview={false} alt="imagelogo"/>
                <p style={{fontFamily: 'Futura, sans-serif', fontSize: '15px'}}>Email</p>
                <InputForm placeholder="Email"/>
                <p style={{fontFamily: 'Futura, sans-serif', fontSize: '15px'}}>Mật khẩu</p>
                <InputForm placeholder="Mật Khẩu"/>
                <p style={{fontFamily: 'Futura, sans-serif', fontSize: '15px'}}>Quên thông tin tài khoản? Đăng ký</p>

                <button  style={{
                marginTop: '20px',
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
                    Đăng Nhập
                </button>
            </WrapperContainerLeft>
            <WrapperContainerRight></WrapperContainerRight>
        </div>
    </div>
  )
}

export default SignInComponent