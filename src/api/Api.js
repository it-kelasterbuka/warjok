// api.js

import axios from "axios";

export const handleLogin = async (email, password) => {
  try {
    const response = await axios.post("https://reqres.in/api/login", {
      email: email,
      password: password,
    });
    if (response.data.token) {
      return response.data.token; // Token login is successful
    } else {
      throw new Error("Invalid email or password"); // login gagal cek kondisi
    }
  } catch (error) {
    throw new Error("Invalid email or password"); // login gagal cek kondisi
  }
};
