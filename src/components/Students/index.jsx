import { useState } from "react";
import CardStudents from "../CardStudents";
const Students = ({ isRoting, students }) => {
  const [randon, setRandon] = useState(Math.floor(Math.random() * 12));
  const [cont, setCont] = useState(0);
  const [randonStud, setRandonStud] = useState([]);
  const randons = () => {
    setRandon(Math.floor(Math.random() * students.length));
    if (
      randonStud.every((student) => student.house !== students[randon].house)
    ) {
      setRandonStud([...randonStud, students[randon]]);
      randonStud.length = 3;
      setCont(cont + 1);
    }
  };
  if (cont <= 2) {
    randons();
  }
  return (
    <>
      <h1>BRUXOS</h1>
      <div className="containerCards">
        {randonStud.map((student, ind) => (
          <ul
            className={
              student.house === "Gryffindor"
                ? "cardsGrif"
                : student.house === "Slytherin"
                ? "cardSli"
                : "cardHuf"
            }
            key={ind}
          >
            <CardStudents
              name={student.name}
              patronus={student.patronus}
              house={student.house}
              species={student.species}
              image={student.image}
            />
          </ul>
        ))}
      </div>
      <button className="Btns" onClick={isRoting}>
        Tentar de novo ?
      </button>
    </>
  );
};
export default Students;
