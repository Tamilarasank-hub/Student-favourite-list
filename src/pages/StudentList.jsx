
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentList() {

    const { favourites, addFavourite } = useContext(StudentContext);

    const students = [
        {
            id: 1,
            name: "Bharath",
            rollNo: "101"
        },
        {
            id: 2,
            name: "Praveen",
            rollNo: "102"
        },
        {
            id: 3,
            name: "Kumar",
            rollNo: "103"
        },
        {
            id: 4,
            name: "Ramya",
            rollNo: "104"
        },
        {
            id: 5,
            name: "Monica",
            rollNo: "105"
        }
    ];

    return (

        <div className="page">

            <h2>List of Students</h2>

            <div className="student-container">

                {students.map((student) => {

                    const isFavourite = favourites.some(
                        (item) => item.id === student.id
                    );

                    return (

                        <div className="student-card" key={student.id}>

                            <div>
                                <h3>{student.name}</h3>
                                <p>Roll No: {student.rollNo}</p>
                            </div>

                            <button
                                className="add-btn"
                                onClick={() => addFavourite(student)}
                                disabled={isFavourite}
                            >
                                {isFavourite ? "Added" : "Add to Favourite"}
                            </button>

                        </div>

                    );

                })}

            </div>

        </div>
    );
}

export default StudentList;
