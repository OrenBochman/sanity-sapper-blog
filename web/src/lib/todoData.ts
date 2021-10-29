export const getTodoRepo = () =>  ( { getTodos : () => todoList, } )

let todoListNew = [
    {
        task: 'my first task pr @15_min  11/02/2022',
        status: false,
        project: 'todo',
        priority: 'p4'
    }
];

//This is the initial state
let todoList = [
    {
        task: 'add Todo schema to sanity.io studio @todo',
        status: false,
        project: 'todo',
        priority: 'p1'
    },
    {
        task: 'create an sanity io plugin md for  based on markdown it! @markItdown',
        status: false,
        project: 'markItdown',
        priority: 'p2'
    },
    {
        task:   'create a sanity studio schema @composer',
        status: false,
        project: 'composer',
        priority: 'p4'
    },
    {
        task: 'list all md files',
        status: false,
        project: '@15_min',
        priority: 'p4'
    },
    {
        task: 'map front matter to props',
        status: false,
        project: 'blog',
        priority: 'p1'
    },
    {
        task: 'cache @todo tasks in repo pattern',
        status: false,
        project: 'todo',
        deadline: 'today',
        priority: 'p2'
    },    
    {
        task: '@offline caching @todo cache tasks in localstorage store',
        status: false,
        project: 'todo, offline',
        deadline: 'today',
        priority: 'p3'
    },
    {
        task: 'fetch @todo tasks from sanity.io',
        status: false,
        project: 'todo',
        deadline: 'today',
        priority: 'p2'
    },
    {
        task: 'sync tasks with sanity studio @todo tommorow',
        status: false,
        project: 'todo',
        deadline: 'tommorow',
        priority: 'p1'
    },
    {
        task: 'due dates for @todo items ',
        status: true,
        project: 'todo',
        priority: 'p2'
    },
    {
        task: 'project chips in @todo items',
        status: true,
        project: 'todo',
        priority: 'p2'
    },
    {
        task: 'project chips in @todo project',
        status: true,
        project: 'todo',
        priority: 'p3'
    },
    {
        task: 'extract project, date, pririty from @todo item today',
        status: true,
        project: 'todo',
        priority: 'p3'
    }
];