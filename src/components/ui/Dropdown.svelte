<script>
	export let options;
	export let selected;
</script>

<div class='dropdown'>
	<div class='wrapper'>
		<select bind:value={selected}>
			{#each options as option}
				<option value={Array.isArray(option) ? option[0] : option}>
					{Array.isArray(option) ? option[1] : option}
				</option>
			{/each}
		</select>
	</div>
</div>

<style lang='scss'>
	.dropdown {
		margin-left: 0.5rem;
		width: 100%;
		font-family: 'Fira Mono', monospace;

		.wrapper {
			position: relative;
			width: fit-content;

			select {
				display: block;
				margin: 0;
				appearance: none;
				border: 1px solid black;
				background: white;
				border-radius: 0;
				padding-right: 1.5rem;
				overflow: hidden;
				text-overflow: ellipsis;

				&:focus {
					outline: none;
				}
			}

			&::after {
				content: '⌄';
				position: absolute;
				font-size: 1.5rem;
				top: 0;
				right: 0.25rem;
				pointer-events: none;
			}
		}
	}
</style>
