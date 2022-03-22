/* eslint-disable import/prefer-default-export */
async function addTask(id, name, description, categoryId) {
  const url = 'http://localhost:8089/api/ToDoList/AddTask';
  const data = {
    id,
    name,
    description,
    categoryId,
  };

  try {
    const response = await fetch(url, {
      method: 'POST', // или 'PUT'
      body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('Успех:', JSON.stringify(json));
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

async function addCategory(id, name, description) {
  const url = 'http://localhost:8089/api/ToDoList/AddCategory';
  const data = {
    id,
    name,
    description,
  };

  try {
    const response = await fetch(url, {
      method: 'POST', // или 'PUT'
      body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('Успех:', JSON.stringify(json));
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

async function editTask(id, name, description, categoryId) {
  const url = 'http://localhost:8089/api/ToDoList/UpdateTask';
  const data = {
    id,
    name,
    description,
    categoryId,
  };

  try {
    const response = await fetch(url, {
      method: 'POST', // или 'PUT'
      body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('Успех:', JSON.stringify(json));
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

async function editCategory(id, name, description) {
  const url = 'http://localhost:8089/api/ToDoList/UpdateCategory';
  const data = {
    id,
    name,
    description,
  };

  try {
    const response = await fetch(url, {
      method: 'POST', // или 'PUT'
      body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('Успех:', JSON.stringify(json));
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

function deleteTask(id) {
  fetch(`http://localhost:8089/api/ToDoList/RemoveTask/${id}`);
}
export {
  addTask, addCategory, editTask, editCategory, deleteTask,
};
