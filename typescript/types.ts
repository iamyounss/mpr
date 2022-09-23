import React from "react";

/**
 * 
 * Components
 */


export type AppLayout = {
    children : React.ReactNode;
}

export type RegisterWithEmailAndPassword = {
    email: string,
    password: string,
    confirmPassword: string,
}

export type LoginWithEmailAndPassword = {
    email: string,
    password: string,
  }