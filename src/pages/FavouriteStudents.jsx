
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function FavouriteStudents() {

    const { favourites, removeFavourite } = useContext(StudentContext);

    return (

        <div className="page">

            <h2>Favourite Students</h2>

            {favourites.length === 0 ? (

                <p className="empty-message">
                    No favourite students added yet
                </p>

            ) : (

                <div className="student-container">

                    {favourites.map((student) => (

                        <div className="student-card" key={student.id}>

                            <div>
                                <h3>{student.name}</h3>
                                <p>Roll No: {student.rollNo}</p>
                            </div>

                            <button
                                className="remove-btn"
                                onClick={() => removeFavourite(student.id)}
                            >
                                Remove
                            </button>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default FavouriteStudents;
