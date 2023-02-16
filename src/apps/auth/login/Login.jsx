import React from 'react'
import { useForm } from 'react-hook-form';
import { Components } from '../../../components';
import cls from "../../../assets/styles/login/Login.module.scss"
import logo from "../../../assets/images/logo/instagram.png"

const Login = () => {
    const{
        register,
        handleSubmit,
        formState:{errors,isValid},
        setError
    }=useForm();

    const onSubmit=(data)=>{

    }

  return (
    <div>
      <Components.Container>
        <section className={cls.login_page}>
          <div className={cls.login_page_card}>
          <Components.Image src={logo}/>
          </div>
        </section>
      </Components.Container>
    </div>
  )
}

export default Login
