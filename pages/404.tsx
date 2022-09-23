import React from 'react';
import { ErrorPage } from '../components/ErrorPage';

export default function Error404(): JSX.Element{
    /**
     * client side only component, 
     * dont need server side rendering
     * so just need SSG
     * 
     */
    return <ErrorPage />
}