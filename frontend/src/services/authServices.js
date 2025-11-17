import api from "./api";

// ========================
// LOGIN ADMIN
// ========================
export const loginAdmin = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });

    const { token, user } = response.data;

    if (!token) throw new Error("Token tidak diberikan oleh server.");
    if (!user) throw new Error("Data user tidak diberikan oleh server.");

    // Simpan token & user
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    return { token, user };
  } catch (error) {
    console.error("Login gagal:", error);

    // Kirim error yang rapi ke komponen React
    throw new Error(error.response?.data?.message || "Login gagal, periksa email dan password.");
  }
};

// ========================
// LOGOUT ADMIN
// ========================
export const logoutAdmin = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  // juga hapus header Authorization di axios
  delete api.defaults.headers.common["Authorization"];
};

// ========================
// GET CURRENT USER
// ========================
export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
