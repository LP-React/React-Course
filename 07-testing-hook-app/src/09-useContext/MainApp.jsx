import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { Navbar } from './Navbar'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
    return (
        <UserProvider>
            <h1>MainAp</h1>
            <hr />

            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                {/* <Route path="/*" element={<LoginPage />} /> */}
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </UserProvider>
    )
}
