import { Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth"
import { MangaRoutes } from "../characters/routes/MangaRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="Login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <MangaRoutes />
                    </PrivateRoute>
                } />

            </Routes>
        </>
    )
}
