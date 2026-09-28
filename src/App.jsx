import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Recipes from "./components/recipes";
import CreateDish from "./components/createdish";
import AddAuthor from "./components/addauthor";
import AuthorList from "./components/authorlist";

// FireWok API
const API = {
  recipes: "https://firewok-api-production.up.railway.app/recipes",
  createRecipe: "https://firewok-api-production.up.railway.app/recipes",

  users: "https://firewok-api-production.up.railway.app/users",
  createUser: "https://firewok-api-production.up.railway.app/users",

  categories: "https://firewok-api-production.up.railway.app/categories",
};

// Main App
function App() {
  const [users, setUsers] = useState([]);

  function refreshUsers() {
    fetch(API.users)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }

  useEffect(() => {
    refreshUsers();
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="hero container-fluid">
        <img
          src="/pan.png"
          alt="FireWok logo"
          className="logo"
        />

        <h1 className="firewok-title">
          <span className="word-fire">Fire</span>
          <span className="word-wok">Wok</span>
        </h1>

        <p>Let Your Taste Buds Spark</p>
      </section>

      {/* Recipes */}
      <Recipes API={API} />

      {/* Wok Control */}
      <section className="container section-spacing">
        <h2 className="text-center mb-2">👨‍🍳 Wok Control</h2>

        <div className="row g-4">

          {/* Create New Dish */}
          <div className="col-lg-8">
            <CreateDish API={API} />
          </div>

          {/* Author Management */}
          <div className="col-lg-4">
            <AddAuthor
              API={API}
              refreshUsers={refreshUsers}
            />

            <div className="mt-3">
              <AuthorList users={users} />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default App;
