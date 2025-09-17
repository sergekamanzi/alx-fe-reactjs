import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

// NEW FUNCTION for advanced search
export const fetchAdvancedUserSearch = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  try {
    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    const users = response.data.items;

    // fetch details for each user (because /search/users doesn’t return repos/location directly)
    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        const details = await axios.get(`${BASE_URL}/users/${user.login}`);
        return details.data;
      })
    );

    return detailedUsers;
  } catch (error) {
    throw new Error("Search failed");
  }
};
