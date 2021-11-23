const menu  = {
    
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },

    get courses () {
      return {
        // return _courses;
        appetizers: this.appetizers, 
        mains: this.mains,
        desserts: this.desserts,
      };
    },
  
    get appetizers () {
      return this._courses.appetizers;
    },
    get mains () {
      return this._courses.appetizers;
    },
    get desserts () {
      return this._courses.desserts;
    },

    set appetizers(appetizerIn) {
      this._courses.appetizers = appetizerIn;
    },
    set mains(mainsIn) {
      this._courses.appetizers = mainsIn;
    },
    set desserts(dessertsIn) {
      this._courses.appetizers = dessertsIn;
    },
  
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish); 
    },
  
    getRandomDishFromCourse (courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, and the total price is ${totalPrice}`;
    },
  };
  
  
  menu.addDishToCourse('appetizers', 'salad', 4.00);
  menu.addDishToCourse('appetizers', 'wings', 4.50);
  menu.addDishToCourse('appetizers', 'fries', 5.00);
  
  menu.addDishToCourse('mains', 'steak', 10.25);
  menu.addDishToCourse('mains', 'salmon', 7.75);
  menu.addDishToCourse('mains', 'tofu', 11.20);
  
  menu.addDishToCourse('desserts', 'ice cream', 3.00);
  menu.addDishToCourse('desserts', 'pie', 3.00);
  menu.addDishToCourse('desserts', 'cake', 3.25);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);