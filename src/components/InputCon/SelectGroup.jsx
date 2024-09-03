export default function SelectGroup({
  selectGroup,
  setSelectGroup,
  setOpen,
  group,
}) {
  const saveGroup = (e) => {
    setSelectGroup(e.target.value);
  };

  return (
    <>
      <label htmlFor="group">그룹</label>
      <div className="group-con">
        <select
          name="group"
          className="group"
          value={selectGroup}
          onChange={saveGroup}
        >
          {group.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <button className="add-group" onClick={() => setOpen(true)}>
          조직추가
        </button>
      </div>
    </>
  );
}
