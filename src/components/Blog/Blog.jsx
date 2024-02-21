import BlogPost from "../BlogPost/BlogPost"
import { useContext } from "react"
import { ArticlesContext } from "../../data/ArticlesContext"

const Blog = () => {
  const { articles } = useContext(ArticlesContext);
  console.log('This is articles:')
  console.log(articles)

  return (
    <main className="content">
      <header className="header">
        <h1>Blog</h1>
      </header>
      <section className="articles">
        {articles.map(article => (
          <BlogPost key={article.id} article={article} />
        ))}
      </section>
    </main>
  )
}
export default Blog