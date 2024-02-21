import BlogPost from "../BlogPost/BlogPost"
import { useContext } from "react"
import { ArticlesContext } from "../../data/ArticlesContext"

const Blog = () => {
  const { articles, isLoading, error } = useContext(ArticlesContext);

  return (
    <main className="content">
      <header className="header">
        <h1>Blog</h1>
      </header>
      
      {isLoading && <p>Loading...</p>}

      {error && <p>Error: {error}. Please try refreshing the page. (Note: Mock API has a 10% chance of generating an error, to test error handling. Just reload the page.)</p>}

      {!isLoading && !error && 
        <section className="articles">
          {articles.map(article => (
            <BlogPost key={article.id} article={article} />
          ))}
        </section>
      }
    </main>
  )
}
export default Blog