import { test, expect } from '@playwright/test'

export class RentalListingsPage {
    constructor(page) {
        this.page = page
        this.sponsoredListingCardEle = page.locator('.bvUfhG')
        this.sponsoredListingCardFavoriteEle = page.locator('.cFZvDt')
        this.viewYourFavoriteMessageEle = page.getByText('View your favourites')


    }

    addToFavorite = async (indexOlisting) => {
        await this.sponsoredListingCardEle.first().waitFor()
        // await this.page.waitForResponse('https://nemesis-prod.liv.rent/graphql')
        // await expect(this.page).toHaveTitle(/Houses and Rooms for Rent/, {timeout: 10000})
        await expect(this.page).toHaveTitle(/Houses and Rooms for Rent/, { timeout: 10000 })


        await this.sponsoredListingCardFavoriteEle.nth(indexOlisting).click()
        await this.viewYourFavoriteMessageEle.waitFor()
        await this.viewYourFavoriteMessageEle.click()

        // await this.page.waitForURL(/\/favourites/, {timeout: 10000})
        // await expect(this.page.locator('h1')).toHaveText('Favourites')

        // continue on assertions



    }


}