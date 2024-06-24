<script>
  import { favorites } from "../stores/favorites";
</script>

<h1>Favorite Movies</h1>
<ul>
  {#each $favorites as movie}
    <li>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.title} ({movie.release_year})</p>
    </li>
  {/each}
</ul>
