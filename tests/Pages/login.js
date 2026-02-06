export class LoginPage {
    usernameTextbox
    passwordTextbox
    loginButton
 
    constructor(page1) {
        this.usernameTextbox = page1.locator('[id="user-name"]')
        this.passwordTextbox = page1.locator('[id="password"]')
        this.loginButton = page1.locator('[id="login-button"]')
    }
 
    async fillUsername(username) {
        await this.usernameTextbox.fill(username)
    }
 
    async fillPassword(password) {
        await this.passwordTextbox.fill(password)
    }
 
    async clickLoginButton() {
        await this.loginButton.click()
    }
}