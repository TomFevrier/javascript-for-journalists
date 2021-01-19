<script>
	export let min;
	export let max;
	export let step = 1;
	export let value;
</script>

<input class='slider' type='range' {min} {max} {step} bind:value={value} />

<style lang='scss'>
	@import '../../global.scss';

	.slider {
		display: block;
		width: 100%;
		height: 1rem;
		margin: 0.5rem;
		cursor: grab;
		appearance: none;
		border: none;
		background: transparent;

		&:focus {
			outline: none;
		}

		&::-webkit-slider-thumb {
			-webkit-appearance: none;
			height: 1.2rem;
			width: 1.2rem;
			border-radius: 50%;
			border: none;
			background: $main;
			margin-top: -0.3rem;
		}

		&::-webkit-slider-runnable-track {
			width: 100%;
			height: 0.5rem;
			background: #F0F0F0;
			border-radius: 0.25rem;
			border: none;
		}

		&::-moz-range-thumb {
			height: 1.2rem;
			width: 1.2rem;
			border-radius: 50%;
			border: none;
			background: $main;
		}

		&::-moz-range-track {
			width: 100%;
			height: 0.5rem;
			background: #F0F0F0;
			border-radius: 0.25rem;
			border: none;
		}

		&::-ms-track {
			width: 100%;
			height: 0.5rem;
			background: #F0F0F0;
			border-radius: 0.25rem;
			border: none;
		}
	}
</style>
