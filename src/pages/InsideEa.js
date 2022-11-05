import { Fragment } from "react";
import { NavTab } from "../components/NavTab/NavTab";
import { Title } from "../components/Title";
import './../style/pages/informazioni/insideEA.scss'

export function InsideEa(){
    return(
        <div className="inside">
            <div className="main-wrap-hero">
                <div className="main-wrap-hero-content">
                    <div className="main-wrap-hero-text">
                        <Title className="title">
                            <h1>Inside EA</h1>
                        </Title>
                    </div>
                </div>
                <picture>
                    <source media="(max-width: 320px)" srcSet="/assets/images/hero/insideEA/eacom-section-header-brand-xl.jpg.adapt.320w.jpg"/>
                    <source media="(max-width: 767px)" srcSet="/assets/images/hero/insideEA/eacom-section-header-brand-xl.jpg.adapt.768w.jpg"/>
                    <source media="(max-width: 1023px)" srcSet="/assets/images/hero/insideEA/eacom-section-header-brand-xl.jpg.adapt.1024w.jpg"/>
                    <source media="(max-width: 1455px)" srcSet="/assets/images/hero/insideEA/eacom-section-header-brand-xl.jpg.adapt.1456w.jpg"/>
                    <source media="(min-width: 1456px)" srcSet="/assets/images/hero/insideEA/eacom-section-header-brand-xl.jpg.adapt.1920w.jpg"/>
                    <img className="img-text" src="/assets/images/hero/insideEA/eacom-section-header-brand-xl.jpg.adapt.320w.jpg" alt=""/>
                </picture>
            </div>
            {<NavTab gestion='insideEa' value={true} btt={'B'}/>}
            <div class="void"></div>
        </div>
    )
}