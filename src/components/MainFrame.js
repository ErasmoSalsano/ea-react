import { Outlet } from 'react-router-dom'
import { Header } from './header/Header'
import {Footer} from './Footer'


function MainFrame(){
    return(
        <div>
            <Header/>
            <Outlet />
            <Footer />
        </div>
    )
}
export default MainFrame
