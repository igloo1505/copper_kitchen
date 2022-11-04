import { MenuItem, CategoryEnum, bold } from "../classes/MenuItem";

let cat = new CategoryEnum();

let data = [
	new MenuItem("Omelet of the Day", 6.85, "Ask waitstaff", cat.weeklySpecials),
	new MenuItem(
		"2x2 or Grand Slam",
		7.5,
		"2 eggs, 2 sausage and 2 bacon, 2 pancakes or French toast.",
		cat.weeklySpecials
	),
	new MenuItem(
		"Belt Buster",
		8.75,
		"2 eggs, 2 sausage and 2 bacon, hash browns or American Fries.",
		cat.weeklySpecials
	),
	new MenuItem(
		"Grandmas Breakfast",
		8.45,
		"American Fries mixed with green peppers, onions, sausage and cheddar cheese.",
		cat.weeklySpecials
	),
	new MenuItem(
		"Mickey Mouse Pancakes",
		3.95,
		"Add 2 pieces of bacon or sausage for 1.00",
		cat.kidsSpecials
	),
	new MenuItem(
		"One Egg",
		4.5,
		"2 bacon or sausage, hash browns and toast",
		cat.kidsSpecials
	),
	new MenuItem(
		"Short Stack or Silver Dollars",
		4.85,
		"Add 2 pieces of bacon or sausage for 1.00",
		cat.kidsSpecials
	),
	new MenuItem(
		"2 Piece Chicken Tenders",
		5.85,
		"Includes French Fries",
		cat.kidsSpecials
	),
	new MenuItem("Cheeseburger", 5.95, "Includes French Fries", cat.kidsSpecials),
	new MenuItem(
		"Classic Burger",
		10.75,
		"Cheese, lettuce, tomato, onion. Add Bacon +2.00. Add Egg +1.50.",
		cat.burgersAndSandwiches,
		true
	),
	new MenuItem(
		"Southwest Burger",
		11.75,
		"Pepper jack cheese, salsa, onion, tomato, chipotle, avocado, jalapeños.",
		cat.burgersAndSandwiches,
		true
	),
	new MenuItem(
		"The Texan Burger",
		11.99,
		"Colby cheese, bacon, sautéed onions, green peppers, mushrooms.",
		cat.burgersAndSandwiches,
		true
	),
	new MenuItem(
		"Patty Melt",
		10.95,
		"American cheese, sautéed onions on rye bread.",
		cat.burgersAndSandwiches,
		true
	),
	new MenuItem(
		"Steak Melt",
		12.25,
		"Flank steak, sautéed onions, provolone, colby, pepper jack cheese on panini bread.",
		cat.burgersAndSandwiches,
		true
	),
	new MenuItem(
		"Reuben",
		11.95,
		"Corned beef, swiss cheese, sauerkraut on rye and thousand island dressing.",
		cat.burgersAndSandwiches,
		false
	),
	new MenuItem(
		"B.L.T",
		9.75,
		"Bacon, lettuce, tomato, mayo on toast.",
		cat.burgersAndSandwiches,
		false
	),
	new MenuItem(
		"Cali Chicken",
		11.75,
		"Colby cheese, avocado, tomato, onion, lettuce and chipotle sauce on panini bread.",
		cat.burgersAndSandwiches,
		false
	),
	new MenuItem(
		"Monterey Chicken",
		11.75,
		"Colby cheese, provolone cheese, bacon, lettuce and onion.",
		cat.burgersAndSandwiches,
		false
	),
	new MenuItem(
		"Gyro Sandwich",
		10.25,
		"Gyro meat, onion, tomato",
		cat.burgersAndSandwiches,
		false
	),
	new MenuItem(
		"Fountain Sodas",
		"2.40 M / 2.85 L",
		null,
		cat.extras,
		false,
		cat.beverages
	),
	new MenuItem(
		"Iced Tea",
		"3.35 M / 3.55 L",
		null,
		cat.extras,
		false,
		cat.beverages
	),
	new MenuItem(
		"Juices",
		"3.85 S / 4.50 M / 5.00 L",
		null,
		cat.extras,
		false,
		cat.beverages
	),
	new MenuItem("Coffee", 2.5, null, cat.extras, false, cat.beverages),
	new MenuItem("Hot Tea", 2.5, null, cat.extras, false, cat.beverages),
	new MenuItem(
		"Milk",
		"2.75 M / 4.50 L",
		null,
		cat.extras,
		false,
		cat.beverages
	),
	new MenuItem("Cappuccino", "4.55", null, cat.extras, false, cat.beverages),
	new MenuItem("Milk Shakes", 5.75, null, cat.extras, false, cat.beverages),
	new MenuItem("Bloody Mary", 7.0, null, cat.extras, false, cat.beverages),
	new MenuItem("Mimosa", 6.25, null, cat.extras, false, cat.beverages),
	new MenuItem(
		"Mixed Drink",
		"6.85 S / 8.00 L",
		null,
		cat.extras,
		false,
		cat.beverages
	),
	new MenuItem("Bottled Beer", 3.5, null, cat.extras, false, cat.beverages),
	new MenuItem(
		"Cali",
		9.75,
		"Avocado, tomato, onion, cucumber, cilantro. and lettuce. Add Chicken +1.50.",
		cat.salad
	),
	new MenuItem(
		"Pecan Salad",
		10.25,
		"Pecans, feta cheese, bacon, spinach, tomato and lettuce",
		cat.salad
	),
	new MenuItem(
		"Bacon, sausage link/patties, ham, canadian bacon",
		3.95,
		null,
		cat.extras,
		false,
		cat.sides
	),
	new MenuItem("Corned beef hash", 4.95, null, cat.extras, false, cat.sides),
	new MenuItem("Toast", 2.45, null, cat.extras, false, cat.sides),
	new MenuItem(
		"Bagel or English muffin",
		2.75,
		null,
		cat.extras,
		false,
		cat.sides
	),
	new MenuItem("Oatmeal", 3.45, null, cat.extras, false, cat.sides),
	new MenuItem("Hash browns", 3.55, null, cat.extras, false, cat.sides),
	new MenuItem("One Egg", 1.99, null, cat.extras, false, cat.sides),
	new MenuItem("Avocado Slices", 2.95, null, cat.extras, false, cat.sides),
	new MenuItem("Ice Cream", 3.55, null, cat.extras, false, cat.sides),
	new MenuItem(
		"Copper Kitchen",
		9.85,
		"Bacon, sausage, ham, green peppers, mushrooms, onions, tomatoes. American and swiss cheese.",
		cat.omeletsSkilletsWraps
	),
	new MenuItem(
		"Cali",
		9.85,
		"Avocado, spinach, mushrooms, tomato and feta cheese.",
		cat.omeletsSkilletsWraps
	),
	new MenuItem(
		"Denver",
		9.75,
		"Ham, green peppers, onions and American cheese.",
		cat.omeletsSkilletsWraps
	),
	new MenuItem(
		"Veggie",
		8.75,
		"Mushrooms, onions, green peppers, tomato and American cheese.",
		cat.omeletsSkilletsWraps
	),
	new MenuItem(
		"Philly",
		11.75,
		"Flank steak, green peppers, onions and provolone cheese.",
		cat.omeletsSkilletsWraps,
		true
	),
	new MenuItem(
		"Southwest",
		10.25,
		"Chorizo, tomatoes, green peppers, jalapeños, onions and pepper jack cheese.",
		cat.omeletsSkilletsWraps
	),
	new MenuItem(
		"Gyro",
		9.85,
		"Gyro meat, feta cheese, onion, tomato.",
		cat.omeletsSkilletsWraps
	),
	new MenuItem(
		"Two Eggs and Breakfast Meat",
		8.95,
		`Choice of breakfast meat, Bacon or Sausage. Chopped steak ${bold(
			"+2.00"
		)}, Sirloin ${bold("+4.00")}, Flank ${bold("+4.25")}`,
		cat.eggsAndSuch,
		true
	),
	new MenuItem(
		"Eggs Benedict",
		11.85,
		"Choice of has browns or American fries.",
		cat.breakfastSandwich
	),
	new MenuItem(
		"Avocado B.L.T.",
		9.85,
		"BLT with choice of egg and avocado spread. Choice of hash browns or American fries.",
		cat.breakfastSandwich
	),
	new MenuItem(
		"Brunch Sandwich",
		7.5,
		"Egg sandwich with bacon or sausage and cheese. Choice of hash browns or American fries.",
		cat.breakfastSandwich
	),
	new MenuItem(
		"Chicken and Waffles",
		10.85,
		"Waffle, chicken tenders, bacon, cheddar cheese and maple mayo. Choice of hash browns or American fries.",
		cat.breakfastSandwich
	),
	new MenuItem(
		"Biscuits and Gravy",
		8.75,
		"Biscuits and sausage gravy",
		cat.breakfastSandwich
	),
	new MenuItem(
		"2x2 or Grand Slam",
		9.85,
		"(2x2) - 2 eggs, 2 bacon, 2 sausage, 2 pancakes or French Toast (Grand Slam).",
		cat.breakfastSweets
	),
	new MenuItem(
		"Pancakes or Crepes 1/2/3pc",
		"3.75/7.75/8.65",
		`Choice of one topping: Strawberry, Blueberry, Apples, Chocolate Chips. ${bold(
			"+1.65"
		)} Pecans ${bold("+1.95")}.`,
		cat.breakfastSweets
	),
	new MenuItem(
		"French Toast 1/2/3pc",
		"3.65/6.95/8.25",
		`Choice of one topping: Strawberry, Blueberry, Apples, Chocolate Chips. ${bold(
			"+1.65"
		)} Pecans ${bold("+1.95")}.`,
		cat.breakfastSweets
	),
	new MenuItem(
		"Belgium Waffle/Bacon Waffle",
		"8.25/9.50",
		`Choice of one topping: Strawberry, Whip Cream, Blueberry, Apples, Chocolate Chips. ${bold(
			"+1.65"
		)} Pecans ${bold("+1.95")}.`,
		cat.breakfastSweets
	),
];
