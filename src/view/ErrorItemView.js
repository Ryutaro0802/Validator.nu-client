import { element } from "../html.js";

export class ErrorItemView {
  createElement(errorItem) {
    return element`<li class="error-list-item">
            <div>Extract: ${errorItem.extract}</div>
            <div>Line: ${errorItem.line}</div>
            <div>Message: ${errorItem.message}</div>
        </li>`;
  }
}
