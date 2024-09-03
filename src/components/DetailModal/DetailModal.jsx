export default function DetailModal({ setListOpen, listData }) {
  return (
    <>
      <div className="list-modal">
        <button className="close-btn" onClick={() => setListOpen(false)}>
          닫기
        </button>
        <div className="modal-con">
          <h2 className="list-title">연락처 상세 정보</h2>
          <ul className="lists-list">
            {listData.map((item, index) => (
              <li key={index} className="list-item">
                <p>이름: {item.name}</p>
                <p>휴대전화: {item.phone}</p>
                <p>그룹: {item.selectGroup}</p>
                <p>메모: {item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
