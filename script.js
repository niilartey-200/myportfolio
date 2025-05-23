const profile = document.getElementById("profile-photo");
const modal = document.getElementById("about-modal");
const confirmModal = document.getElementById("confirm-modal");
const confirmMessage = document.getElementById("btn")

confirmMessage.addEventListener("click", ()=>{
    confirmModal.style.display = "flex"
})

profile.addEventListener("mouseover", ()=>{ 
    modal.style.display = "flex"
} )


window.addEventListener("click", ()=>{
    modal.style.display = "none"
})

