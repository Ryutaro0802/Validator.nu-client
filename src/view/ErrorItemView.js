import { element } from "../html.js";

export class ErrorItemView {
  createElement(errorItem) {
    return element`<li class="error-list-item">
            <div>${errorItem.extract}</div>
            <div>${errorItem.line}</div>
            <div>${errorItem.message}</div>
        </li>`;
  }
}
