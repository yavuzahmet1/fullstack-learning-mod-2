const AddTutorial = () => {
    return (
        <div className="container text-center mt-4">
            <h1 className="display-6 text-danger">Add Your Tutorial</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
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