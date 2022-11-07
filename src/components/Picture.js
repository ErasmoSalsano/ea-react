export function Picture({ className, imgClass, request }) {
    return (
        <picture
            className={className
                ? className
                : null}>

            {picturesData[request].map((item, index) =>
                <source
                    media={item.mq}
                    srcSet={item.content}
                    key={index} />)
            }

            <img className={imgClass} src={picturesData[request].img_ + request} />
        </picture>
    )
}