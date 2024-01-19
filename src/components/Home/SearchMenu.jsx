function SearchMenu({ setSearchValue }) {
  return (
    //search untuk menu
    <form>
      <input
        className="w-[500px] bg-[white] border px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white-400"
        placeholder="Search for food..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
}
export default SearchMenu;
