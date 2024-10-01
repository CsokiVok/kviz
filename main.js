import './style.css'
import './node_modules/bootstrap/dist/css/bootstrap.css'

document.addEventListener('DOMContentLoaded',()=>{
  const Szamlalo = document.getElementById('szamlalo')
  const Kerdes1 = document.getElementById('kerdes1')  
  const Kerdes2 = document.getElementById('kerdes2')  
  const Kerdes3 = document.getElementById('kerdes3')  
  const Kerdes4 = document.getElementById('kerdes4')  
  const Kerdes5 = document.getElementById('kerdes5')
  const Kiiras = document.getElementById('kiiras')


  document.getElementById("KvizForm").addEventListener("submit", (e) => {
    e.preventDefault();

    if(Kerdes1.value == "1969"){
      Szamlalo.value ++
    }
    if(Kerdes2.value == "Budapest"){
      Szamlalo.value ++
    }
    if(Kerdes3.value == "H2O"){
      Szamlalo.value ++
    }
    if(Kerdes4.value == "366"){
      Szamlalo.value ++
    }
    if(Kerdes5.value == "Csendes-óceán"){
      Szamlalo.value ++
    }
    Kiiras.textContent = "Elért pontok " + Szamlalo.value +"/5" 
  })
})