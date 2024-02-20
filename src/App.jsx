import {useEffect, useState} from 'react';
import Sidebar from './components/Sidebar';
import Blog from './components/Blog';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6010/articles/books')
    .then(response => response.json())
    .then(data => setArticles(data.articles))
    .catch(error => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <Blog articles={articles}/>
    </div>
  )
}
export default App