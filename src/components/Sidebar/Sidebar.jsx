import { useState } from "react";

const Sidebar = () => {

  const [isMusicChecked, setIsMusicChecked] = useState(true);
  const [isBooksChecked, setIsBooksChecked] = useState(true);

  // Event handlers to toggle the state
  const toggleMusic = () => {
    setIsMusicChecked(!isMusicChecked);
  };

  const toggleBooks = () => {
    setIsBooksChecked(!isBooksChecked);
  };

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