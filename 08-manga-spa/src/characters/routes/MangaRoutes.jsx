import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CharacterPage, DdPage, EvPage, OpPage, SearchPage } from "../pages"


export const MangaRoutes = () => {
    return (
        <>
            <Navbar />

            <div className='container'>

                <Routes>
                    <Route path="Oyasumi-PunPun" element={<OpPage />} />
                    <Route path="Dead-Demon-De-De-De-Destruction" element={<DdPage />} />
                    <Route path="Evangelion" element={<EvPage />} />
                    <Route path="Search" element={<SearchPage />} />
                    <Route path="Character/:characterId" element={<CharacterPage />} />

                    <Route path="/" element={<Navigate to="/Oyasumi-PunPun" />} />
                </Routes>
            </div>
        </>
    )
}
