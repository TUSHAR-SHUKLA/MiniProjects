import {Routes, Route} from 'react-router-dom'
import { Home, CartList } from '../pages'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='cart' element={<CartList />} />
        </Routes>
    </div>
  )
}
