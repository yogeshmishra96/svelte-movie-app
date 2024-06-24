<script>
  import { Router, Route, Link } from "svelte-routing";
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <!-- Logo with alt text -->
    <a class="navbar-brand" href="/">
      <img
        src="logo-YTS.svg"
        alt="Movie Search App Logo"
        height="30"
        class="d-inline-block align-top"
      />
    </a>
    <div class="d-flex justify-content-end">
      <ul class="navbar-nav">
        <li class="nav-item">
          <!-- Accessible link -->
          <!-- <Link to="/favorites" class="nav-link">Favorites</Link> -->
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Router setup -->
<!-- <Router>
  <Route path="/" component={Home} />
  <Route path="favorites" component={Favorites} />
</Router> -->
