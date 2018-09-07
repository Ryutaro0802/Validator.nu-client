import { render } from "./html.js";
import { ErrorListView } from "./view/ErrorListView.js";
import { ErrorItemListModel } from "./model/ErrorItemListModel.js";
import { ErrorItemModel } from "./model/ErrorItemModel.js";

export class App {
  constructor() {
    this.errorListView = new ErrorListView();
  }

  fetch() {
    const params = new URLSearchParams();
    params.set("doc", "https://www.google.com/");
    params.set("out", "json");
    params.set("level", "error");
    function fetchData(url, data) {
      return fetch(url).then(response => response.json());
    }
    fetchData(`https://html5.validator.nu/?${params.toString()}`).then(
      data => this.mount(data.messages)
    );
  }

  mount(messages) {
    const appElement = document.getElementById("app");
    let errors = [];
    messages.forEach(message => {
      console.log(message);
      errors.push(new ErrorItemModel({
          extract: message.extract,
          line: message.lastLine,
          message: message.message
        }));
    });
    this.errorItemListModel = new ErrorItemListModel((errors = errors));
    const errorItems = this.errorItemListModel.getErrors();
    const errorListElement = this.errorListView.createElement(errorItems);
    render(errorListElement, appElement);
  }
}
