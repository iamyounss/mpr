import { NextPageContext } from 'next';
import { IncomingMessage } from 'http';

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
