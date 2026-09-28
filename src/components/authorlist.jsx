function AuthorList({ users }) {
    return (
        <div className="card shadow-sm p-3">
            <h3 className="h4">Author List</h3>

            <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                {users.map((user) => (
                    <div key={user.id} className="border-bottom py-2">
                        <strong>{user.name}</strong>

                        <br />

                        <small className="text-muted">{user.email}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AuthorList;