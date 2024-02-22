"use client"
import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext<any>({})

export const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useState('autumn')
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        const storedTheme = localStorage?.getItem('theme') || 'autumn'
        setTheme(storedTheme)
    }, [])

    const handleOnChangeTheme = (value: string) => {
        localStorage.setItem('theme', value)
        setTheme(value)
    }

    if (!isMounted) {
        return <div>Loading...</div>
    }

    return (
        <ThemeContext.Provider value={{ theme, handleOnChangeTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}