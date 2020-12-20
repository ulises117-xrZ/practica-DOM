let array = document.getElementById("array");
const div = document.querySelector('.addButon');

const lista = ['juan ','pedro ','marcos ', 'alberto'];
const objeto = {
    nombre: 'Aliso Cerna',
    edad: 14
}
const boton = document.querySelector('.botn');
const h3 = document.querySelector('.h3baby');
h3.textContent = "si presiona aparecera un array en una lista desordenada"

boton.textContent = "agregar"
boton.addEventListener('click',()=>{
    let fragmento = document.createDocumentFragment();
    h3.textContent = "esto es un array mostrado en una listas"
    for (nombres in lista){
        let info = lista[nombres]
        let li = document.createElement('li');
        li.innerHTML = info;
        fragmento.appendChild(li);
    }
    
    array.appendChild(fragmento);
    boton.textContent = "eliminar";
    boton.addEventListener('click',()=>{
        array.remove(lista);
        div.remove(boton);
        h3.textContent = 'refresca la pagina para verlo de nuevo'
        alert("listo, solo tenias un intento")
    })

})