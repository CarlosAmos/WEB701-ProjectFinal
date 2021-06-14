class Listing {
    constructor(id, listingName, donator, itemQuantity, items, description, donatorID ) {
        this.id = id;
        this.listingName = listingName;
        this.donator = donator;
        this.itemQuantity = itemQuantity;
        this.items = items
        this.description = description;
        this.donatorID = donatorID;
    }
}

module.exports = Listing;