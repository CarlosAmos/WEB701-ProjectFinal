class User {
    constructor(id, fullName, emailAddress, password, party) {
        this.id = id;
        this.fullName = fullName;
        this.emailAddress = emailAddress;
        this.password = password;
        this.party = party;
    }
}


module.exports = User;