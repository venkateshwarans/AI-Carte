const modalToggle = (id) => {
  const modal = document.getElementById(id);
  modal.classList.toggle('show-modal');
}

const toastToggle = (id) => {
  const toast =  document.querySelector(`#${id}`);
  toast.classList.toggle('show-toast');

  setTimeout(() => {
    if(toast.classList.contains('show-toast')){
      toast.classList.remove('show-toast');
    }
  } , 3000);
}
