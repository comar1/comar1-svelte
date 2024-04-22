<script lang="ts">

	import '../app.css';
	import Landing from './landing.svelte';
	import Content from './content.svelte';
	import Tools from './tools.svelte';
	import Projects from './projects.svelte';
	import WorkingOn from './workingon.svelte';
	import Contact from './contact/+page.svelte';

</script>

<div class=" background text-white mx-auto h-full flex flex-col md:flex-row relative">
	<Landing></Landing>
	<Content></Content>
</div>
<Tools />
<Projects />
<WorkingOn />
<Contact /> 

<style lang="postcss">
	.background {
		background: rgb(2, 0, 36);
		background: linear-gradient(
			90deg,
			rgba(2, 0, 36, 1) 0%,
			rgba(9, 9, 121, 1) 72%,
			rgba(6, 63, 157, 1) 100%,
			rgba(5, 93, 177, 1) 100%,
			rgba(0, 212, 255, 1) 100%
		);
	}
</style>
