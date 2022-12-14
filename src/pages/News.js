import { ArticlesGrid } from "../components/ArticlesGrid";
import { Footer } from "../components/Footer";
import { Header } from "../components/header/Header";
import { Picture } from "../components/Picture";
import { Title } from "../components/Title";
import { articleCards } from "../data/DataArticle";
import "./../style/pages/informazioni/news.scss";

export function News() {
  return (
    <>
      <Header />
      <div className="news">
        <div className="main-wrap-hero">
          <div className="main-wrap-hero-content">
            <div className="main-wrap-hero-text">
              <Title className="title">
                <h1>Ultime notizie</h1>
              </Title>
            </div>
            <Picture imgClass={"img-text"} request={"news"} />
          </div>
        </div>
        <ArticlesGrid
          request={"all"}
          amount={18}
          argument={articleCards}
          classA
          button={'B'}
        />
        <div className="void"></div>
      </div>
      <Footer />
    </>
  );
}