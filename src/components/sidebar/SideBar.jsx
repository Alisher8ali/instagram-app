import React from 'react';
import { Components } from '..';
import cls from "../../assets/styles/sidebar/SideBar.module.scss";
import Logo from "../../assets/images/logo/instagram.png"

export const SideBar = () => {
  return (
    <section className={cls.sidebar_wrapper}>
        <div className={cls.sidebar_wrapper_content}>
            <Components.Image src={Logo}/>
        </div>
    </section>
  )
};
