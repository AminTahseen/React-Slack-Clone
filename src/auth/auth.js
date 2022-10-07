class Auth {
  constructor() {
    this.authenticated = false;
    this.loggedInUser = null;
    this.masterChannel = null;
  }

  setLoggedInUser(user) {
    this.loggedInUser = user;
  }
  setMasterChannel(masterChannel) {
    this.masterChannel = masterChannel;
  }
  login(cb) {
    this.authenticated = true;
    cb();
  }
  logout(cb) {
    this.authenticated = false;
    this.loggedInUser = null;
    cb();
  }
  isAuthenticated() {
    return this.authenticated;
  }
  getLoggedInUser() {
    return this.loggedInUser;
  }
  getMasterChannel() {
    return this.masterChannel;
  }
}
export default new Auth();
