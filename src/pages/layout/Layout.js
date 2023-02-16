import React from 'react'
import{Route, Routes as Switch} from"react-router-dom"
import { Components } from '../../components'
import { Layout } from '../../services/path'
import { LayoutPages } from '../Lazy'

export const Layouts = () => {
  return (
    <React.Fragment>
        <section className={"layout_row"}>
            <div className='layout_sidebar'>
                <Components.SideBar/>
            </div>
            <div className='layout_routes'>
                <Components.SideBar/>
            <Switch>
                <Route path={Layout.home} element={<LayoutPages.Home/>}/>
            </Switch>
            </div>
        </section>
    </React.Fragment>
  )
}
