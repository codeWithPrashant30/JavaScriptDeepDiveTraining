import style from "./Student.module.css"
// import s from '.././component/Student.module.css'

export const StudentList = ({ students }) => {
  return (
   <>
   {/* <h2 className={s.h2}>Hello H2</h2> */}
    <ul className="bg-gray-200 text-gray-800 p-4 rounded-lg">
      {students.map((student, index) => {
        return (
          <li className="bg-white shadow-md rounded-md p-4 mb-4" key={index}>
            <p className="text-lg font-semibold">ID: {student.id}</p>
            <p className="text-md">Name: {student.name}</p>
            <p className="text-md">Age: {student.age}</p>
          </li>
        );
      })}
    </ul>
    </>
  );
};
