import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers'
import { AuthProvider } from './context/AuthContext'

import './index.css'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
)
