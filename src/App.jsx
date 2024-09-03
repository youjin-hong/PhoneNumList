import { useState } from "react";
import "./App.css";
import "./assets/myreset.css";
import GroupModal from "./components/GroupModal/GroupModal";
import InputCon from "./components/InputCon/InputCon";
import ListCon from "./components/ListArea/ListCon";
import DetailModal from "./components/DetailModal/DetailModal";

function App() {
  // const listData = [
  //   {
  //     name: "짱구",
  //     phone: "010-6666-8888",
  //     group: "가족",
  //   },
  //   {
  //     name: "바나나",
  //     phone: "010-1234-5678",
  //     group: "친구",
  //   },
  //   {
  //     name: "맹구",
  //     phone: "010-9876-5432",
  //     group: "학교",
  //   },
  //   {
  //     name: "제로초",
  //     phone: "010-5432-1234",
  //     group: "회사",
  //   },
  // ];

  // let groupData = [
  //   { value: "family", label: "가족" },
  //   { value: "friend", label: "친구" },
  //   { value: "school", label: "학교" },
  //   { value: "company", label: "회사" },
  // ];

  const groupData = JSON.parse(localStorage.getItem("groupItem")) || [];
  const listData = JSON.parse(localStorage.getItem("listItem")) || [];

  const [open, setOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);

  const [group, setGroup] = useState(groupData);
  const [list, setList] = useState(listData);

  const newList = (newList) => {
    setList((prevList) => [newList, ...prevList]);
  };

  return (
    <>
      <h1 className="title">연락처 리스트</h1>
      <main>
        <InputCon
          setOpen={setOpen}
          group={group}
          setGroup={setGroup}
          groupData={groupData}
          newList={newList}
        />
        <ListCon
          listData={listData}
          setList={setList}
          setListOpen={setListOpen}
        />
        {open === true ? (
          <GroupModal setOpen={setOpen} groupData={group} setGroup={setGroup} />
        ) : null}
        {listOpen === true ? (
          <DetailModal
            setListOpen={setListOpen}
            listData={list}
            setList={setList}
          />
        ) : null}
      </main>
    </>
  );
}

export default App;
