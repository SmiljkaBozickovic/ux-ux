document.querySelectorAll("[data-dialog-target]").forEach((trigger) => {
    const dialogId = trigger.getAttribute("data-dialog-target");
    const dialog = dialogId ? document.getElementById(dialogId) : null;

    if (!(dialog instanceof HTMLDialogElement)) {
        throw new Error(`Project dialog not found: ${dialogId}`);
    }

    trigger.addEventListener("click", () => dialog.showModal());
});

document.querySelectorAll(".project-dialog").forEach((dialog) => {
    const closeButton = dialog.querySelector("[data-dialog-close]");

    if (!(closeButton instanceof HTMLButtonElement)) {
        throw new Error(`Close button not found for dialog: ${dialog.id}`);
    }

    closeButton.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
});
