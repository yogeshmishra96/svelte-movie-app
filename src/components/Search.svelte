<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let query = "";
  let genre = "";
  let year = "";
  let rating = "";

  const search = () => {
    dispatch("search", { query, genre, year, rating });
  };
</script>

<div class="container mt-4">
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <label for="search-input" class="visually-hidden"
          >Search for movies</label
        >
        <input
          type="text"
          id="search-input"
          class="form-control form-control-lg"
          placeholder="Search for movies..."
          bind:value={query}
          on:input={search}
          aria-label="Search for movies"
        />
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-4 mb-3">
      <label for="genre-select" class="visually-hidden">Genre</label>
      <select
        id="genre-select"
        class="form-select form-select-lg"
        bind:value={genre}
        on:change={search}
        aria-label="Select genre"
      >
        <option value="" selected>Genre</option>
        <option value="28">Action</option>
        <option value="12">Adventure</option>
        <option value="35">Comedy</option>
        <option value="18">Drama</option>
        <!-- Add more genres as needed -->
      </select>
    </div>
    <div class="col-md-4 mb-3">
      <label for="year-input" class="visually-hidden">Year</label>
      <input
        type="number"
        id="year-input"
        class="form-control form-control-lg"
        bind:value={year}
        on:input={search}
        placeholder="Year"
        min="1900"
        max="2024"
        aria-label="Year of release"
      />
    </div>
    <div class="col-md-4 mb-3">
      <label for="rating-input" class="visually-hidden">Rating</label>
      <input
        type="number"
        id="rating-input"
        class="form-control form-control-lg"
        bind:value={rating}
        on:input={search}
        placeholder="Rating"
        min="0"
        max="10"
        step="0.1"
        aria-label="Movie rating"
      />
    </div>
  </div>
</div>

<style>
  .container {
    margin-top: 2rem;
  }
  .input-group .form-control-lg {
    height: calc(1.5em + 1rem + 2px);
    font-size: 1.25rem;
  }
  .form-select-lg,
  .form-control-lg {
    font-size: 1.25rem;
    height: calc(1.5em + 1rem + 2px);
  }
  .form-select-lg {
    padding: 0.5rem 1.5rem;
  }
  .row > .col-md-4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 600px) {
    .input-group .form-control-lg,
    .form-select-lg,
    .form-control-lg {
      font-size: 1rem;
      height: calc(1.5em + 0.75rem + 2px);
    }
    .form-select-lg {
      padding: 0.5rem 1rem;
    }
    .row > .col-md-4 {
      margin-bottom: 1rem;
    }
  }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
</style>
