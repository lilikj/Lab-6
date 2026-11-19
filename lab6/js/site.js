document.querySelectorAll("dialog.drawer, dialog.dialog").forEach((surface) => {
  const eventName = surface.classList.contains("drawer") ? "shown.bs.drawer" : "shown.bs.dialog";
  surface.addEventListener(eventName, () => surface.querySelector("[data-bs-dismiss]")?.focus());
});

document.querySelectorAll(".navbar .drawer .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const drawer = link.closest("dialog.drawer");
    if (drawer?.open) drawer.querySelector('[data-bs-dismiss="drawer"]')?.click();
  });
});

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = String(new FormData(contactForm).get("firstName") ?? "").trim() || "there";
  formStatus.textContent = `Thanks, ${firstName}. Your note is ready in this demo; nothing was sent.`;
  formStatus.hidden = false;
});
