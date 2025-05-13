import { Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth"
import { MangaRoutes } from "../characters/routes/MangaRoutes"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="Login" element={<LoginPage />} />
                <Route path="/*" element={<MangaRoutes />} />
            </Routes>
        </>
    )
}
