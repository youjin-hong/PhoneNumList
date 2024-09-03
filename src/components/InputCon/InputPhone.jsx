import { useState } from "react";

export default function InputPhone({ phone, setPhone }) {
  const [error, setError] = useState("");

  const validateName = (phone) => {
    const phoneRegex = /^010-?([0-9]{3,4})-?([0-9]{4})$/;
    if (!phoneRegex.test(phone)) {
      setError("전화번호는 010-0000-0000 형식으로 입력해주세요.");
    } else {
      setError("");
    }
  };

  const savePhone = (e) => {
    const inputPhone = e.target.value;
    setPhone(e.target.value);
    validateName(inputPhone);
  };

  return (
    <>
      <label htmlFor="phone">휴대전화</label>
      <div className="con">
        <input
          value={phone}
          type="text"
          className="phone"
          placeholder="휴대전화"
          onChange={savePhone}
        />
        <p className="error">{error}</p>
      </div>
    </>
  );
}
