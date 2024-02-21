import { useEffect, useState, useContext} from 'react';
import { ArticlesProvider } from './data/ArticlesContext';
import Sidebar from './components/Sidebar';
import Blog from './components/Blog';

const App = () => {

  return (
    <ArticlesProvider>
      <div className="app">
        <Sidebar />
        <Blog />
      </div>
    </ArticlesProvider>
  )
}
export default App