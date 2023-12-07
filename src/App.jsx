
import { Suspense, lazy, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './redux-saga/redux/slices/dataSlice'
import { Card } from './common'
import { CircularProgress, Stack } from '@mui/material'

import {Login} from "./pages"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { APP_URL } from './config'
import { Navbar } from './components'
const Home = lazy(() => import ('./pages/Home'));
function App() {
 
  return (
    <BrowserRouter>
    {location.pathname !== APP_URL.LOGIN &&<Navbar/>}
      <Routes>
        <Route path={APP_URL.HOMEPAGE} element={          
        
          <Suspense fallback={
            <div className='loader'>
              <CircularProgress />
            </div>
          }>
            <Home/>
          </Suspense>
        
        }

        />
        <Route path={APP_URL.LOGIN} element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
