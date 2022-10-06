

function ColorScheme(){
    
const icon=document.getElementById('colorSwitcher');
const body=document.querySelector('body')



if(icon.classList.contains("d")){
    icon.classList.replace('d','l')
    body.classList.add('dark')
    icon.textContent='light_mode'
}else{
    icon.classList.replace('l','d')
    body.classList.remove('dark')
    icon.textContent='dark_mode'
}
}

