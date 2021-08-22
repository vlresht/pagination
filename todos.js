let todos = [
  {
    title: "do 1something",
    id: 1,
    checked: false,
  },
  {
    title: "do 2something",
    id: 2,
    checked: false,
  },
  {
    title: "do 3something",
    id: 3,
    checked: false,
  },
  {
    title: "do 4something",
    id: 4,
    checked: false,
  },
  {
    title: "do 5something",
    id: 5,
    checked: false,
  },
  {
    title: "do 6something",
    id: 6,
    checked: false,
  },
  {
    title: "do 7something",
    id: 1,
    checked: false,
  },
  {
    title: "do 8something",
    id: 2,
    checked: false,
  },
  {
    title: "do 9something",
    id: 3,
    checked: false,
  },
  {
    title: "do 10something",
    id: 4,
    checked: false,
  },
  {
    title: "do 11something",
    id: 5,
    checked: false,
  },
  {
    title: "do 12something",
    id: 6,
    checked: false,
  },
]

const todosContainer = document.querySelector('.list');
const paginationElement = document.querySelector('.pagination');
let currentPage = 1;

function render(page) {
  todosContainer.innerHTML = '';
  paginationElement.innerHTML = '';
  page--;
  let pages = Math.ceil(todos.length / 5);
  console.log(pages);
  let start = 5 * page;
  let end = start + 5;
  const todosToDisplay = todos.slice(start, end);
  let str = '';
  todos.slice(start, end).forEach((todo) => {
    str += `<div class="todo"><h2 class="todo__title">${todo.title}</h2></div>`;
  })

  let str2 = '';
  for (let i = 0; i < pages; i++) {
    str2 += `<button class="pagination__button">${i+1}</button>`
  }

  paginationElement.innerHTML = str2;
  todosContainer.innerHTML = str;

  const buttons = document.querySelectorAll('.pagination__button');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const pageToRender = button.innerHTML;
      render(pageToRender);
    })
  })
}

render(1);