export function isLoggedIn() {
  try {
    const token = localStorage.getItem("Token");
    return token;
  } catch (error) {
    return null;
  }
}

export function logout() {
  localStorage.removeItem("Token");
  window.location = "/";
}

export default {
  isLoggedIn,
  logout,
};
