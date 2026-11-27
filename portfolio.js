const copyButton = document.querySelector("#copy-email");
const emailLink = document.querySelector("#email-link");
const feedback = document.querySelector("#copy-feedback");
const email = emailLink.getAttribute("href").slice("mailto:".length);

copyButton.hidden = false;
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    feedback.textContent = "Adresse email copiée.";
  } catch {
    feedback.textContent = "Sélectionnez l’adresse affichée pour la copier.";
  }
});
