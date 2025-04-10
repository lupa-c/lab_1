const taskConatiner = document.getElementById("app");

// Lista de tareas mockeadas
let tasks = taskTitles.map((title, index) => {
  return new Task(title, taskDescriptions[index], getRandomFutureDate());
});
  function loadData() {
    const taskContainer = document.getElementById('taskContainer'); 
  
    if (tasks.length > 0) {
      taskContainer.innerHTML = '';
  
      tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'p-4 mb-2 bg-white rounded shadow';
  
        taskElement.innerHTML = `
          <h3 class="text-lg font-semibold">${task.title}</h3>
          <p class="text-gray-600">${task.description || ''}</p>
          <p class="text-sm text-gray-400 mt-1">${new Date(task.createdAt).toLocaleString()}</p>
        `;
  
        taskContainer.appendChild(taskElement);
      });
      // implementar el renderizado de las tareas
    } else {
      taskContainer.innerHTML = `
        <div class="text-center text-gray-400 text-2xl">
          No hay tareas
        </div>`;
    }
}

function postData(event) {
  event.preventDefault();

  try {
    // get form data
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();

    if (!title) {
      throw new Error("El título es obligatorio");
    }

    const task = {
      title,
      description,
      createdAt: new Date().toISOString()
    };
    saveTask(task);

    const form = event.target;
    form.reset();

    const modal = document.getElementById("task-modal");
    modal.checked = false;

    showNotification("Tarea añadida correctamente!");
  } catch (error) {
    console.error(error);
    showNotification("Error al añadir la tarea. Inténtalo de nuevo.");
  }
}


/**
 *  
 * task actions 
 * 
 * */

function saveTask(task) {
  // implementar la creación de la tarea
  
  console.log(task);

  loadData();
}

function deleteTask(id) {
  // implementar la eliminación de la tarea

  loadData();
}

/**
 * challenges
 * 
 * */

// Aqui implementar la logica para la busqueda de tareas
function handleChangeFindTask(event) {
  event.preventDefault();
}

// Aqui implementar la logica para eliminar tareas
function handleDeleteTask(id) {}

// Aqui implementar la ogica de ver la cnatidad de tareas

// Aqui implementar la logica de ver la cantidad de tareas completadas

// Aqui implementar la logica de ver la cantidad de tareas pendientes

// Aqui implementar la logica de ver la cantidad de tareas en progreso