import axios from "axios";
import { useState } from "react";

const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

const AddTutorial = ({ getTutorials }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, description);
        postTutorial({ title, description })
    }
    const postTutorial = async (newTutorial) => {
        try {
            await axios.post(URL, newTutorial)
        } catch (error) {
            console.log(error)
        } finally {
            getTutorials()
        }
    }
    return (
        <div className="container text-center mt-4">
            <h1 className="display-6 text-danger">Add Your Tutorial</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
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
                        onChange={(e) => setDescription(e.target.value)}
                        id="desc"
                        placeholder="Enter your Description"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-danger mb-4">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddTutorial;