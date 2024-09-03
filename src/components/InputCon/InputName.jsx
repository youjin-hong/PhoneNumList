import { useState } from "react";

export default function InputName({ name, setName }) {
  const [error, setError] = useState("");

  const validateName = (name) => {
    const nameRegex = /^[가-힣]{2,4}$/;
    if (!nameRegex.test(name)) {
      setError("이름은 한글로 두 글자 이상 입력해주세요");
    } else {
      setError("");
    }
  };

  const saveName = (e) => {
    const inputName = e.target.value;
    setName(e.target.value);
    validateName(inputName);
  };

  return (
    <>
      <label htmlFor="name">이름</label>
      <div className="con">
        <input
          value={name}
          type="text"
          className="name"
          placeholder="이름"
          onChange={saveName}
        />
        <p className="error">{error}</p>
      </div>
    </>
  );
}
