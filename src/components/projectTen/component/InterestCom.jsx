import React, { useState } from "react";

export default function InterestCom() {
  const [interest, setInterest] = useState("");
  const [interestList, setInterestList] = useState([]);

  const handleList = () => {
    console.log("Line IN", interest)
    setInterestList([...interestList, interest]);
    localStorage.setItem("interestList", JSON.stringify([...interestList, interest]));
    setInterest('');
  }
  return (
    <>
      <div className="interest-container">
        <p>Please Add the interest field you have</p>
        <input type="text" value={interest} onChange={(e) => setInterest(e.target.value)} />
        <button onClick={() => handleList()}>Add</button>
      </div>
      <div>
        <ul>
          {interestList?.map((item, index) => {
            return (<>
              <li key={index}>{item}</li>
            </>)
          })}
        </ul>

      </div>

    </>
  );
}
