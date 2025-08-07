function openImage(img) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  modalImg.src = img.src;
  modal.style.display = 'flex';
}

function closeImage() {
  document.getElementById('modal').style.display = 'none';
}
