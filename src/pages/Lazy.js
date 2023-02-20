import React from "react";


//LAYOUTPAGES

const Hooome = React.lazy(() => import('../apps/layout/home/Home'));



export const LayoutPages = {
    Hooome
};

//Auth Pages

const Register = React.lazy(() => import("../apps/auth/register/Register"));
const Login = React.lazy(() => import("../apps/auth/login/Login"));

export const AuthPages={
    Register,
    Login,
    
};


