import React from 'react';
import { Components } from '..';
import cls from "../../assets/styles/sidebar/SideBar.module.scss";
import Logo from "../../assets/images/logo/instagram.png"
import { SidebarList } from '../../utils/List';
import {  NavLink } from 'react-router-dom';

export const SideBar = () => {
  const bottomList=SidebarList[5]
  return (
    <section className={cls.sidebar_wrapper}>
        <div className={cls.sidebar_wrapper_content}>
            <Components.Image src={Logo}/>
            <section className={cls.sidebar_wrapper_content_list}>
               <ul>
                {
                  SidebarList.slice(0,5).map(item=>(
                    <li key={item.id}>
                      <NavLink>
                        <item.icon/>
                          {item.caption}
                      </NavLink>
                    </li>
                  ))
                }
               </ul>
               <ul>
                <li>
                  <NavLink>
                  <bottomList.icon/>
                  {bottomList.caption}
                  </NavLink>
                </li>
               </ul>
            </section>
        </div>
    </section>
  )
};
