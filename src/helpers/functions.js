export const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
};

//! CONFIG
export const getConfig = () => {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const Authorization = `Bearer ${tokens.access.access}`;
  const config = {
    headers: { Authorization },
  };
  return config;
};
