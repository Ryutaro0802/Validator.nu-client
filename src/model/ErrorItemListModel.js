export class ErrorItemListModel {
    constructor(errors = []) {
        this.errors = errors;
    }

    get totalCount() {
        return this.errors.length;
    }

    getErrors() {
        return this.errors;
    }
}