import React, { useState } from "react";
import SearchUser from "./components/SearchUser";
import { getUser } from "./services/github";

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    try {
      const data = await getUser(username);
      setUser(data);
    } catch (error) {
      console.error("User not found", error);
      setUser(null);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>GitHub User Search</h1>
      <SearchUser onSearch={handleSearch} />

      {user && (
        <div style={{ marginTop: "1rem" }}>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
