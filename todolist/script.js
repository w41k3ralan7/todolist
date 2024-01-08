document.addEventListener('DOMContentLoaded', function () {

    var addTaskButton = document.getElementById("add");
    var list = document.getElementById("list");

    var themebtn = document.querySelector('.theme');
    var circle = document.querySelector('.sunmoon');

    loadTasks();

    addTaskButton.addEventListener("click", function () {
        addNewTask();
    });


    list.addEventListener("click", function (event) {
        if (event.target.id === "del") {
            var parentdiv = event.target.closest("#task");
            if (parentdiv) {
                parentdiv.remove();
                saveTasks(); // Update localStorage after removing a task
            }
        } else if (event.target.id === "clr") {
            var parentTask = event.target.closest("#task");
            if (parentTask) {
                var inputElement = parentTask.querySelector("#input");
                if (inputElement) {
                    inputElement.innerText = ""; // Clear the content of the <p> tag
                    saveTasks(); // Update localStorage after clearing content
                }
            }
        }
    });

    list.addEventListener("input", function (event) {
        if (event.target.id === "input") {
            saveTasks(); // Update localStorage as the content is typed
        }
    });

    function addNewTask() {
        var newTask = document.createElement("div");
        newTask.id = "task";

        var newParagraph = document.createElement("p");
        newParagraph.id = "input";
        newParagraph.contentEditable = "true";

        var optionsDiv = document.createElement("div");
        optionsDiv.id = "options";

        var deleteButton = document.createElement("button");
        deleteButton.id = "del";

        var clearButton = document.createElement("button");
        clearButton.id = "clr";

        newTask.appendChild(newParagraph);
        optionsDiv.appendChild(deleteButton);
        optionsDiv.appendChild(clearButton);
        newTask.appendChild(optionsDiv);

        list.appendChild(newTask);

        saveTasks(); // Update localStorage after adding a new task
    }

    function saveTasks() {
        var tasks = [];

        // Iterate through each task and store its content
        var taskElements = document.querySelectorAll("#list #task");
        taskElements.forEach(function (taskElement) {
            var taskContent = taskElement.querySelector("#input").innerText;
            tasks.push(taskContent);
        });

        // Save the tasks array to localStorage
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        // Retrieve tasks array from localStorage
        var storedTasks = localStorage.getItem("tasks");

        if (storedTasks) {
            var tasks = JSON.parse(storedTasks);

            // Iterate through the tasks array and add each task to the list
            tasks.forEach(function (taskContent) {
                var newTask = document.createElement("div");
                newTask.id = "task";

                var newParagraph = document.createElement("p");
                newParagraph.id = "input";
                newParagraph.contentEditable = "true";
                newParagraph.innerText = taskContent;

                var optionsDiv = document.createElement("div");
                optionsDiv.id = "options";

                var deleteButton = document.createElement("button");
                deleteButton.id = "del";

                var clearButton = document.createElement("button");
                clearButton.id = "clr";

                newTask.appendChild(newParagraph);
                optionsDiv.appendChild(deleteButton);
                optionsDiv.appendChild(clearButton);
                newTask.appendChild(optionsDiv);

                list.appendChild(newTask);
            });
        }
    }

    var btndel = document.querySelectorAll('#del');
    var btnclr = document.querySelectorAll('#clr');
    var btnadd = document.querySelector('#add');
    var mainborder = document.querySelector('.main');
    var taskborder = document.querySelectorAll('#task');
    var inptext = document.querySelectorAll('#input');
    var mainbox = document.querySelector('.main');
    let flagtheme = true;

    themebtn.addEventListener("click", function () {

        if (flagtheme) {
            themebtn.style.backgroundColor = 'gray';
            circle.style.backgroundColor = 'white';
            circle.style.boxShadow = 'rgba(34, 112, 181) 0px 22px 70px 4px';
            mainbox.style.boxShadow = 'rgba(245, 148, 57, 0.613) 0px 1px 1px 0px inset, rgba(239, 181, 54, 0.479) 0px 50px 100px -20px, rgba(237, 171, 71, 0.63) 0px 20px 20px -20px';


            document.body.style.background = '#240046';
            mainborder.style.borderColor = '#ff9e00';
            mainborder.style.borderWidth = '2px';
            document.querySelector('#nav').style.color = '#ff9e00';

            circle.style.transform = 'translateX(90px)';

            taskborder.forEach(function (taskElement) {
                taskElement.style.borderColor = '#ff9e00';
                taskElement.style.borderWidth = '2px';
            });

            inptext.forEach(function (inputElement) {
                inputElement.style.color = '#ff9e00';
            });


            btnadd.style.filter = 'invert(.8)';
            btndel.forEach(function (button) {
                button.style.filter = 'invert(.8)';
            });

            btnclr.forEach(function (button) {
                button.style.filter = 'invert(.8)';
            });

        } else {

            themebtn.style.backgroundColor = 'rgb(28, 139, 241)';
            circle.style.backgroundColor = 'rgb(255, 244, 83)';
            circle.style.boxShadow = 'rgb(255, 242, 139) 0px 22px 70px 10px';
            mainbox.style.boxShadow = 'rgba(75, 206, 218, 0.1) 0px 1px 1px 0px inset, rgba(75, 206, 218, 0.1) 0px 50px 100px -20px, rgba(75, 206, 218, 0.1) 0px 30px 60px -30px';


            document.body.style.background = '#ffffff';
            mainborder.style.borderColor = 'rgb(74,73,73)';
            mainborder.style.borderWidth = '2px';
            document.querySelector('#nav').style.color = 'rgb(101, 101, 101)';

            circle.style.transform = 'translateX(0%)';

            taskborder.forEach(function (taskElement) {
                taskElement.style.borderColor = 'rgb(175,175,175)';
                taskElement.style.borderWidth = '2px';
            });

            inptext.forEach(function (inpElement) {
                inpElement.style.color = 'rgb(47, 94, 135)';
            });


            btnadd.style.filter = 'invert(.3)';

            btndel.forEach(function (button) {
                button.style.filter = 'invert(.3)';
            });
            btnclr.forEach(function (button) {
                button.style.filter = 'invert(.3)';
            });
        }
        flagtheme = !flagtheme;
    })
});


