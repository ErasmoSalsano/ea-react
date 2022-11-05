export function ButtonNavTab (props){
    return(
        <button onClick={props.onClick} className={props.className}>
            <div className={props.divClassName}>
                {props.buttonName}
            </div>
            <div className={props.effectClass}></div>
        </button>
    )
}
