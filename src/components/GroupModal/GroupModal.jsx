import { useState } from "react";

export default function GroupModal({ setOpen, groupData, setGroup }) {
  const [inputText, setInputText] = useState("");

  const removeItem = (groupIndex) => {
    setGroup((prev) => {
      const newGroup = prev.filter((_, index) => index !== groupIndex);
      localStorage.setItem("groupItem", JSON.stringify(newGroup));
      return newGroup;
    });
  };

  const addItem = () => {
    if (!inputText) return;

    const newGroup = { value: inputText.toLowerCase(), label: inputText };

    setGroup((prev) => {
      const newList = [newGroup, ...prev];
      localStorage.setItem("groupItem", JSON.stringify(newList));
      return newList;
    });

    setInputText("");
  };

  const addGroup = (e) => {
    if (e.key === "Enter") {
      addItem();
      setInputText("");
    }
  };
  return (
    <>
      <div className="group-modal">
        <button className="close-btn" onClick={() => setOpen(false)}>
          닫기
        </button>
        <div className="modal-con">
          <h2 className="group-title">그룹 관리</h2>
          <ul className="group-list">
            {groupData.map((item, index) => (
              <li key={index} className="group-name">
                <p>{item.label}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <input
            value={inputText}
            type="text"
            id="new-group"
            placeholder="새 그룹 이름"
            onChange={(e) => setInputText(e.target.value)}
            onKeyUp={addGroup}
          />
          <label htmlFor="new-group" id="group-label" onClick={addItem}>
            추가
          </label>
        </div>
      </div>
    </>
  );
}
