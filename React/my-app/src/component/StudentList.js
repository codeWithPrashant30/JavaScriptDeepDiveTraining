import style from "./Student.module.css"

export const StudentList = ({ students }) => {
  return (
    <ul className={style.list} style={{listStyle:"none"}}>
      {students.map((student, index) => {
        return (
          <li style={{"border":"1px solid black"}} key={index}>
            id: {student.id} <br />
            name: {student.name} <br />
            age: {student.age}
          </li>
        );
      })}
    </ul>
  );
};
