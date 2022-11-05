export function MainWrap({ children, extendClass }) {
    return (
        <div
            className={extendClass
                ? 'main-wrap ' + extendClass
                : 'main-wrap'}>
            {children}
        </div>
    )
}

// actual extend classes:

// Pages > Home | Ea Sports | PC | About | Inside Ea >> navTab; tabContent
// Pages > About >> special, principale, pad, bg 