import useTheme from "../../hooks/useTheme";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full flex justify-end">
      <label className="relative inline-flex items-center cursor-pointer mb-3">
        <input
          type="checkbox"
          checked={theme === "dark"}
          className="sr-only peer"
          onChange={toggleTheme}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-700"></div>
        <span className="ml-3 text-sm font-medium text-gray-900">
          Toggle Theme
        </span>
      </label>
    </div>
  );
}
