const API_URL = "https://dummyjson.com";

const getUsers = async () => {
    const response = await fetch(`${API_URL}/users?limit=100`);
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    const json_data = await response.json();
    return json_data.users;
}

const getProducts = async () => {
    const response = await fetch(`${API_URL}/products?limit=100`);
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    const json_data = await response.json();
    return json_data.products;
}

export { getUsers, getProducts };