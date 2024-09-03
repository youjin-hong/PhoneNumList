import List from "./List";
import Search from "./Search";

export default function ListCon({ listData, setListOpen, setList }) {
  // console.log(listData);

  return (
    <>
      <section className="list-con">
        <div className="search-con">
          <Search />
        </div>

        <ul className="lists">
          {listData.map((person, index) => (
            <List
              key={index}
              index={index}
              person={person}
              setListOpen={setListOpen}
              setList={setList}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
