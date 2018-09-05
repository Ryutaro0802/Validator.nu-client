export class App {
  mount() {
    const params = new URLSearchParams();
    params.set("doc", "https://www.google.com/");
    params.set("out", "json");
    params.set("level", "error");

    fetch("http://html5.validator.nu/?" + params.toString())
      .then(response => {
        console.log("response");
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
