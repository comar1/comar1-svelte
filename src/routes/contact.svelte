<script lang="">
    export let form;
</script>

<div class="h-full w-full text-left py-[95px] sticky top-0 left-[20%] background space-y-12">
    <div class=" font-cool text-center text-[34px] text-blue-900 italic w-full" >
		<h2 class="bg-white w-1/4 mx-auto">Contact Me</h2>
    </div>
    <div>
        <div class="bg-white w-[30rem] h-[full] my-8 p-8 -pb-3 mx-auto rounded-md">
            <form on:submit|preventDefault method="post">
                <span class="font-cool">From:</span>
                <input type="email" name="from" id=""  placeholder="sample@gmail.com" class="bg-slate-200 w-[89%] h-8 p-2 pl-4 my-1 mb-4 rounded-md hover:border-2 hover:cursor-pointer focus:bg-white">
                <span class="font-cool">Subject:</span>
                <input type="text" name="subject" id=""  placeholder="Contact Interest" class="bg-slate-200 w-[85%] h-8 p-2 pl-4 my-1 mb-5 rounded-md hover:border-2 hover:cursor-pointer focus:bg-white">
                <span class="font-cool">Message:</span>
                <textarea  name="message" id=""  placeholder="Hi, I'd like to work with you" 
                        class="bg-slate-200 w-full h-24 p-3 my-1 rounded-md text-wrap hover:cursor-pointer focus:bg-white mouseover:bg-slate-800"></textarea>
                <input class="bg-slate-900 rounded p-3 mt-5 h-[45px] px-5 text-white hover:cursor-pointer opacity-85 hover:opacity-100" type="submit" value="Send">
                <p class="success">{form?.success || " "}</p>
            </form>
        </div>
    </div>
</div>
<style lang="postcss">
.background
{
    background: rgb(148,163,184);
background: linear-gradient(90deg, rgba(148,163,184,1) 0%, rgba(249,249,250,1) 0%, rgba(220,231,250,1) 0%, rgba(77,0,185,1) 0%, rgba(207,221,246,1) 100%);
    }
</style>