import { test, expect } from '@playwright/test'

export class Header {
    constructor(page) {
        this.page = page
        this.headerMenuButtonEle = page.locator('#btn-menu')
        this.headerMenuDropdownEle = page.locator('.header-menu-dropdown')
        this.logInTextEle = page.getByRole('button', { name: 'Log In' })
        this.loginModalEle = page.locator('.cgfTEX')
        this.loginEmailEle = page.getByPlaceholder('Email or phone number')
        this.loginPasswordEle = page.getByPlaceholder('Password')
        this.loginButtonEle = page.locator('#web-LoginSocial-submit-button')
        // Logged
        this.profileLoggedButtonEle = page.locator('#menu-account-logged-profile')
        this.chatLoggedButtonEle = page.locator('#menu-manage-logged-chat')
        this.rentalsLoggedButtonEle = page.locator('#menu-manage-logged-rentals')
        this.favoritesLoggedButtonEle = page.locator('#menu-manage-logged-favourites')
        this.savedAlertsLoggedButtonEle = page.locator('#saved-alerts-menu-click')
        this.settingsLoggedButtonEle = page.locator('#menu-account-logged-settings')
        this.logoutLoggedButtonEle = page.locator('#menu-account-logged-logout')
        this.landingHeadingEle = page.getByRole('heading', { name: "Canada's Safest Rental Platform" })

    }




    clickOnHeaderMenuButton = async () => {
        await this.headerMenuButtonEle.click()
        await this.headerMenuDropdownEle.waitFor()
    }

    performLogIn = async (validRenterLoginInfo) => {
        await this.clickOnHeaderMenuButton()
        await this.logInTextEle.click()
        await this.loginModalEle.waitFor()
        await this.loginEmailEle.fill(validRenterLoginInfo.email)
        await this.loginPasswordEle.fill(validRenterLoginInfo.password)
        await this.loginButtonEle.click()
        await this.page.waitForResponse('https://be-prod.liv.rent/auth/login')

        await expect(this.page).toHaveTitle(/Condos/);
        await expect(this.landingHeadingEle).toHaveText("Canada's Safest Rental Platform")
    }

    gotoProfilePage = async () => {
        await this.clickOnHeaderMenuButton()
        await this.profileLoggedButtonEle.click()
        // await this.page.waitForURL(/app\/profile/, {timeout: 5000})

        await expect(this.page).toHaveTitle(/Dashboard/)

    }

    gotoChatPage = async () => {
        await this.clickOnHeaderMenuButton()
        await this.chatLoggedButtonEle.click()
        await this.page.waitForURL(/app\/chat/, { timeout: 5000 })

        await expect(this.page).toHaveTitle(/Chat/)
    }

    gotoYourRentalsPage = async () => {
        await this.clickOnHeaderMenuButton()
        await this.rentalsLoggedButtonEle.click()
        await this.page.waitForURL(/app\/rentals/, { timeout: 5000 })

    }

    gotoFavoritesPage = async () => {
        await this.clickOnHeaderMenuButton()
        await this.favoritesLoggedButtonEle.click()
        await this.page.waitForURL(/\/favourites/, { timeout: 5000 })

    }

    gotoSavedAlertsPage = async () => {
        await this.clickOnHeaderMenuButton()
        await this.savedAlertsLoggedButtonEle.click()
        await this.page.waitForURL(/\/saved-alerts/, { timeout: 5000 })

    }

    gotoSettingsPage = async () => {
        await this.clickOnHeaderMenuButton()
        await this.settingsLoggedButtonEle.click()
        await this.page.waitForURL(/\/app\/settings\/payment-settings/gm, { timeout: 5000 })

    }

    logout = async () => {
        await this.clickOnHeaderMenuButton()
        await this.logoutLoggedButtonEle.click()

    }






}