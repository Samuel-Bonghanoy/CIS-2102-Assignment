import Box from "./Box";
import "./BoxList.css";

function BoxList({ studentList, searchedId }) {
  const res = studentList.filter(
    (stud) => stud.idNumber === Number(searchedId)
  );

  return (
    <div className="list">
      {res[0] ? (
        <Box student={res[0]} />
      ) : (
        studentList.map((stud, i) => <Box student={stud} key={i} />)
      )}
    </div>
  );
}

export default BoxList;
