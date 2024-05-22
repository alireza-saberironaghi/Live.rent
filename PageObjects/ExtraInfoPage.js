import { expect } from "@playwright/test"

export class ExtraInfoPage {
    constructor(page) {
        this.page = page
        this.addAutomobileButtonEle = page.getByRole('button', { name: '+ Add Automobile' })
        this.makeEle = page.getByRole('textbox', { name: 'Make' })
        this.modelEle = page.getByRole('textbox', { name: 'Model' })
        this.yearEle = page.getByRole('textbox', { name: 'Year' })
        this.ownerEle = page.locator('.value-container').first()
        this.licenceEle = page.getByRole('textbox', { name: 'Licence plate' })
        this.colourEle = page.getByRole('textbox', { name: 'Colour' })
        this.provinceEle = page.locator('#state')
        this.registerOwnerEle = page.getByPlaceholder('Registered owner')
        this.confirmAutomobile = page.locator('.sc-ecTevR .gZAbUx')
        this.extraCardEle = page.locator('.hpQGXK')

    }



    addAutomobile = async (validAutomobileInfo) => {
        const cardsBefore = await this.extraCardEle.count()

        await this.addAutomobileButtonEle.click()
        await this.makeEle.waitFor()
        await this.makeEle.fill(validAutomobileInfo.make)
        await this.modelEle.fill(validAutomobileInfo.model)
        await this.yearEle.fill(validAutomobileInfo.year)
        await this.ownerEle.click()
        await this.page.getByText(validAutomobileInfo.ownerType, { exact: true }).click()
        await this.licenceEle.fill(validAutomobileInfo.licencePlate)
        await this.colourEle.fill(validAutomobileInfo.colour)
        await this.provinceEle.fill(validAutomobileInfo.province)
        await this.page.getByText(validAutomobileInfo.province, { exact: true }).click()
        await this.registerOwnerEle.fill(validAutomobileInfo.registeredOwner)
        await this.confirmAutomobile.click()

        await expect(this.extraCardEle).toHaveCount(cardsBefore + 1)



    }












}