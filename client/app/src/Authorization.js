{/* Main certain pages only available to users who are authenticated (ex: administrators for edit alarm data page
    
    Used to track the login status */}

class Authorization {
    constructor() {
        this.authenticated = false
    }

    login(cb) {
        this.authenticated = true
        cb()
    }

    logout(cb) {
        this.authenticated = false
        cb()
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Authorization()