import { useContext } from "react"
import { ArticlesContext } from "../../data/ArticlesContext"

const Sidebar = () => {

  const {isMusicChecked, isBooksChecked, toggleBooks, toggleMusic, sortOrder, toggleSortOrder} = useContext(ArticlesContext);

  return (
    <aside className="sidebar">
      <h2>Data sources</h2>
      <label>
        <input type="checkbox" checked={isMusicChecked} onClick={toggleMusic} /> Music
      </label>
      <label>
        <input type="checkbox" checked={isBooksChecked} onClick={toggleBooks} /> Books
      </label>
      <button className="sort-button" onClick={toggleSortOrder}>
        Sort by {sortOrder === 'newest' ? 'Oldest' : 'Newest'}
      </button>
    </aside>
  )
}
export default Sidebar