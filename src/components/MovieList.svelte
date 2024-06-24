<script>
  import { movies } from "../stores/movies";
  import MovieCard from "./MovieCard.svelte";
</script>

<div class="container mt-4">
  <div class="row">
    {#each $movies as movie}
      <div class="col-md-3 mb-4">
        <MovieCard {movie} />
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    margin-top: 2rem;
  }
</style>
