function AddApplication (props) {
return(
    <div className="Page">
        <form >
            <div>
                <input
                name="companyName"
                type="text"
                placeholder="Company Name"
                required
                />
                <input
                name="jobTitle"
                type="text"
                placeholder="Position Applied For"
                />
                <input
                name="dateApplied"
                type="date"
                placeholder="Date Applied"
                />
                <input
                name="interviewDate"
                type="date"
                placeholder="Date of Interview"
                />
                <input
                name="contactName"
                type="text"
                placeholder="Name of Contact"
                />
                <input
                name="notes"
                type="text"
                placeholder="Notes"
                />

                <button>Submit</button>
            </div>

        </form>
    </div>
);
}

export default AddApplication;