<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Ckmillian – Dashboard</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600&display=swap" rel="stylesheet"/>
<style>
  :root {
    --bg: #f9f6f1;
    --text: #111;
    --accent: #d4af37; /* Gold */
    --accent-soft: #f0d98c; /* Soft gold */
    --card: #fff;
    --shadow: rgba(0,0,0,0.05);
  }
  [data-theme="dark"] {
    --bg: #111;
    --text: #eee;
    --accent: #f0d98c;
    --accent-soft: #d4af37;
    --card: #1f1f1f;
    --shadow: rgba(0,0,0,0.3);
  }
  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    margin: 0;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--card);
    padding: 1rem 2rem;
    box-shadow: 0 1px 4px var(--shadow);
  }
  .logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem;
    color: var(--accent);
  }
  nav a {
    margin-right: 1.5rem;
    text-decoration: none;
    font-weight: 600;
    color: var(--text);
    transition: color .2s;
  }
  nav a:hover {
    color: var(--accent);
  }
  main {
    max-width: 1000px;
    margin: auto;
    padding: 2rem;
    text-align: center;
  }
  h1 {
    font-family: 'Playfair Display', serif;
    color: var(--accent);
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .typewriter {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--accent);
    overflow: hidden;
    border-right: .15em solid var(--accent);
    white-space: nowrap;
    margin: 0 auto;
    animation: typing 4s steps(40, end) infinite alternate, blink-caret .75s step-end infinite;
  }
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: var(--accent); }
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  .card {
    background: var(--card);
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 8px var(--shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, var(--accent-soft), transparent);
    transition: left 0.5s;
  }
  .card:hover::before {
    left: 100%;
  }
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px var(--shadow);
  }
  .card h3 {
    color: var(--accent);
    font-family: 'Playfair Display', serif;
    margin-bottom: 0.5rem;
  }
  .quote {
    margin-top: 2rem;
    font-style: italic;
    color: var(--accent-soft);
    font-size: 1.1rem;
    animation: fadeIn 3s ease-in;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
</head>
<body>
  <header>
    <div class="logo">Ckmillian</div>
    <nav>
      <a href="index.html">Home</a>
      <a href="literacy.html">Literacy</a>
      <a href="morality.html">Morality</a>
      <a href="security.html">Security</a>
      <a href="resources.html">Resources</a>
    </nav>
  </header>

  <main>
    <h1>Welcome to Your Dashboard</h1>
    <p class="typewriter">Your journey to digital mastery begins here.</p>
    <div class="cards">
      <div class="card">
        <h3>Exclusive Resources</h3>
        <p>Unlock tools and guides tailored for your digital growth.</p>
      </div>
      <div class="card">
        <h3>Track Progress</h3>
        <p>Monitor your learning milestones and achievements.</p>
      </div>
      <div class="card">
        <h3>Community Access</h3>
        <p>Engage in discussions, share ideas, and get feedback.</p>
      </div>
    </div>
    <div class="quote">“He who conquers himself is the mightiest warrior.” – Confucius</div>
  </main>

<script>
  const s = localStorage.getItem('theme');
  if (s) document.documentElement.setAttribute('data-theme', s);
</script>
</body>
</html>
