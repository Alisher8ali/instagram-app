import React from "react";

//Auth Pages

const Register=React.lazy(()=>import("../apps/auth/register/Register.jsx"));
const Login=React.lazy(()=>import("../apps/auth/login/Login"));

export const AuthPages={
    Register,
    Login
};

//LAYOUTPAGES

const Home=React.lazy(()=>import("../apps/layout/home/Home"));

export const LayoutPages={
    Home
};
