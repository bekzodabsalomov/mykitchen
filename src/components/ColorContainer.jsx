import { FaSun, FaMoon } from "react-icons/fa6";
import { useThemeContext } from "../hooks/useThemeContext";

const colors = ["#161A30", "#CD5C08", "#7D7C7C", "#88AB8E"];
function ColorContainer() {
  const { changeColor, theme, changeTheme } = useThemeContext();

  const setNewTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    changeTheme(newTheme);
  };
  return (
    <div className="my-5 align-elements flex justify-between">
      <button onClick={setNewTheme} className="text-4xl">
        {theme == "light" ? <FaSun /> : <FaMoon />}
      </button>
      <div className="flex gap-2">
        {colors.map((color) => {
          return (
            <span
              key={color}
              style={{ backgroundColor: color }}
              className={`w-7 h-7 color rounded-full cursor-pointer`}
              onClick={() => changeColor(color)}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default ColorContainer;
