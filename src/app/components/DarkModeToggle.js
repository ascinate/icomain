'use client';

export default function DarkModeButton() {
  const toggleDark = () => {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  return (
    <button type="button" className="darkmods-btn" onClick={toggleDark}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M5 7C5 6.17 5.67 5.5 6.5 5.5..." />
      </svg>
    </button>
  );
}
