import { element } from "../html.js";

export class ErrorItemView {
    createElement(errorItem) {
        return element`<li>
            <div>${errorItem.extract}</div>
            <div>${errorItem.line}</div>
            <div>${errorItem.message}</div>
            </li>`;
  }
}
