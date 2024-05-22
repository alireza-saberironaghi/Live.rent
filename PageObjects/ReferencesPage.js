import { expect } from "@playwright/test"

export class ReferencesPage {
    constructor(page) {
        this.page = page
        this.addReferenceButtonEle = page.getByRole('button', { name: '+ Add Reference' })
        this.referenceFirstNameEle = page.getByRole('textbox', { name: 'First name' })
        this.referenceLastNameEle = page.getByRole('textbox', { name: 'Last name' })
        this.referenceCompanyNameEle = page.getByRole('textbox', { name: 'Company name' })
        this.referencePositionEle = page.getByRole('textbox', { name: 'Position' })
        this.referenceEmailEle = page.getByRole('textbox', { name: 'Email' })
        this.referencePhoneEle = page.getByRole('textbox', { name: 'Phone number' })
        this.referenceCurrentlyWorkCheckboxEle = page.locator('.sc-fUBkdm')
        this.referenceStartDateEle = page.locator('.sc-JrDLc')
        this.confirmReferenceButtonEle = page.locator('.jBJqLo .gZAbUx')
        this.referenceCardEle = page.locator('.ieAanK')
    }



    addReference = async (validReferenceInfo) => {

        const cardsBefore = await this.referenceCardEle.count()

        await this.addReferenceButtonEle.click()
        await this.addReferenceButtonEle.waitFor()
        await this.referenceFirstNameEle.fill(validReferenceInfo.firstName)
        await this.referenceLastNameEle.fill(validReferenceInfo.lastName)
        await this.referenceCompanyNameEle.fill(validReferenceInfo.companyName)
        await this.referencePositionEle.fill(validReferenceInfo.position)
        await this.referenceEmailEle.fill(validReferenceInfo.email)
        await this.referencePhoneEle.fill(validReferenceInfo.tel)


        await this.referenceStartDateEle.click()

        let date = new Date()
        date.setDate(date.getDate() - 1)
        const expectedDate = date.getDate().toString()
        const expectedMonthShort = date.toLocaleString('En-US', { month: 'short' })
        const expectedYear = date.getFullYear()
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`

        await this.page.locator(".sc-lcIPJg").getByText(expectedDate, { exact: true }).click()
        await this.confirmReferenceButtonEle.click()

        await expect(this.referenceCardEle).toHaveCount(cardsBefore + 1)

    }












}