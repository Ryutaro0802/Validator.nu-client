import { element } from "../html.js";
import { ErrorItemView } from "./ErrorItemView.js";

export class ErrorListView {
  createElement(errorItems) {
    console.log(errorItems);
    if (errorItems.length) {
      const errorListElement = element`<ul />`;
      errorListElement.classList.add('error-list');
      errorItems.forEach(errorItem => {
        const errorItemView = new ErrorItemView(errorItem);
        const errorItemElement = errorItemView.createElement(errorItem);
        errorListElement.appendChild(errorItemElement);
      });
      return errorListElement;
    }
  }
}
