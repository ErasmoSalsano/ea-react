import {Routes,  Route } from 'react-router-dom'
import {Header} from './Header'
import { Home } from '../pages/Home'


function MainFrame(){
    return(
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>


        </div>
    )
}
export default MainFrame