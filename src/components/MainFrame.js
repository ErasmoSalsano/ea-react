import { Outlet } from 'react-router-dom'
// import {Header} from './Header'


function MainFrame(){
    return(
        <div>
            {/* <Header/> */}
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}
export default MainFrame