/**
 * This application is made with the Factory pattern and combination with the prototype pattern to create products(clothes) with specific properties.
 * When
 */

/**
 * Define a Prototype of clothes
 * This is the propery class of how a clothe type should 
 */

class ClothesPrototype {
    constructor({size, gender, season, price, color}) {
        this.size = size || 'large';
        this.gender = gender || 'male';
        this.season = season || 'all year'
        this.price = price || 0
        this.color = color || 'black'
    }
}
// A class for defining new Shoes with defined properties
class Shoe extends ClothesPrototype {
    constructor(options) {
        super(options);
        this.lacesColor = options.lacesColor || 'green'
    }
}

// A class for defining new Jackets with defined properties
class Jacket extends ClothesPrototype {
    constructor(options) {
        super(options);
    }
}

// A class for defining new Hats with defined properties
class Hat extends ClothesPrototype {
    constructor(options) {
        super(options);
    }
}

//******************** The Factory ********************//

// Define a Clothes factory
class ClothesFactory {

    constructor() {
        this.clothesType = Hat
    }
    // Our Factory method for creating new Clothes instances with set options
    createClothes(options = {}) {
        // for(var prop in superProps) {
        //     if (!options.hasOwnProperty(prop)) {
        //         options[prop] = superProps[prop];
        //     }
        // }     
        options.clothesType = options.clothesType.toLowerCase()
        switch (options.clothesType) {
            case 'shoe':
                this.clothesClass = Shoe;
                break;
            case 'jacket':
                this.clothesClass = Jacket;
                break;
            case 'hat':
                this.clothesClass = Hat;
                break;
            default:
        }

        return new this.clothesClass(options);
    }
}

//******************** DEMO ********************//

// Create an instance of our factory 
const factory = new ClothesFactory();

console.log("**********  shoe01 **********");
const shoe1 = factory.createClothes({
        clothesType: 'shoe',
        price: 200,
        size: 'small',
        lacesColor: 'red',
        sole: 'HARDSTUFF'
    });
console.log(shoe1);
console.log(shoe1 instanceof Shoe); 


console.log("**********  Jacket01 **********");
const jacket01 = factory.createClothes({
    clothesType: 'jacket',
    price: 700,
    size: 'medium'
});

console.log(jacket01);
console.log(jacket01 instanceof Jacket); 

const hat1 = factory.createClothes({
    clothesType: 'hat',
    price: 400,
    pointing: 'back',
    herrow: 'yesss'
})

console.log(hat1);
console.log(hat1 instanceof Hat); 
