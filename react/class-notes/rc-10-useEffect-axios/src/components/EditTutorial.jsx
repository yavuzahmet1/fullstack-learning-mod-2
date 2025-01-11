import { useState, useEffect } from "react";
import axios from "axios";
const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
const EditTutorial = ({ editData, getTutorials }) => {

    const [title, setTitle] = useState(editData.title);
    const [description, setDescription] = useState(editData.description);

    console.log("edit data", editData)

    const handleSubmit = (e) => {
        e.preventDefault();
        editTutorials({ title, description })

    }
    const editTutorials = async (tutorial) => {
        try {
            await axios.put(`${URL}${editData.id}/`, tutorial)
        } catch (error) {
            console.log(error)
        } finally {
            getTutorials()
        }
    }

    useEffect(() => {
        setTitle(editData.title);
        setDescription(editData.description);
    }, [editData])

    return (
        <>
            {/* Button trigger modal */}
            {/* <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
            >
                Launch static backdrop modal
            </button> */}
            {/* Modal */}
            <div
                className="modal fade"
                id="editModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                Edit Tutorial
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">            <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    id="title"
                                    placeholder="Enter your title"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    id="desc"
                                    placeholder="Enter your Description"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-danger mb-4"
                                data-bs-dismiss="modal">
                                Save Change
                            </button>
                        </form></div>

                    </div>
                </div>
            </div>
        </>


    )
}

export default EditTutorial