export class App {
  mount() {
    const params = new URLSearchParams();
    params.set("doc", "https://www.google.com/");
    params.set("out", "json");
    params.set("level", "error");

    function fetchData(url, data) {
      return fetch(url).then(response => response.json())
    }
    
    fetchData(`https://html5.validator.nu/?${params.toString()}`)
      .then(data => console.log(data.messages));
  }
}
