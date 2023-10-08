export function RestrictArea({ children }) {
  const token = sessionStorage.getItem('token');
  if (!token) {
    window.location.href = '/login';
  }

  return <>{children}</>;
}
