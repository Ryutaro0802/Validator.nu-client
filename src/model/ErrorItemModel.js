export class ErrorItemModel {
  constructor({ id, extract, line, message }) {
    this.id = id;
    this.extract = extract;
    this.line = line;
    this.message = message;
  }
}
