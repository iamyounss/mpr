import { NextPageContext } from 'next';
import { IncomingMessage } from 'http';
import React from 'react';

export interface CookieMessage extends IncomingMessage {
    cookies: { [name: string]: string };
  }
  
  export interface CookiesPageContext extends NextPageContext {
      req: CookieMessage | undefined
  }

export interface DriversData {
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    serviceType: 'driver'
    driverType: 'taxi' | 'vtc'
}

export interface Driver extends DriversData{
    driver: [DriversData]
}

export interface UsersData {
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    serviceType: 'user',
}

export interface BookingData {
    userId: string,
    userCompleteName: string,
    userEmail: string,
    driverId: string,
    driverCompleteName: string,
    driverEmail: string,
    reservationPrice: string | number,
}

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