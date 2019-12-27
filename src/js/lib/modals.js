import MicroModal from "micromodal";

document.addEventListener("click", ({ target }) => {
  const modalTrigger = target.closest("[data-modal]");
  if (modalTrigger) {
    MicroModal.show("modal", {
      disableScroll: true
    });
  }
});
