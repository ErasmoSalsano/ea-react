export function MainWrap({children, extendClass}){
    return <div className={'main-wrap ' + extendClass}>{children}</div>
}

// actual extend classes:

// Pages > Home | Ea Sports | PC | About | Inside Ea >> navTab; tabContent
// Pages > About >> special, principale, pad, bg 