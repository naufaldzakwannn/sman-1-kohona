// src/services/authServices.js
import api from "./api";

export const loginAdmin = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });

    // Cek format respons Laravel (bisa access_token atau token)
    const token = response.data.token || response.data.access_token;
    const user = response.data.user;

    if (!token || !user) {
      throw new Error("Token atau data user tidak ditemukan dalam respons API");
    }

    // Simpan token dan data admin ke localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    return user;
  } catch (error) {
    console.error("Login gagal:", error);
    throw error.response?.data || { message: "Login gagal, periksa koneksi atau kredensial" };
  }
};

export const logoutAdmin = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
