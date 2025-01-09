import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TutorialList = ({ tutorials }) => {
    // const tutorials = [
    //     {
    //         id: 1,
    //         title: "JS",
    //         description: "JS is a programming language",
    //     },
    //     {
    //         id: 2,
    //         title: "React",
    //         description: "JS library for UI design",
    //     },
    // ];

    const deleteTutorials = (id) => {
        console.log(id)
    }

    return (
        <div className="container mt-4">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col" className="text-center">
                            Edit
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tutorials?.map(item => {
                        const { id, title, description } = item
                        return (
                            <tr key={id}>
                                <th>{id}</th>
                                <td>{title}</td>
                                <td>{description}</td>
                                <td className="text-center text-nowrap">
                                    <FaEdit size={20} type="button" className="me-2 text-warning" />
                                    <AiFillDelete size={22} type="button" className="text-danger "
                                        onClick={() => deleteTutorials(id)}
                                    />
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    );
};

export default TutorialList;