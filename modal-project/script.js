const openModal = document.getElementById("open-modal");
const modalContent = document.getElementById("modal-content");
const closeModal = document.getElementById("close-modal");

openModal.addEventListener("click", function(){
    modalContent.style.display = "block";
});

closeModal.addEventListener("click", function(){
    modalContent.style.display = "none";
});