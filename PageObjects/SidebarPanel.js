import { test, expect } from '@playwright/test'

export class SidebarPanel {
    constructor(page) {
        this.page = page
        this.browseListingEle = page.getByRole('link', { name: 'Browse Listings' })


    }

    gotoBrowseListing = async () => {
        await this.browseListingEle.click()

        await this.page.waitForURL(/\/rental-listings/, { timeout: 10000 })


    }




}