export function ArticleCard({ article }) {
    return (
        <a href="sitooriginale.it" className="article-card">
            <img src={article.image} alt={article.imageDesc} />
            <div className="article-text">
                <div><span>{article.category}</span><span className="normal">{article.date}</span></div>
                <h3>{article.title}</h3>
                <p>{article.desc}</p>
            </div>
        </a>
    )
}