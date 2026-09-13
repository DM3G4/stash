
export function switchTheme() {
    document.documentElement.classList.remove('light', 'dark')
    const theme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
}
