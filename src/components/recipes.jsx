import { useEffect, useState } from "react";

function Recipes({ API }) {
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const recipesPerPage = 4;

    useEffect(() => {
        fetch(API.recipes)
            .then((response) => response.json())
            .then((data) => setRecipes(data));

        fetch(API.categories)
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }, [API]);

    if (recipes.length === 0) {
        return (
            <section className="container-fluid section-spacing px-5">
                <h2 className="text-center mb-2">🍲 Recipes</h2>
                <p className="text-center">Loading recipes...</p>
            </section>
        );
    }

    const totalPages = Math.ceil(recipes.length / recipesPerPage);

    const startIndex = (currentPage - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;

    const currentRecipes = recipes.slice(startIndex, endIndex);

    function handlePageChange(page) {
        setCurrentPage(page);
    }

    return (
        <section className="container-fluid section-spacing px-5">
            <h2 className="text-center mb-2">🍲 Recipes</h2>

            <div className="d-flex justify-content-center gap-2 mb-4">
                {categories.map((category) => (
                    <span
                        key={category.id}
                        className="badge text-bg-success px-3 py-2"
                    >
                        {category.name}
                    </span>
                ))}
            </div>

            <div className="row g-3">
                {currentRecipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="col-lg-3 col-md-6"
                    >
                        <div className="card h-100 shadow-sm">
                            <div className="card-body p-3">

                                <h3 className="card-title recipe-name">
                                    {recipe.name}
                                </h3>

                                <p className="text-muted">
                                    Author: {recipe.author} | Category: {recipe.category}
                                </p>

                                <h5>Ingredients</h5>

                                <p>
                                    {recipe.ingredients}
                                </p>

                                <h5>Instructions</h5>

                                <div>
                                    {recipe.instructions
                                        .split(/(?=\d+\.)/)
                                        .map((step, index) => (
                                            <p key={index} className="mb-2">
                                                {step.trim()}
                                            </p>
                                        ))}
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center mt-4">
                <div className="btn-group">
                    {Array.from(
                        { length: totalPages },
                        (_, index) => (
                            <button
                                key={index + 1}
                                className={`btn ${currentPage === index + 1
                                    ? "btn-dark"
                                    : "btn-outline-dark"
                                    }`}
                                onClick={() =>
                                    handlePageChange(index + 1)
                                }
                            >
                                {index + 1}
                            </button>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default Recipes;
