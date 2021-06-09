class Listing {
    constructor(id, listingName, donator, itemQuantity, description, donatorID ) {
        this.id = id;
        this.listingName = listingName;
        this.donator = donator;
        this.itemQuantity = itemQuantity;
        this.description = description;
        this.donatorID = donatorID;
    }
}

module.exports = Listing;