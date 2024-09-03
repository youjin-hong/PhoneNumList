import { useState } from "react";
import InputDetail from "./InputDetail";
import InputName from "./InputName";
import InputPhone from "./InputPhone";
import SelectGroup from "./SelectGroup";

export default function InputCon({ setOpen, group, newList }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectGroup, setSelectGroup] = useState("친구");
  const [detail, setDetail] = useState("");

  const saveList = () => {
    if (!name || !phone) {
      alert("정보를 모두 입력해주세요");
      return;
    }

    const addNewList = { name, phone, selectGroup, detail };

    const existData = JSON.parse(localStorage.getItem("listItem")) || [];
    const updateList = [addNewList, ...existData];

    localStorage.setItem("listItem", JSON.stringify(updateList));

    newList(addNewList);

    setName("");
    setPhone("");
    setDetail("");
  };

  return (
    <>
      <ul className="input-con">
        <li className="input">
          <InputName name={name} setName={setName} />
        </li>
        <li className="input">
          <InputPhone phone={phone} setPhone={setPhone} />
        </li>
        <li className="input">
          <SelectGroup
            selectGroup={selectGroup}
            setSelectGroup={setSelectGroup}
            setOpen={setOpen}
            group={group}
          />
        </li>
        <li className="input">
          <InputDetail detail={detail} setDetail={setDetail} />
        </li>
        <button className="save-btn" onClick={saveList}>
          저장
        </button>
      </ul>
    </>
  );
}
