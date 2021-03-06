export class User {
    constructor(public email: String,
        public id: String,
        private _token: String,
        private _tokenExpirationDate: Date) {

    }

    get token() :String {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }

    get tokenExpirationDate():Date{
        return this._tokenExpirationDate;
    }
}