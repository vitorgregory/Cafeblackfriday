const form = document.getElementById('form')
const botao = document.getElementById('botao')

form.addEventListener('click', (e) => {
  e.preventDefault();
  let email = document.getElementById('email').value;
  let data = {
    email,
  }
  let convertData = JSON.stringify(data);
  console.log('data', convertData)
  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

})