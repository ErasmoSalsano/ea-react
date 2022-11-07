export function MainContentWrap({ children, p, pt, extendClass }) {
    return (
        <div
            className={extendClass
                ? 'main-content-wrap ' + extendClass
                : 'main-content-wrap'}
            style={ p 
                ? { padding: 0 }
                :  pt 
                ? { paddingTop: 60 }
                : ''}>
            {children}
        </div>
    )
}
