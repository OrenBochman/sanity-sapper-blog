<script context="module" lang="ts">
	/** Todo Component 
     * 
     * Design Note
	 *
	 * 1. repository pattern
	 *    a. a store caching the data localy and story unpersited data
	 *    b. a api call to set/get/update/delete data items from the net
	 *    c. get the list of project/labels, people to use
	 *    d . a default inital state
	 *
	 * Debuging
	 *  why is the pp1-4 styles not working
     * 
     */
	import '../styles/tailwind-output.css';
    import { getTodoRepo } from './todoData';
</script>
<script>
	let extractProject = (text) => text.match(/(?:(\s|^)[@])(\S+)(?:\s|$)/g);
	let extractPriority = (text) => text.match(/(?:\s|^)(p[1-4])(?:\s|$)/g);
	let extractDate = (text) =>	text.match(/(today)|(tommorow)|((0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4})/g);
    // store the new task in the form
	let newTask = '';
    // Todoist like extraction for agile enrtry.
	$: projectExtract = extractProject(newTask) ? extractProject(newTask)[0].trim() : '';
    console.log(projectExtract)
	$: deadlineExtract = extractDate(newTask) ? extractDate(newTask)[0].trim() : '';
	$: priorityExtract = extractPriority(newTask) ? extractPriority(newTask)[0].trim() : '';
	$: newPriority = priorityExtract != null && priorityExtract != '' ? priorityExtract : 'p4';
	$: newProject = projectExtract != null ? projectExtract : '';
	$: newDeadLine = deadlineExtract != null ? deadlineExtract : '';

    let todoRepo = getTodoRepo();
    let todoList = todoRepo.getTodos();
	function addToList() {
		todoList = [
			...todoList,
			{
				task: newTask,
				status: false,
				priority: newPriority ? 'p4' : newPriority,
				deadline: newDeadLine,
				project: newProject
			}
		];
		reset();
	}
	function reset() {
		newTask = '';
		newDeadLine = '';
		newProject = '';
	}
	function removeFromList(index) {
		todoList.splice(index, 1);
		todoList = todoList;
	}
</script>

<style>
    ol {
        @apply list-decimal list-outside bg-gray-300 mx-6;
    }

	li {
		@apply my-3 ;
	}

	.pp1 {
		@apply text-white bg-red-600;
	}
	.pp2 {
		@apply text-black bg-red-400;
	}
	.pp3 {
		@apply text-black bg-red-200;
	}
	.pp4 {
		@apply text-black bg-transparent;
	}
	.checked {
		@apply line-through;
	}
	.chip {
		@apply text-white px-2 py-px font-bold  rounded-full text-xs;
	}
	.project {
		@apply bg-blue-500;
	}
	.deadline {
		@apply bg-green-500;
	}
	.duedate {
		@apply bg-red-500;
	}
	.priority {
		@apply bg-pink-500;
	}
	.button {
		@apply bg-black m-auto;
	}
</style>

<h1>Todoist Clone</h1>
<ul>
	<li>
		<input bind:value={newTask} type="text" placeholder="new todo item.." />
		try "abc p2 @todo abc 11/02/2022"
	</li>
	<li>
		<input bind:value={newProject} type="text" placeholder="project.." />
		try "abc p2 @15_min abc today"
	</li>
	<li>
		<input bind:value={newDeadLine} type="text" placeholder="deadline.." />
	</li>
	<li>
		<input bind:value={newPriority} type="text" placeholder="priority.." />
	</li>
</ul>
<div>
	<button class="chip button" on:click={addToList}>Add</button>
	<button class="chip button" on:click={reset}>Reset</button>
</div>
<br />
<ol>
	{#each todoList as item, index}
		<li>
			<input bind:checked={item.status} type="checkbox" />
			{#if 'project' in item && item.project != ''}
				<span class="chip project ">{item.project}</span>
			{/if}
			{#if 'deadline' in item && item.deadline != ''}
				<span class="chip deadline ">{item.deadline}</span>
			{/if}
			{#if 'priority' in item && item.priority != ''}
				<span class="chip priority ">{item.priority}</span>
			{/if}
			<span
				class="{item.status ? ' checked ' : ' '} + {item.priority != null ? 'p' + item.priority : ''}">
				{item.task}
			</span>
			<span on:click={() => removeFromList(index)} class="pl-1 text-xs">❌</span>
		</li>
	{/each}
</ol>
