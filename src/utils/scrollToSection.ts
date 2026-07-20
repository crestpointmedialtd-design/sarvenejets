export const scrollToSection = (sectionId: string) => {
  if (window.location.pathname === '/') {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    return;
  }
  sessionStorage.setItem('scrollTo', sectionId);
  window.location.href = '/';
};