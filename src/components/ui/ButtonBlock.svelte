<script>
	export let options;
	export let selected;
</script>

<div class='buttons'>
	{#each options as option}
		<div
			class='button'
			class:selected={selected === (Array.isArray(option) ? option[0] : option)}
			on:click={() => selected = (Array.isArray(option) ? option[0] : option)}
		>
			'{Array.isArray(option) ? option[1] : option}'
		</div>
	{/each}
</div>

<style lang='scss'>
	@import '../../global.scss';

	.buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin-left: 0.5rem;
		font: bold 0.9rem 'Fira Code', monospace;
		width: 100%;

		.button {
			text-align: center;
			padding: 0.5rem 1rem;
			background: #F0F0F0;
			cursor: pointer;
			transition: all 0.2s;

			&:hover, &.selected {
				color: white;
				background: black;
			}

			&:first-child {
				border-radius: 6px 0 0 6px;
			}

			&:last-child {
				border-radius: 0 6px 6px 0;
			}
		}

		@include sm {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;

			.button {
				width: 50%;

				&:first-child {
					border-radius: 6px 6px 0 0;
				}

				&:last-child {
					border-radius: 0 0 6px 6px;
				}
			}
		}
	}
</style>
