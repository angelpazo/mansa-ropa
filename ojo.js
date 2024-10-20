const pass = document.getElementById("pass")
      icon = document.querySelector(".bx")

icon.addEventListener("click", click => {
    if (pass.type == "password") {
        pass.type = "text";
        icon.classList.remove('bx bxs-low-vision')
        icon.classList.add('bx bx-show-alt')
    } else{
        pass.type = "password"
        icon.classList.add('bx bxs-low-vision')
        icon.classList.remove('bx bx-show-alt')
    }
})