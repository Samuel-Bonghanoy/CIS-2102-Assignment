import "./Box.css";

function Box({ student }) {
  return (
    <div className="box">
      <p>Name: {student.Name}</p>
      <p>ID Number: {student.idNumber}</p>
      <p>Age: {student.Age}</p>
      <p>Course: {student.Course}</p>
    </div>
  );
}

export default Box;
