import { element } from "../html.js";
import { ErrorItemView } from "./ErrorItemView.js";

export class ErrorListView {
  createElement(errorItems) {
    if (errorItems.length) {
      const errorListElement = element`<ul />`;
      errorItems.forEach(errorItem => {
        const errorItemView = new ErrorItemView(errorItem);
        const errorItemElement = errorItemView.createElement(errorItem);
        errorListElement.appendChild(errorItemElement);
      });
      return errorListElement;
    }
  }
}
