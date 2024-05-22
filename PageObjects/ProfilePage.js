import { expect } from "@playwright/test"

export class ProfilePage {
    constructor(page) {
        this.page = page
        this.avatarEle = page.locator('[name="avatarInput"]')
        this.viewProfileEle = page.getByRole('link', { name: 'View profile' })
        this.becomeTrustedEle = page.getByRole('label', { name: 'Become Trusted' })
        this.basicInfoEle = page.getByRole('label', { name: 'Basic Information' })
        this.preferencesEle = page.getByRole('label', { name: 'Preferences' })
        this.accountSettingsdEle = page.getByRole('label', { name: 'Account Settings' })
        this.referencesTabEle = page.getByRole('link', { name: 'References' })
        this.extraInfoTabEle = page.getByRole('link', { name: 'Extra Info' })
        this.headerTitleEle = page.locator('#header-title')


    }




    clickOnViewProfile = async () => {
        await this.viewProfileEle.click()
        await this.page.waitForURL(/profile\/basic-info/, { timeout: 5000 })

        await expect(this.headerTitleEle).toHaveText('Profile')

    }

    uploadAvatar = async () => {
        await this.page.setInputFiles('[name="avatarInput"]', 'TestData/img1.png')
    }

    clickOnReferencesTab = async () => {
        await this.referencesTabEle.click()
        await this.page.waitForURL(/profile\/references/, { timeout: 5000 })



    }


    clickOnExtraInfoTab = async () => {
        await this.extraInfoTabEle.click()
        await this.page.waitForURL(/profile\/extra-info/, { timeout: 5000 })










    }
}