/*
As a frequent diner, you love trying out new restaurants and experimenting with different foods. 
However, having to figure out what you want to order can be a time-consuming ordeal if the menu is 
big, and you want an easier way to be able to figure out what you are going to eat.

In this project, you'll use JavaScript to randomly create a three-course meal based on what is 
available on a menu. We'll keep running it until we're satisfied with the generated meal!
*/

// object representing a menu for a restaurant
let menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    
    // getter method for the appetizers
    get appetizers() {
      return this._appetizers;
    },
    
    // setter method for the appetizers
    set appetizers(appetizerIn) {
      this._appetizers.push(appetizerIn);
    },
    
    // getter method for mains
    get mains() {
      return this._mains;
    },
    
    // setter method for mains
    set mains(mainIn) {
      this._mains.push(mainIn);
    },
    
    // getter method for desserts
    get desserts() {
      return this._desserts;
    },
    
    // setter method for desserts
    set desserts(dessertIn) {
      this._desserts.push(dessertIn);
    }
  },
  
  // getter method for courses
  get courses() {
    return {
      appetizers: this._appetizers, 
      mains: this._mains, 
      desserts: this.desserts
    };
  },
  
  // method to add a new dish
  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  
  // method to pick a random dish
  getRandomeDishFromCourse(courseName) {
    let dishes = menu._courses[courseName];
    return dishes[Math.floor(Math.random() * dishes.length)];
  },
  
  // method to generate a meal of a random dish from each course
  generateRandomMeal() {
    const appetizer = this.getRandomeDishFromCourse("appetizers");
    const main = this.getRandomeDishFromCourse("mains");
    const dessert = this.getRandomeDishFromCourse("desserts");
    
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your appetizer will be '${appetizer.name}'. Your main will be '${main.name}'. Your dessert will be '${dessert.name}'. The total price will be ${totalPrice}.`
  }
};

// add some dishes to the course
menu.addDishToCourse("appetizers", "Soup of the Day", 4);
menu.addDishToCourse("appetizers", "Pate", 4);
menu.addDishToCourse("appetizers", "Baked Camembert", 4);
menu.addDishToCourse("mains", "Five Bean Chilli", 8);
menu.addDishToCourse("mains", "Steak", 10);
menu.addDishToCourse("mains", "Pasta Carbonara", 9);
menu.addDishToCourse("mains", "Beef Burger", 9);
menu.addDishToCourse("mains", "Roast Chicken", 10);
menu.addDishToCourse("desserts", "Cheesecake", 5);
menu.addDishToCourse("desserts", "Cheese Platter", 3);
menu.addDishToCourse("desserts", "Bread Pudding", 4);

// create a new random meal and log it
let meal = menu.generateRandomMeal();
console.log(meal);
