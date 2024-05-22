import { test, expect } from '@playwright/test'

export class BasicInfoPage {
    constructor(page) {
        this.page = page
        this.editButtonEle = page.getByRole('button', { name: 'Edit' })
        this.addpetButtonEle = page.getByRole('button', { name: '+ Add Pet' })
        this.addEmergencyContactButtonEle = page.getByRole('button', { name: '+ Add Emergency Contact' })
        //pet
        this.petAvatarEle = page.locator('.ggyyYP [name="avatarInput"]')
        this.petNameEle = page.getByRole('textbox', { name: 'Pet name' })
        this.typeOfPetEle = page.getByRole('textbox', { name: 'Type of pet' })
        this.birthYearEle = page.getByRole('textbox', { name: 'Birth year' })
        this.breedEle = page.getByRole('textbox', { name: 'Breed' })
        this.sizeEle = page.locator('.value-container')
        this.addPetButtonEle = page.locator('.bSnApp .gZAbUx')
        this.confirmPetButtonEle = page.locator("[class='sc-ikkxIA gZAbUx']")
        this.deletePetButtonEle = page.locator('.hACbZs')
        this.deletePetModalEle = page.locator('.eNzxex')
        this.deletePetConfirmButtonEle = page.locator('#yes_confirm')
        this.donotHavePetCheckboxEle = page.locator('.cbRtlG')
        this.cardEle = page.locator('[class="sc-hpGnlu ithZhd"]')
        this.deleteTextEle = page.locator('h1.sc-bCrHVQ')
        this.petRequiredtEle = page.locator(':text-is("Pets") [class="sc-fremEr jAuwkh"]')



    }



    editBasicInfo = async () => {
        await this.editButtonEle.click()
        await this.page.waitForURL(/\/profile\/edit/, { timeout: 5000 })

    }



    addPet = async (validPetInfo) => {
        const cardsBefore = await this.cardEle.count()

        await this.addpetButtonEle.click()
        await this.addpetButtonEle.waitFor()
        await this.page.setInputFiles('.ggyyYP [name="avatarInput"]', validPetInfo.avatarImg)
        await this.petNameEle.fill(validPetInfo.petName)
        await this.typeOfPetEle.fill(validPetInfo.typeOfPet)
        await this.birthYearEle.fill(validPetInfo.birthYear)
        await this.breedEle.fill(validPetInfo.breed)
        await this.sizeEle.click()
        await this.page.getByText(validPetInfo.size).click()
        await this.addPetButtonEle.click()

        await expect(this.cardEle).toHaveCount(cardsBefore + 1)

    }

    editPet = async (validUpdatePetInfo) => {

        await this.page.getByText('Edit').nth(1).click()

        await this.addpetButtonEle.waitFor()
        await this.page.setInputFiles('.ggyyYP [name="avatarInput"]', validUpdatePetInfo.avatarImg)
        await this.petNameEle.fill(validUpdatePetInfo.petName)
        await this.typeOfPetEle.fill(validUpdatePetInfo.typeOfPet)
        await this.birthYearEle.fill(validUpdatePetInfo.birthYear)
        await this.breedEle.fill(validUpdatePetInfo.breed)
        await this.sizeEle.click()
        await this.page.getByText(validUpdatePetInfo.size).click()
        await this.confirmPetButtonEle.click()

        await expect(this.petNameEle).toHaveText(validUpdatePetInfo.petName)

    }

    deletePet = async () => {
        const cardsBefore = await this.cardEle.count()

        await this.page.getByText('Edit').nth(1).click()
        await this.addpetButtonEle.waitFor()
        await this.deletePetButtonEle.click()
        await this.deletePetModalEle.waitFor()

        await expect(this.deleteTextEle).toHaveText('Delete Pet?')
        await this.deletePetConfirmButtonEle.click()

        await expect(this.cardEle).toHaveCount(cardsBefore - 1)


    }


    checkDonotHavePet = async () => {
        await this.donotHavePetCheckboxEle.check()

        await expect(this.addpetButtonEle).toHaveAttribute('disabled')
        await expect(this.petRequiredtEle).toBeVisible(true)


    }




    addEmergencyContact = async () => {
        await this.addEmergencyContactButtonEle.click()
    }









}