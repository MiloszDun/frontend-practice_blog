import { useContext } from "react"
import { ArticlesContext } from "../../data/ArticlesContext"

const Sidebar = () => {

  const {isMusicChecked, isBooksChecked, toggleBooks, toggleMusic} = useContext(ArticlesContext);

  return (
    <aside className="sidebar">
      <h2>Data sources</h2>
      <label>
        <input type="checkbox" checked={isMusicChecked} onClick={toggleMusic} /> Music
      </label>
      <label>
        <input type="checkbox" checked={isBooksChecked} onClick={toggleBooks} /> Books
      </label>
      <button className="sort-button">Sort by date</button>
    </aside>
  )
}
export default Sidebar