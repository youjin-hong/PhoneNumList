export default function InputDetail({ detail, setDetail }) {
  const saveDetail = (e) => {
    setDetail(e.target.value);
  };

  return (
    <>
      <label htmlFor="detail">간단한기록</label>
      <input
        value={detail}
        type="text"
        className="detail"
        placeholder="간단한기록"
        onChange={saveDetail}
      />
    </>
  );
}
