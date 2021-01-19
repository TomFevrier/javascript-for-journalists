<script>
	import marked from 'marked';
	import typografix from '../../utils/typografix';

	export let text;

	$: content = marked(typografix(text.slice(3).trim().replace(/\n/g, '\n\n')));
</script>

<div class='summary'>
	<h3>On récap&rsquo;&nbsp;!</h3>
	{@html content}
</div>

<style lang='scss'>
	@import '../../global.scss';

	.summary {
		position: relative;
		max-width: 36rem;
		width: 90%;
		margin: 2rem auto;
		padding: 1rem;
		border: 3px solid #333;
		box-shadow: 5px 5px #333;

		font-weight: bold;

		h3 {
			margin: 0.5rem 0;
			font-size: 1.5rem;
			font-family: 'Assistant', sans-serif;
			display: table;
			position: relative;

			&::before {
				content: "";
				width: 100%;
				height: 0.6rem;
				background: $semi-opaque;
				position: absolute;
				left: 0;
				bottom: 0.3rem;
				z-index: -42;
			}
		}
	}
</style>
