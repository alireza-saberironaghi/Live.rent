import { test, expect } from '@playwright/test'
import { Header } from '../PageObjects/Header'
import { ProfilePage } from '../PageObjects/ProfilePage'
import { BasicInfoPage } from '../PageObjects/BasicInfoPage'
import { ReferencesPage } from '../PageObjects/ReferencesPage'
import { ExtraInfoPage } from '../PageObjects/ExtraInfoPage'
import { validRenterLoginInfo, validPetInfo, validUpdatePetInfo, validReferenceInfo, validAutomobileInfo } from '../TestData/testData.js'
import { SidebarPanel } from '../PageObjects/SidebarPanel.js'
import { RentalListingsPage } from '../PageObjects/RentalListingsPage.js'

test.beforeEach(async ({ page }) => {
    await page.goto('https://liv.rent/')
})


test('Verify renter login functionality with correct credentials', async ({ page }) => {

    const onHeader = new Header(page)
    await onHeader.performLogIn(validRenterLoginInfo)

})


test('Verify renter add pet functionality with correct information', async ({ page }) => {

    const onHeader = new Header(page)
    await onHeader.performLogIn(validRenterLoginInfo)
    await onHeader.gotoProfilePage()
    const onProfilePage = new ProfilePage(page)
    await onProfilePage.clickOnViewProfile()
    const onBasicInfoPage = new BasicInfoPage(page)
    await onBasicInfoPage.addPet(validPetInfo)

})

test('Verify renter update pet functionality', async ({ page }) => {

    const onHeader = new Header(page)
    await onHeader.performLogIn(validRenterLoginInfo)
    await onHeader.gotoProfilePage()
    const onProfilePage = new ProfilePage(page)
    await onProfilePage.clickOnViewProfile()
    const onBasicInfoPage = new BasicInfoPage(page)
    await onBasicInfoPage.editPet(validUpdatePetInfo)

})


test('Verify renter delete pet functionality', async ({ page }) => {

    const onHeader = new Header(page)
    await onHeader.performLogIn(validRenterLoginInfo)
    await onHeader.gotoProfilePage()
    const onProfilePage = new ProfilePage(page)
    await onProfilePage.clickOnViewProfile()
    const onBasicInfoPage = new BasicInfoPage(page)
    await onBasicInfoPage.deletePet()

})



test("Verify 'do not have pet' checkbox functionality", async ({ page }) => {

    const onHeader = new Header(page)
    await onHeader.performLogIn(validRenterLoginInfo)
    await onHeader.gotoProfilePage()
    const onProfilePage = new ProfilePage(page)
    await onProfilePage.clickOnViewProfile()
    const onBasicInfoPage = new BasicInfoPage(page)
    await onBasicInfoPage.checkDonotHavePet()

})


test('Verify renter add reference functionality with correct information', async ({ page }) => {

    const onHeader = new Header(page)
    await onHeader.performLogIn(validRenterLoginInfo)
    await onHeader.gotoProfilePage()
    const onProfilePage = new ProfilePage(page)
    await onProfilePage.clickOnViewProfile()
    await onProfilePage.clickOnReferencesTab()
    const onReferencesPage = new ReferencesPage(page)
    await onReferencesPage.addReference(validReferenceInfo)

})


test('Verify renter add automobile functionality with correct information', async ({ page }) => {

    const onHeader = new Header(page)
    await onHeader.performLogIn(validRenterLoginInfo)
    await onHeader.gotoProfilePage()
    const onProfilePage = new ProfilePage(page)
    await onProfilePage.clickOnViewProfile()
    await onProfilePage.clickOnExtraInfoTab()
    const onExtraInfoPage = new ExtraInfoPage(page)
    await onExtraInfoPage.addAutomobile(validAutomobileInfo)


})
test.only('Verify add to favorite listing functionality', async ({ page }) => {

    const onHeader = new Header(page)
    await onHeader.performLogIn(validRenterLoginInfo)
    await onHeader.gotoProfilePage()
    const onSidebarPanel = new SidebarPanel(page)
    await onSidebarPanel.gotoBrowseListing()
    const onRentallistingsPage = new RentalListingsPage(page)
    await onRentallistingsPage.addToFavorite(0)
    await onRentallistingsPage.addToFavorite(1)

})








