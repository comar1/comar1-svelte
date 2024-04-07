<script>
	import newletter from '$lib/projects/newletter.png'
	import accountmodal from '$lib/projects/accountmodal.png'
	import recipe from '$lib/projects/recipe.png'
</script>

<div class="h-full background text-center py-10  " id="projects">
	<div class="py-[2rem] pt-[4rem] font-cool text-center text-[34px] text-blue-900 italic w-screen" >
		<h2 class="bg-white w-1/4 mx-auto">My Projects</h2>
		<p class="text-white w-2/4 mx-auto mt-5 py-5 pl-px-50">you can view some of my work here. all projects are <a href="#" class="underline">fully responsive</a> deployed using <a href="https://www.netlify.com/" class="underline">netlify</a></p>
	</div>
	<div class="flex flex-row justify-center gap-x-11 mx-auto py-5 pb-9">
		<div class="bg-white w-[300px] h-[410px] rounded-lg hover:border-2 ">
			<a href="https://candid-buttercream-102d05.netlify.app/">
				<img src={recipe} alt="" class=" mx-auto rounded-md opacity-75 hover:opacity-100">
			</a>
			<div class="  w-[250px] h-[125px] mt-5 mx-auto p-3 rounded-sm">
				<a href="https://candid-buttercream-102d05.netlify.app/" class="text-black hover:opacity-75  font-cool text-[24px]">Recipe Modal </a>
				<p class="text-[12px] mt-1">A simple recipe page made in pure HTML and CSS</p>
			</div>
		</div>
		<div class="bg-white w-[300px] h-[410px]  rounded-lg hover:border-2">
			<a href="https://65ec3ac307d3d40008194353--newsletter-modal.netlify.app/">
				<img src={newletter} alt="" class=" mx-auto rounded-md opacity-95 hover:opacity-100" >
			</a>
			<div class="  w-[250px] h-[125px] mt-5 mx-auto p-3 rounded-sm">
				<a href="https://65ec3ac307d3d40008194353--newsletter-modal.netlify.app/" class="text-black hover:opacity-75  font-cool text-[24px]">Newsletter Modal </a>
				<p class="text-[12px] mt-1">Made using <b>SvelteKit</b> and <b>TailwindCSS</b>. Has email validation that verifies input before allowing you to enter.</p>
			</div>
		</div>
		<div class="bg-white w-[300px] h-[410px]  rounded-lg hover:border-2">
			<a href="https://fastidious-marzipan-71b23e.netlify.app/">
				<img src={accountmodal} alt="" class=" mx-auto rounded-md opacity-95 hover:opacity-100">
			</a>
			<div class="  w-[250px] h-[125px] mt-5 mx-auto p-3 rounded-sm">
				<a href="https://fastidious-marzipan-71b23e.netlify.app/" class="text-black hover:opacity-75  font-cool text-[24px]">User Account Modal </a>
				<p class="text-[12px] mt-1">A popup account modal used in User management sites. Also the <b>first modal</b> I deployed.</p>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.background {
		background: rgb(148,163,184);
		background: linear-gradient(90deg, rgba(148,163,184,1) 0%, rgba(221,225,232,1) 93%, rgba(227,230,236,1) 100%, rgba(235,237,241,1) 100%, rgba(239,240,243,1) 100%, rgba(249,249,250,1) 100%);
	}
</style>
