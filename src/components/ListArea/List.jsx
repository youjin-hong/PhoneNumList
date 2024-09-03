export default function List({ index, person, setListOpen, setList }) {
  const removeItem = (listIndex) => {
    setList((prev) => {
      const newList = prev.filter((_, index) => index !== listIndex);
      localStorage.setItem("listItem", JSON.stringify(newList));
      return newList;
    });
  };
  return (
    <>
      <li key={index} className="list">
        <p className="name">{person.name}</p>
        <p className="phone">{person.phone}</p>
        <p className="group">{person.group}</p>

        <div className="button-con">
          <button className="detail" onClick={() => setListOpen(true)}>
            세부사항
          </button>
          <button className="delete" onClick={() => removeItem(index)}>
            삭제
          </button>
        </div>
      </li>
    </>
  );
}
