import hairoil from '../Assets/hair-oil.jpg'
import facewash from '../Assets/facewash.png'
import vacuum from '../Assets/vacuum-cleaner.png'
import washing from '../Assets/washing-machine.png'

let data = [
    {
        "name": "Cosmetics",
        "productList": [
            {
                "productId": 1,
                "name": "Hair Oil",
                "price": 122,
                "imageUrl": hairoil
            },
            {
                "productId": 2,
                "name": "Face wash",
                "price": 123,
                "imageUrl": facewash
            }
        ]
    },
    {
        "name": "Household",
        "productList": [
            {
                "productId": 3,
                "name": "Vacuum Cleaner",
                "price": 122,
                "imageUrl": vacuum
            },
            {
                "productId": 4,
                "name": "Washing Machine",
                "price": 123,
                "imageUrl": washing
            }
        ]
    }
]
export default data