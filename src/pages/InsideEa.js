import { Picture } from "../components/Picture";
import { NavTab } from "../components/NavTab/NavTab";
import { Title } from "../components/Title";
import './../style/pages/informazioni/insideEA.scss'

export function InsideEa() {
    return (
        <div className="inside">
            <div className="main-wrap-hero">
                <div className="main-wrap-hero-content">
                    <div className="main-wrap-hero-text">
                        <Title className="title">
                            <h1>Inside EA</h1>
                        </Title>
                    </div>
                </div>
                <Picture
                    className={'prova'}
                    imgClass={'img-text'}
                    request={'insideEa'}
                    />
            </div>
            <NavTab
                gestion='insideEa'
                type={'ArticleGrid'}
                value={true}
                />
            <div className="void"></div>
        </div>
    )
}