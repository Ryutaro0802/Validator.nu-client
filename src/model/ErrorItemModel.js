let index = 0;

export class ErrorItemModel {
  constructor({ extract, line, message }) {
    this.id = index++;
    this.extract = extract;
    this.line = line;
    this.message = message;
  }
}
