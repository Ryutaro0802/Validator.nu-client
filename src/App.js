import { render } from "./html.js";
import { ErrorListView } from "./view/ErrorListView.js";
import { ErrorItemListModel } from "./model/ErrorItemListModel.js";
import { ErrorItemModel } from "./model/ErrorItemModel.js";

export class App {
  constructor() {
    this.errorListView = new ErrorListView();
    // バッチ設定
    chrome.browserAction.setBadgeBackgroundColor({ color: "#eb5046" });
    chrome.browserAction.setBadgeText({ text: "0" });
  }

  fetch() {
    const fetchData = (url, data) => {
      return fetch(url).then(response => response.json());
    };

    chrome.tabs.getSelected(null, tab => {
      const params = new URLSearchParams();
      params.set("doc", tab.url);
      params.set("out", "json");
      params.set("level", "error");
      fetchData(`https://html5.validator.nu/?${params}`)
        .then(data => {
          this.mount(data.messages);
        })
        .catch(error => {
          alert(error);
        });
    });
  }

  mount(messages) {
    // バッチの設定
    chrome.browserAction.setBadgeText({ text: String(messages.length) });

    const appElement = document.getElementById("app");
    let errors = [];
    messages.forEach((message, index) => {
      errors.push(
        new ErrorItemModel({
          id: index,
          extract: message.extract,
          line: message.lastLine,
          message: message.message
        })
      );
    });
    this.errorItemListModel = new ErrorItemListModel((errors = errors));
    const errorItems = this.errorItemListModel.getErrors();
    const errorListElement = this.errorListView.createElement(errorItems);
    render(errorListElement, appElement);
  }
}
