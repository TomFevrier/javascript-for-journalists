<script>
	import router from 'page';

	import { Home, Tutorial } from './pages';

	let page;
	let params;
	router('/', () => page = Home);
	router(
		'/:slug',
		(ctx, next) => {
			params = ctx.params;
			next();
		},
		() => page = Tutorial
	);

	router.start();

	Object.defineProperty(Array.prototype, 'last', {
		value: function() {
			return this[this.length - 1];
		}
	});
</script>

<svelte:component this={page} {params} />
