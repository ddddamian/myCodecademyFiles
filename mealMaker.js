/*
As a frequent diner, you love trying out new restaurants and experimenting with different foods. 
However, having to figure out what you want to order can be a time-consuming ordeal if the menu is 
big, and you want an easier way to be able to figure out what you are going to eat.

In this project, you'll use JavaScript to randomly create a three-course meal based on what is 
available on a menu. We'll keep running it until we're satisfied with the generated meal!
*/

let menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
  
    get appetizers() {
  
    },
    
    set appetizers(appetizerIn) {
      
    },
      
    get mains() {
      
    },
    
    set mains(mainIn) {
      
    },
    
    get desserts() {
      
    },
    
    set desserts(dessertIn) {
      
    }
  },
    
  get courses() {
    return {
      appetizers: this._appetizers, 
      mains: this._mains, 
      desserts: this.desserts
    };
  },
    
  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      this.name = dishName;
      this.price = dishPrice;
    };
    this._courses[courseName].push(dish);
  },
    
  getRandomeDishFromCourse(courseName) {
    let dishes = menu._courses[courseName];
    return dishes[Math.floor(Math.random() * dishes.length)];
  },
    
  generateRandomMeal() {
    const appetizer = this.getRandomeDishFromCourse("appetizers");
    const main = this.getRandomeDishFromCourse("mains");
    const dessert = this.getRandomeDishFromCourse("desserts");
    
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your appetizer will be ${appetizer.name}. Your main will be ${main.name}. Your dessert will be ${dessert.name}. The total price will be ${totalPrice}`
  }
};

menu.addDishToCourse("appetizers", "soup", 4);
menu.addDishToCourse("appetizers", "pate", 4);
menu.addDishToCourse("appetizers", "", 4);
menu.addDishToCourse("mains", "five bean chilli", 8);
menu.addDishToCourse("mains", "steak", 10);
menu.addDishToCourse("mains", "pasta carbonara", 9);
menu.addDishToCourse("desserts", "cheesecake", 5);
menu.addDishToCourse("desserts", "cheese", 3);
menu.addDishToCourse("desserts", "bread pudding", 4);

let menu = menu.generateRandomMeal();
console.log(meal);
