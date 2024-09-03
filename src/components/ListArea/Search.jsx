export default function Search() {
  const handleInput = (e) => {
    if (e.key === "Enter") {
      document.getElementById("search").value = "";
      document.getElementById("search").focus();
    }
  };

  const viewAllList = () => {};

  return (
    <>
      <input
        type="text"
        id="search"
        placeholder="검색어를 입력 후 엔터를 누르세요"
        onKeyUp={handleInput}
      />
      <label htmlFor="view-all-list" onClick={viewAllList}>
        전체리스트보기
      </label>
    </>
  );
}
