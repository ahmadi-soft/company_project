export const useTheme = () => {
  // initialize to undefined to avoid SSR/client mismatch
  const isDark = ref<boolean | null>(null);

  const setTheme = (value: boolean) => {
    isDark.value = value;
    document.documentElement.classList.toggle("dark", !!value);
    try {
      localStorage.setItem("theme", value ? "dark" : "light");
    } catch (e) {
      // ignore localStorage errors in restricted environments
    }
  };

  const toggle = () => {
    // If not initialized yet, default to true
    const next = !(isDark.value ?? true);
    setTheme(next);
  };

  onMounted(() => {
    // Prefer saved preference, otherwise fall back to system preference
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("theme");
    } catch (e) {
      /* ignore */
    }

    if (saved === "dark" || saved === "light") {
      setTheme(saved === "dark");
    } else if (window.matchMedia) {
      setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
    } else {
      setTheme(true);
    }
  });

  return { isDark, toggle, setTheme };
};
