import { useEffect, useState } from "react";

function CreateDish({ API, refreshRecipes }) {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    const [users, setUsers] = useState([]);
    const [categories, setCategories] = useState([]);

    const [authorId, setAuthorId] = useState("");
    const [categoryId, setCategoryId] = useState("");

    useEffect(() => {
        fetch(API.users)
            .then((response) => response.json())
            .then((data) => setUsers(data));

        fetch(API.categories)
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }, [API]);

    async function handleSubmit(event) {
        event.preventDefault();

        //handle error/edge-case protections
        if (!name || !ingredients || !authorId || !categoryId || !instructions) {
            alert("Please complete all fields.");
            return;
        }

        const response = await fetch(API.createRecipe, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                ingredients,
                author_id: Number(authorId),
                category_id: Number(categoryId),
                instructions,
            }),
        });

        //handle error/edge-case protections
        if (!response.ok) {
            alert("Failed to add dish.");
            return;
        }

        refreshRecipes();

        setName("");
        setIngredients("");
        setAuthorId("");
        setCategoryId("");
        setInstructions("");

        alert("New dish added!");
    }

    return (
        <div className="card shadow-sm p-4 h-100">
            <h2 className="mb-3">Create New Dish</h2>

            <form onSubmit={handleSubmit}>

                {/* Dish Details */}
                <div className="row g-3 mb-3">

                    <div className="col-md-4">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Enter dish name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>

                    <div className="col-md-4">
                        <select
                            className="form-select"
                            value={authorId}
                            onChange={(event) => setAuthorId(event.target.value)}
                        >
                            <option value="">Select author</option>

                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-4">
                        <select
                            className="form-select"
                            value={categoryId}
                            onChange={(event) => setCategoryId(event.target.value)}
                        >
                            <option value="">Select category</option>

                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>

                {/* Ingredients */}
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Enter ingredients"
                        value={ingredients}
                        onChange={(event) => setIngredients(event.target.value)}
                    ></textarea>
                </div>

                {/* Instructions */}
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        rows="8"
                        placeholder="1. Heat the wok. 2. Add garlic. 3. Add vegetables."
                        value={instructions}
                        onChange={(event) => setInstructions(event.target.value)}
                    ></textarea>
                </div>

                <button className="btn btn-dark" type="submit">
                    Create New Dish
                </button>

            </form>
        </div>
    );
}

export default CreateDish;
