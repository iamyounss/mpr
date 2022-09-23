import React from 'react';
import Header from './Header';

export function Layout ({ children }) {

    return (
        <>
                <Header />
                <main className="pt-14 md:pl-64 h-screen bg-slate-100">
                    {children}
                </main>
        </>
    )
}