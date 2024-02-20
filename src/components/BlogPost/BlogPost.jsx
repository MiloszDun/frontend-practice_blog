const BlogPost = ({article}) => {
  return (
    <article className="article">
      <img src={article.image} alt={article.title} className="article-image" />
      <div className="article-body">
        <h3 className="article-title">{article.title}</h3>
        <p className="article-excerpt">{article.excerpt}</p>
        <p className="article-date">{article.date}</p>
      </div>
  </article>
  )
}
export default BlogPost