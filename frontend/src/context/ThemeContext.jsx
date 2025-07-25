import { createContext, use, useState } from "react";


const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handletoggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    
    document.documentElement.classList.toggle("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, handletoggle }}>
      {children}
    </ThemeContext.Provider>
  );
};


const DarkMode = () => {
  const { theme, handletoggle } = use(ThemeContext);

  return (
    <div className="relative">
      <div className="fixed bottom-4 right-4 flex gap-2 max-w-[1920px]">
        <button
          onClick={handletoggle}
          className="text-2xl p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow"
        >
          {theme === "light" ? "🌜" : "🌞"}
        </button>
      </div>
    </div>
  );
};

export { ThemeProvider, ThemeContext, DarkMode };
