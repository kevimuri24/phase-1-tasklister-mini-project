// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });
function handleNewTask(task){
  const li = document.createElement('li')
  const removeTask = document.createElement('button')
  removeTask.textContent = 'x'
  li.textContent = task + ' '
  li.appendChild(removeTask)

  document.querySelector('#tasks').appendChild(li)

  removeTask.addEventListener('click', (e)=>{
    e.target.parentNode.remove()
  })
}

const submit = document.querySelector('input[type=submit]')
submit.addEventListener('click', function(e){
  e.preventDefault()
  const inputValue = document.querySelector('#new-task-description')
  handleNewTask(inputValue.value)
})