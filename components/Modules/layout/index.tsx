import React from 'react';

type Layout = {
    children : React.ReactNode;
}

export const Layout:React.FC<Layout> = ({ children }) => {
    return(
        <>
            {children}
        </>
    )
}