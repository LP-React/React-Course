import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { MangaApp } from './MangaApp'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <MangaApp />
        </BrowserRouter>
    </StrictMode>,
)
