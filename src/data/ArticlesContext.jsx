import React, { createContext, useState, useEffect } from 'react';

export const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [isMusicChecked, setIsMusicChecked] = useState(true);
  const [isBooksChecked, setIsBooksChecked] = useState(true);
  const [isSortedByDate, setIsSortedByDate] = useState(false);

  // Function to toggle music checkbox
  const toggleMusic = () => {
    setIsMusicChecked(!isMusicChecked);
  };

  // Function to toggle books checkbox
  const toggleBooks = () => {
    setIsBooksChecked(!isBooksChecked);
  };

  // Function to toggle sorting by date
  const toggleSortByDate = () => {
    setIsSortedByDate(!isSortedByDate);
  };

  // Function to fetch posts data
  useEffect(() => {
    const fetchArticles = async () => {
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
          console.log(error);
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
          console.log(error)
        }
      }

      setArticles([...musicArticles, ...booksArticles]);
    };

    fetchArticles();
  }, [isMusicChecked, isBooksChecked, isSortedByDate])

  return (
    <ArticlesContext.Provider value={{
      articles,
      isMusicChecked,
      toggleMusic,
      isBooksChecked,
      toggleBooks,
      isSortedByDate,
      toggleSortByDate
    }}>
      {children}
    </ArticlesContext.Provider>
  );
};
