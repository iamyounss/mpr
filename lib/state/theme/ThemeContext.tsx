import React from 'react';
import { useTheme } from 'next-themes';
import { HiSun, HiMoon } from 'react-icons/hi'

// toggle responsible for changing the theme
export const Theme = () => {
    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;

    if(currentTheme === 'dark' ) {
        return (
            <button
                className="rounded-full shadow-lg shadow-slate-200 dark:bg-slate-500 text-black py-1 px-2"
                onClick={() => setTheme('light')}
            >
               <HiSun style={{color: 'white'}} />
            </button>
        )
    }
     
    return (
        <button
            className="rounded-full shadow-lg shadow-slate-200 dark:bg-slate-500 text-black py-1 px-2"
            onClick={() => setTheme('dark')}
        >
            <HiMoon style={{color: 'white'}} />
        </button>
    )
    
};