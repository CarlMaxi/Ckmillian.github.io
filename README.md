<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>Ckmillian – Home</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --bg: #f9f6f1;
      --text: #111;
      --accent: #d6b260;
      --accent-soft: #bfa15b;
      --card: #fff;
      --shadow: rgba(0,0,0,0.05);
    }
    [data-theme="dark"] {
      --bg: #111;
      --text: #eee;
      --accent: #bfa15b;
      --accent-soft: #d6b260;
      --card: #1f1f1f;
      --shadow: rgba(0,0,0,0.3);
    }
    *{margin:0;padding:0;box-sizing:border-box;}
    body{background:var(--bg);color:var(--text);font-family:'Inter',sans-serif;line-height:1.6;}
    header{background:var(--card);box-shadow:0 1px 4px var(--shadow);display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;}
    .logo{font-family:'Playfair Display',serif;font-size:1.75rem;color:var(--accent);}
    nav a{margin-right:1.5rem;text-decoration:none;color:var(--text);font-weight:600;transition:color .2s, border-bottom .2s;}
    nav a:hover{color:var(--accent);}
    nav a.active{color:var(--accent);border-bottom:2px solid var(--accent);}
    .controls{display:flex;align-items:center;gap:1rem;}
    select{padding:.4rem;border:1px solid #d1d5db;border-radius:4px;background:var(--card);color:var(--text);}
    .switch{position:relative;width:40px;height:20px;}
    .switch input{display:none;}
    .slider{position:absolute;inset:0;background:#d1d5db;border-radius:9999px;cursor:pointer;transition:background .3s;}
    .slider:before{content:'';position:absolute;width:16px;height:16px;top:2px;left:2px;background:#fff;border-radius:50%;transition:transform .3s;}
    input:checked+.slider{background:var(--accent-soft);}
    input:checked+.slider:before{transform:translateX(20px);}
    .hero{background:var(--card);text-align:center;padding:6rem 1rem;}
    .hero h1{font-family:'Playfair Display',serif;font-size:3rem;color:var(--accent);margin-bottom:1rem;}
    .hero p{font-size:1.125rem;color:var(--text);}
    .about, .steps, .grid, .auth{max-width:1024px;margin:auto;padding:2rem 1rem;}
    .about h2{font-family:'Playfair Display',serif;font-size:2rem;color:var(--accent);margin-bottom:1rem;text-align:center;}
    .about p{text-align:center;}
    .steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;}
    .step{background:var(--card);box-shadow:0 2px 6px var(--shadow);border-radius:8px;padding:1.5rem;transition:transform .2s;}
    .step:hover{transform:translateY(-4px);}
    .step h3{font-family:'Playfair Display',serif;font-size:1.25rem;color:var(--accent);margin-bottom:.75rem;}
    .step p{font-style:italic;color:var(--accent-soft);}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;}
    section{background:var(--card);box-shadow:0 2px 6px var(--shadow);border-radius:8px;padding:1.75rem;transition:transform .2s;}
    section:hover{transform:translateY(-4px);}
    section h2{font-family:'Playfair Display',serif;font-size:1.5rem;color:var(--accent);margin-bottom:.5rem;}
    section p{margin-bottom:1rem;}
    .btn{display:inline-block;padding:.6rem 1.2rem;background:var(--accent);color:#fff;border-radius:6px;text-decoration:none;font-weight:600;transition:background .3s;}
    .btn:hover{background:var(--accent-soft);}
    .auth{text-align:center;}
    .auth input{margin:.4rem;padding:.6rem;width:260px;border:1px solid #d1d5db;border-radius:6px;}
    .auth button{margin:.5rem;padding:.6rem 1.2rem;background:var(--accent);color:#fff;border:none;border-radius:6px;cursor:pointer;transition:background .3s;}
    .auth button:hover{background:var(--accent-soft);}
    footer{text-align:center;padding:2rem 1rem;background:var(--card);box-shadow:0 -1px 4px var(--shadow);}
  </style>
</head>
<body>
  <header>
    <div class="logo">Ckmillian</div>
    <nav>
      <a href="literacy.html">Literacy</a>
      <a href="morality.html">Morality</a>
      <a href="security.html">Security</a>
      <a href="resources.html">Resources</a>
    </nav>
    <div class="controls">
      <select aria-label="Language">
        <option>English</option><option>Español</option><option>Français</option><option>العربية</option>
      </select>
      <label class="switch">
        <input type="checkbox" id="themeSwitch"/>
        <span class="slider"></span>
      </label>
    </div>
  </header>

  <div class="hero">
    <h1>Ckmillian</h1>
    <p>“Holistic wisdom shapes modern resilience.” – Inspired by Sun Tzu</p>
  </div>

  <div class="about">
    <h2>Our Mission</h2>
    <p>We empower individuals to engage confidently and responsibly in the digital sphere by providing clear, research-backed guidance on literacy, ethical conduct, and robust security practices.</p>
  </div>

  <div class="steps">
    <div class="step">
      <h3>Learn Precisely</h3>
      <p>“Real knowledge is to know the extent of one’s ignorance.” – Confucius</p>
    </div>
    <div class="step">
      <h3>Reflect Ethically</h3>
      <p>“The superior man is modest in his speech but exceeds in his actions.” – Confucius</p>
    </div>
    <div class="step">
      <h3>Secure Proactively</h3>
      <p>“Victorious warriors win first and then go to war.” – Sun Tzu</p>
    </div>
  </div>

  <section class="grid">
    <h2>Preview Our Sections</h2>
    <p>Explore more in-depth guidance on each topic by visiting the dedicated pages.</p>
    <a href="literacy.html" class="btn">Explore Literacy</a>
    <a href="morality.html" class="btn">Explore Morality</a>
    <a href="security.html" class="btn">Explore Security</a>
    <a href="resources.html" class="btn">Explore Resources</a>
  </section>

  <div class="auth">
    <h3>Member Access</h3>
    <input type="email" placeholder="Email Address"/>
    <input type="password" placeholder="Password"/>
    <div>
      <button onclick="loginUser()">Login</button>
      <button onclick="signupUser()">Sign Up</button>
    </div>
  </div>

  <footer>
    <p>&copy; 2025 Ckmillian</p>
    <p>Designed by Mudde Carl Maximillian Kintu</p>
  </footer>

  <script>
    // Theme toggle
    const t = document.getElementById('themeSwitch'),
          r = document.documentElement,
          s = localStorage.getItem('theme');
    if(s){r.setAttribute('data-theme',s);t.checked = s==='dark';}
    t.addEventListener('change',()=>{
      const m = t.checked?'dark':'light';
      r.setAttribute('data-theme',m);
      localStorage.setItem('theme',m);
    });

    // Mark active link
    document.querySelectorAll('nav a').forEach(link=>{
      if(link.href === window.location.href){
        link.classList.add('active');
      }
    });

    // Stub login/signup
    function signupUser(){alert('Sign-up not implemented');}
    function loginUser(){alert('Login not implemented');}
  </script>
</body>
</html>

