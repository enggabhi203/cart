var initState = {
    shoppingItems: [
        {
            Name: "pencil",
            url: "../assets/P1.jpg",
            Price: 10,
            Rating: 3,
            gender: 'female',
            discount: 5,
            isOfferapp: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adique labore 1.'
        },
        {
            Name: "note pad",
            url: "../assets/T1.jpg",
            Price: 15,
            Rating: 5,
            gender: 'male',
            discount: 10,
            isOfferapp: false,
            description: 'Lorem ipsum dolor sit ares ipsam voluptate eaque labore 2.'

        },
        {
            Name: "eraser",
            url: "../assets/T2.jpg",
            Price: 5,
            Rating: 4,
            gender: 'female',
            discount: 8,
            isOfferapp: false,
            description: 'Lat optio nam asperiores ipsam voluptate eaque labore 3.'

        },
        {
            Name: "pencil",
            url: "../assets/P1.jpg",
            Price: 10,
            Rating: 3,
            gender: 'female',
            discount: 5,
            isOfferapp: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adique labore 1.'
        },
        {
            Name: "note pad",
            url: "../assets/T1.jpg",
            Price: 15,
            Rating: 5,
            gender: 'male',
            discount: 10,
            isOfferapp: false,
            description: 'Lorem ipsum dolor sit ares ipsam voluptate eaque labore 2.'

        },
        {
            Name: "eraser",
            url: "../assets/T2.jpg",
            Price: 5,
            Rating: 4,
            gender: 'female',
            discount: 8,
            isOfferapp: false,
            description: 'Lat optio nam asperiores ipsam voluptate eaque labore 3.'

        }
    ],
    cartItems: 0,
    flatDis: 0,
    flatDisMale: 0,
    flatDisFemale: 5,
    additionalDiscount: [
        {
            OfferCode: "jf10",
            DiscountPercent: 7,
        },
        {
            OfferCode: "pb70",
            DiscountPercent: 2,
        },
        {
            OfferCode: "kl44",
            DiscountPercent: 12,
        }

    ],
    cart: [

    ],
    isCartVisible: false
}

export default initState;