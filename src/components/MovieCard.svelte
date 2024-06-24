<script>
  export let movie;
  import { favorites } from '../stores/movies';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faHeart } from '@fortawesome/free-solid-svg-icons';

  const addToFavorites = () => {
    favorites.update(current => {
      if (!current.find(f => f.id === movie.id)) {
        return [...current, movie];
      }
      return current;
    });
  };
</script>

<div class="card h-100">
  <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} class="card-img-top" alt={`Poster of ${movie.title}`} />
  <div class="card-body">
    <h5 class="card-title">{movie.title}</h5>
    <div class="card-text-container">
      <p class="card-text">{movie.release_date}</p>
      <button class="btn btn-outline-primary" on:click={addToFavorites} aria-label={`Add ${movie.title} to favorites`}>
        <FontAwesomeIcon icon={faHeart} />
      </button>
    </div>
  </div>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  .card-body {
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card-img-top {
    height: auto;
    width: 100%;
  }
  .card-title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  .card-text-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-text {
    font-size: 1rem;
    color: #6c757d;
  }
  .btn {
    margin-left: auto;
  }
  @media (max-width: 600px) {
    .card {
      margin: 0.5rem;
    }
    .card-title {
      font-size: 1rem;
    }
    .card-text {
      font-size: 0.875rem;
    }
    .btn {
      font-size: 0.875rem;
    }
  }
</style>
