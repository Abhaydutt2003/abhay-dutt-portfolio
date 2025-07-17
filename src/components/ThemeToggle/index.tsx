const ThemeToggle = () => {
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "nord" ? "frappe" : "nord";
    document.documentElement.setAttribute("data-theme", next);
  };

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggle;
