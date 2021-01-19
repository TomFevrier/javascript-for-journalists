<script>
	import { onMount, tick } from 'svelte';

	import CodeSnippet from './CodeSnippet.svelte';
	import { ButtonBlock, Dropdown, Slider } from '../ui';

	export let line;
	export let type = 'SVG';

	let width;
	let text;

	$: file = line.split('\n')[0].slice(2, -2).trim();
	$: inputs = line.split('\n').slice(1)
		.map(attr => {
			const [name, content] = attr.split(':').map(e => e.trim());
			console.log(name, content)
			const type = content.includes('(') ? 'number' : 'string';
			if (type === 'number') {
				const value = +content.split('(')[0];
				const range = content.match(/\([0-9\-]+\)/)[0].slice(1, -1);
				const [min, max] = range.split('-').map(e => e !== '' ? +e : null);
				return {
					name,
					type,
					value,
					min,
					max
				};
			}
			else {
				const value = content.split('[')[0].trim();
				const options = content.match(/\[.+\]/)[0]
					.slice(1, -1)
					.split(', ');
				return {
					name,
					type,
					value,
					options
				};
			}
		});

	$: console.log(inputs, file)

	onMount(async () => {
		text = await (await fetch(`examples/${file}`)).text();
		await tick();
		balanceText('.balance-text');
	});

	$: code = text && inputs.reduce((code, input) => {
		return code.replace(`{{ ${input.name.toUpperCase()} }}`, input.value);
	}, text).replace('{{ SVG-WIDTH }}', width);

	$: console.log(width)

	const listify = (array) => `${array.slice(0, -1).join(', ')} et ${array.last()}`;

</script>

{#if text}
	<div class='interactive-snippet'>
		<div class='editor'>
			<div class='code'>
				<CodeSnippet language={file.split('.')[1]} {code} />
			</div>
			{#if inputs.length > 0}
				<div class='inputs'>
					<!-- <p>
						Fais varier les valeurs de
						{@html listify(inputs.map(input => `<code>${input.name}</code>`))}
						avec les glissières pour voir le résultat.
					</p> -->
					<p class='balance-text'>
						Essaye de faire varier les valeurs avec les glissières pour voir le résultat.
					</p>
					{#each inputs as input}
						{#if input.type === 'number'}
							<label>
								<span class='name'>
									<code>{input.name}</code>
								</span>
								<Slider
									min={input.min || 0}
									max={input.max || width}
									bind:value={input.value} />
							</label>
						{:else if input.type === 'string'}
							<label>
								<span class='name'>
									<code>{input.name}</code>
								</span>
								<ButtonBlock
									options={input.options}
									bind:selected={input.value} />
							</label>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
		{#if type === 'SVG'}
			<div class='canvas' bind:clientWidth={width}>
				{@html code}
			</div>
		{/if}
	</div>
{/if}

<style lang='scss'>
	@import '../../global.scss';

	.interactive-snippet {
		display: flex;
		flex-direction: column;

		.editor {
			display: flex;

			& > div {
				margin: 0.5rem;
			}

			@include lg {
				flex-direction: column;
			}

			.code {
				min-width: 40%;
			}

			.inputs {
				p {
					font-style: italic;
					color: #999999;
					margin: 0.5rem 0;
					text-align: right;
				}

				label {
					display: flex;
					align-items: center;
					margin: 1rem auto;
					width: 100%;

					.name {
						width: 14rem;
						margin-right: 0.5rem;
						text-align: right;
					}
				}
			}
		}

		.canvas {
			display: flex;
			justify-content: center;
			align-items: center;
			min-height: 300px;
			width: 100%;
			height: 300px;
			margin: 1rem auto;
			background-color: white;
			background-image:
				linear-gradient(
					45deg, lightgrey 25%,
					transparent 25%,
					transparent 75%,
					lightgrey 75%
				),
				linear-gradient(
					45deg, lightgrey 25%,
					transparent 25%,
					transparent 75%,
					lightgrey 75%
				);
			background-size: 20px 20px;
			background-position: 0 0, 10px 10px;
			outline: 3px solid #333;
			box-shadow: 8px 8px #333;
			overflow: visible;
		}
	}
</style>
