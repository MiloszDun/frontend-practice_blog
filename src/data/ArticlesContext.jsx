import React, { createContext, useState, useEffect } from 'react';

export const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [sortedArticles, setSortedArticles] = useState([]);
  const [isMusicChecked, setIsMusicChecked] = useState(true);
  const [isBooksChecked, setIsBooksChecked] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest' or 'oldest'

  const toggleMusic = (e) => {
    setIsMusicChecked(!isMusicChecked);
  };

  const toggleBooks = (e) => {
    setIsBooksChecked(!isBooksChecked);
  };

  const toggleSortOrder = () => {
    setSortOrder(prevSortOrder => (prevSortOrder === 'newest' ? 'oldest' : 'newest'));
  };

  // Fetching posts data
  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      setError('');
      let musicArticles = [];
      let booksArticles = [];

      if (isMusicChecked) {
        try {
          const response = await fetch('http://localhost:6010/articles/music');
          if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`)
          }
          const data = await response.json();
          musicArticles = data.articles;
        } catch(error) {
          setError(error.message)
        }
      }
      if (isBooksChecked) {
        try {
          const response = await fetch('http://localhost:6010/articles/books');
          if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`)
          }
          const data = await response.json();
          booksArticles = data.articles;
        } catch (error) {
          setError(error.message)
        }
      }

      setArticles([...musicArticles, ...booksArticles]);
      setIsLoading(false)
    };

    fetchArticles();
  }, [isMusicChecked, isBooksChecked])

  // Sorting posts by date
  useEffect(() => {
    const sortArticles = () => {
      return [...articles].sort((a,b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
      });
    };
    setSortedArticles(sortArticles(articles));
  }, [articles, sortOrder])

  return (
    <ArticlesContext.Provider value={{
      sortedArticles,
      isMusicChecked,
      toggleMusic,
      isBooksChecked,
      toggleBooks,
      error,
      isLoading,
      sortOrder,
      toggleSortOrder
    }}>
      {children}
    </ArticlesContext.Provider>
  );
};
