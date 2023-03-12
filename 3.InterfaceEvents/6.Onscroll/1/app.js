function populate() {
  while(true) {
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

    if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
      document.body.insertAdjacentHTML("beforeend", `<p>Дата: ${new Date()}</p>`);
    }
  }
}