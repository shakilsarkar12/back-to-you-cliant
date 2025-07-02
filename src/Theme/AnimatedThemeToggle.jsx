import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

const AnimatedThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      document.documentElement.setAttribute("data-theme", systemTheme);
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="dropdown dropdown-start">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-sm md:btn-md btn-primary btn-outline flex gap-2 items-center"
      >
        {theme === "light" && <FiSun />}
        {theme === "dark" && <FiMoon />}
        {theme === "system" && <FiMonitor />}
        Theme
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-accent rounded-box w-48 p-2 shadow-xl flex flex-col gap-2"
      >
        <li>
          <button
            className={`btn btn-sm btn-block justify-start ${
              theme === "light" ? "btn-active" : ""
            }`}
            onClick={() => setTheme("light")}
          >
            <FiSun className="mr-2" /> Light
          </button>
        </li>
        <li>
          <button
            className={`btn btn-sm btn-block justify-start ${
              theme === "dark" ? "btn-active" : ""
            }`}
            onClick={() => setTheme("dark")}
          >
            <FiMoon className="mr-2" /> Dark
          </button>
        </li>
        <li>
          <button
            className={`btn btn-sm btn-block justify-start ${
              theme === "system" ? "btn-active" : ""
            }`}
            onClick={() => setTheme("system")}
          >
            <FiMonitor className="mr-2" /> System
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AnimatedThemeToggle;
