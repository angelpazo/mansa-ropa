const pass = document.getElementById("pass")
      icon = document.querySelector(".bx")

icon.addEventListener("click", _e => {
    if(pass.type == 'password') {
        pass.type = 'text';
        icon.classList.remove('bx bxs-low-vision')
        icon.classList.add('bx-hide')
    } else{
        pass.type = "password"
        icon.classList.add('bx bxs-low-vision')
        icon.classList.remove('bx-hide')
    }
})
