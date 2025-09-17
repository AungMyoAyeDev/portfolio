"use client"
import React, { useEffect, useState } from 'react'

const SplashScreen = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setLoading(false)
            }, 800)
        }
        if (document.readyState === "complete") {
            handleLoad()
        } else {
            window.addEventListener("load", handleLoad)
        }
        return () => {
            window.removeEventListener("load", handleLoad)
        }
    }, [])


    if (!loading) return null
    return (
        <div className='fixed top-0 w-full lef-0 z-50 h-screen flex justify-center items-center'>
            <div className='w-14 h-14 rounded-full border-t-4 border-white animate-spin'>

            </div>  </div>
    )
}

export default SplashScreen