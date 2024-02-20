const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Data sources</h2>
      <label>
        <input type="checkbox" checked /> Music
      </label>
      <label>
        <input type="checkbox" /> Books
      </label>
      <button className="sort-button">Sort by date</button>
    </aside>
  )
}
export default Sidebar