import { useEffect } from "react"
import { Link } from "react-router-dom"

export function ArticleCard({ article }) {

    useEffect(() => {}, [article])
    return (
        <Link to={article.link !== ''?article.link:'/maintenance'} className="article-card">
            <img src={article.image} alt={article.imageDesc} />
            <div className="article-text">
                {article.category && article.date && <div><span>{article.category}</span><span className="normal">{article.date}</span></div>}
                <h3>{article.title}</h3>
                {article.desc && <p>{article.desc}</p>}
            </div>
        </Link>
    )
}