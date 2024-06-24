<script>
	import { Router, Route, Link } from "svelte-routing";
	import "bootstrap/dist/css/bootstrap.min.css";
	import { onMount, onDestroy } from "svelte";
	import { movies } from "./stores/movies";
	import Header from "./components/common/Header.svelte";
	import SearchFilters from "./components/search.svelte";
	import MovieList from "./components/MovieList.svelte";
	import { loading } from "./stores/loading"; // new store for loading state

	let page = 1;
	let query = "";
	let genre = "";
	let year = "";
	let rating = "";
	let noResults = false; // flag for no results

	const fetchMovies = async (params = {}) => {
		loading.set(true); // set loading to true
		let { query = "", genre = "", year = "", rating = "" } = params;
		let API_KEY = "4b659ad2608c2e39a91769291da4954e";
		let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${page}`;

		if (query) {
			url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
		}
		if (genre) {
			url += `&with_genres=${genre}`;
		}
		if (year) {
			url += `&primary_release_year=${year}`;
		}
		if (rating) {
			url += `&vote_average.gte=${rating}`;
		}

		const response = await fetch(url);
		const data = await response.json();
		loading.set(false); // set loading to false
		if (page === 1) {
			movies.set(data.results);
			noResults = data.results.length === 0; // set noResults flag
		} else {
			movies.update((current) => [...current, ...data.results]);
		}
	};

	const loadMore = async () => {
		page++;
		await fetchMovies({ query, genre, year, rating });
	};

	const handleSearch = (event) => {
		({ query, genre, year, rating } = event.detail);
		page = 1;
		fetchMovies({ query, genre, year, rating });
	};

	const handleScroll = () => {
		if (
			window.innerHeight + window.scrollY >=
			document.body.offsetHeight - 10
		) {
			loadMore();
		}
	};

	onMount(() => {
		fetchMovies({ query, genre, year, rating });
		window.addEventListener("scroll", handleScroll);
	});

	onDestroy(() => {
		window.removeEventListener("scroll", handleScroll);
	});
</script>

<main>
	<Header />
	<SearchFilters on:search={handleSearch} />
	{#if $loading}
		<div class="text-center my-4">
			<div class="spinner-border" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
	{:else if noResults}
		<div class="text-center my-4">
			<p>No movies found.</p>
		</div>
	{:else}
		<MovieList />
	{/if}
</main>

<style>
	@import "bootstrap/dist/css/bootstrap.min.css";
</style>
