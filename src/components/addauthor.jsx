import { useState } from "react";

function AddAuthor({ API, refreshUsers }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        if (!name || !email) {
            alert("Please enter name and email.");
            return;
        }

        await fetch(API.createUser, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
            }),
        });

        setName("");
        setEmail("");

        refreshUsers();

        alert("New author added!");
    }

    return (
        <div className="card shadow-sm p-3">
            <h3 className="h4">Add New Author</h3>

            <form onSubmit={handleSubmit}>
                <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Author name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <input
                    className="form-control mb-2"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <button className="btn btn-dark w-100" type="submit">
                    Add Author
                </button>
            </form>
        </div>
    );
}

export default AddAuthor;