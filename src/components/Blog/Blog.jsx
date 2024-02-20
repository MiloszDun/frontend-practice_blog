import BlogPost from "../BlogPost/BlogPost"

const Blog = ({articles}) => {
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