import { MenuItem, CategoryEnum, bold } from "../classes/MenuItem";

let cat = new CategoryEnum();

export const data = [
	new MenuItem(
		<p>Omelet of the Day</p>,
		6.85,
		<p>Ask waitstaff</p>,
		cat.weeklySpecials
	),
	new MenuItem(
		<p>2x2 or Grand Slam</p>,
		7.5,
		<p>2 eggs, 2 sausage and 2 bacon, 2 pancakes or French toast.</p>,
		cat.weeklySpecials
	),
	new MenuItem(
		<p>Belt Buster</p>,
		8.75,
		<p>2 eggs, 2 sausage and 2 bacon, hash browns or American Fries.</p>,
		cat.weeklySpecials
	),
	new MenuItem(
		<p>Grandmas Breakfast</p>,
		8.45,
		(
			<p>
				American Fries mixed with green peppers, onions, sausage and cheddar
				cheese.
			</p>
		),
		cat.weeklySpecials
	),
	new MenuItem(
		<p>Mickey Mouse Pancakes</p>,
		3.95,
		<p>Add 2 pieces of bacon or sausage for 1.00</p>,
		cat.kidsSpecials
	),
	new MenuItem(
		<p>One Egg</p>,
		4.5,
		<p>2 bacon or sausage, hash browns and toast</p>,
		cat.kidsSpecials
	),
	new MenuItem(
		<p>Short Stack or Silver Dollars</p>,
		4.85,
		<p>Add 2 pieces of bacon or sausage for 1.00</p>,
		cat.kidsSpecials
	),
	new MenuItem(
		<p>2 Piece Chicken Tenders</p>,
		5.85,
		<p>Includes French Fries</p>,
		cat.kidsSpecials
	),
	new MenuItem(
		<p>Cheeseburger</p>,
		5.95,
		<p>Includes French Fries</p>,
		cat.kidsSpecials
	),
	new MenuItem(
		<p>Classic Burger</p>,
		10.75,
		<p>Cheese, lettuce, tomato, onion. Add Bacon +2.00. Add Egg +1.50.</p>,
		cat.burgersAndSandwiches,
		true
	),
	new MenuItem(
		<p>Southwest Burger</p>,
		11.75,
		(
			<p>
				Pepper jack cheese, salsa, onion, tomato, chipotle, avocado, jalapeños.
			</p>
		),
		cat.burgersAndSandwiches,
		true
	),
	new MenuItem(
		<p>The Texan Burger</p>,
		11.99,
		<p>Colby cheese, bacon, sautéed onions, green peppers, mushrooms.</p>,
		cat.burgersAndSandwiches,
		true
	),
	new MenuItem(
		<p>Patty Melt</p>,
		10.95,
		<p>American cheese, sautéed onions on rye bread.</p>,
		cat.burgersAndSandwiches,
		true
	),
	new MenuItem(
		<p>Steak Melt</p>,
		12.25,
		(
			<p>
				Flank steak, sautéed onions, provolone, colby, pepper jack cheese on
				panini bread.
			</p>
		),
		cat.burgersAndSandwiches,
		true
	),
	new MenuItem(
		<p>Reuben</p>,
		11.95,
		(
			<p>
				Corned beef, swiss cheese, sauerkraut on rye and thousand island
				dressing.
			</p>
		),
		cat.burgersAndSandwiches,
		false
	),
	new MenuItem(
		<p>B.L.T</p>,
		9.75,
		<p>Bacon, lettuce, tomato, mayo on toast.</p>,
		cat.burgersAndSandwiches,
		false
	),
	new MenuItem(
		<p>Cali Chicken</p>,
		11.75,
		(
			<p>
				Colby cheese, avocado, tomato, onion, lettuce and chipotle sauce on
				panini bread.
			</p>
		),
		cat.burgersAndSandwiches,
		false
	),
	new MenuItem(
		<p>Monterey Chicken</p>,
		11.75,
		<p>Colby cheese, provolone cheese, bacon, lettuce and onion.</p>,
		cat.burgersAndSandwiches,
		false
	),
	new MenuItem(
		<p>Gyro Sandwich</p>,
		10.25,
		<p>Gyro meat, onion, tomato</p>,
		cat.burgersAndSandwiches,
		false
	),
	new MenuItem(
		<p>Fountain Sodas</p>,
		<p>2.40 M / 2.85 L</p>,
		null,
		cat.extras,
		false,
		cat.beverages
	),
	new MenuItem(
		<p>Iced Tea</p>,
		<p>3.35 M / 3.55 L</p>,
		null,
		cat.extras,
		false,
		cat.beverages
	),
	new MenuItem(
		<p>Juices</p>,
		<p>3.85 S / 4.50 M / 5.00 L</p>,
		null,
		cat.extras,
		false,
		cat.beverages
	),
	new MenuItem(<p>Coffee</p>, 2.5, null, cat.extras, false, cat.beverages),
	new MenuItem(<p>Hot Tea</p>, 2.5, null, cat.extras, false, cat.beverages),
	new MenuItem(
		<p>Milk</p>,
		<p>2.75 M / 4.50 L</p>,
		null,
		cat.extras,
		false,
		cat.beverages
	),
	new MenuItem(
		<p>Cappuccino</p>,
		<p>4.55</p>,
		null,
		cat.extras,
		false,
		cat.beverages
	),
	new MenuItem(
		<p>Milk Shakes</p>,
		5.75,
		null,
		cat.extras,
		false,
		cat.beverages
	),
	new MenuItem(<p>Bloody Mary</p>, 7.0, null, cat.extras, false, cat.beverages),
	new MenuItem(<p>Mimosa</p>, 6.25, null, cat.extras, false, cat.beverages),
	new MenuItem(
		<p>Mixed Drink</p>,
		<p>6.85 S / 8.00 L</p>,
		null,
		cat.extras,
		false,
		cat.beverages
	),
	new MenuItem(
		<p>Bottled Beer</p>,
		3.5,
		null,
		cat.extras,
		false,
		cat.beverages
	),
	new MenuItem(
		<p>Cali</p>,
		9.75,
		(
			<p>
				Avocado, tomato, onion, cucumber, cilantro. and lettuce. Add Chicken
				+1.50.
			</p>
		),
		cat.salad
	),
	new MenuItem(
		<p>Pecan Salad</p>,
		10.25,
		<p>Pecans, feta cheese, bacon, spinach, tomato and lettuce</p>,
		cat.salad
	),
	new MenuItem(
		<p>Bacon, sausage link/patties, ham, canadian bacon</p>,
		3.95,
		null,
		cat.extras,
		false,
		cat.sides
	),
	new MenuItem(
		<p>Corned beef hash</p>,
		4.95,
		null,
		cat.extras,
		false,
		cat.sides
	),
	new MenuItem(<p>Toast</p>, 2.45, null, cat.extras, false, cat.sides),
	new MenuItem(
		<p>Bagel or English muffin</p>,
		2.75,
		null,
		cat.extras,
		false,
		cat.sides
	),
	new MenuItem(<p>Oatmeal</p>, 3.45, null, cat.extras, false, cat.sides),
	new MenuItem(<p>Hash browns</p>, 3.55, null, cat.extras, false, cat.sides),
	new MenuItem(<p>One Egg</p>, 1.99, null, cat.extras, false, cat.sides),
	new MenuItem(<p>Avocado Slices</p>, 2.95, null, cat.extras, false, cat.sides),
	new MenuItem(<p>Ice Cream</p>, 3.55, null, cat.extras, false, cat.sides),
	new MenuItem(
		<p>Copper Kitchen</p>,
		9.85,
		(
			<p>
				Bacon, sausage, ham, green peppers, mushrooms, onions, tomatoes.
				American and swiss cheese.
			</p>
		),
		cat.omeletsSkilletsWraps
	),
	new MenuItem(
		<p>Cali</p>,
		9.85,
		<p>Avocado, spinach, mushrooms, tomato and feta cheese.</p>,
		cat.omeletsSkilletsWraps
	),
	new MenuItem(
		<p>Denver</p>,
		9.75,
		<p>Ham, green peppers, onions and American cheese.</p>,
		cat.omeletsSkilletsWraps
	),
	new MenuItem(
		<p>Veggie</p>,
		8.75,
		<p>Mushrooms, onions, green peppers, tomato and American cheese.</p>,
		cat.omeletsSkilletsWraps
	),
	new MenuItem(
		<p>Philly</p>,
		11.75,
		<p>Flank steak, green peppers, onions and provolone cheese.</p>,
		cat.omeletsSkilletsWraps,
		true
	),
	new MenuItem(
		<p>Southwest</p>,
		10.25,
		(
			<p>
				Chorizo, tomatoes, green peppers, jalapeños, onions and pepper jack
				cheese.
			</p>
		),
		cat.omeletsSkilletsWraps
	),
	new MenuItem(
		<p>Gyro</p>,
		9.85,
		<p>Gyro meat, feta cheese, onion, tomato.</p>,
		cat.omeletsSkilletsWraps
	),
	new MenuItem(
		<p>Two Eggs and Breakfast Meat</p>,
		8.95,
		(
			<p>
				Choice of breakfast meat, Bacon or Sausage. Chopped steak $
				{bold("+2.00")}, Sirloin ${bold("+4.00")}, Flank ${bold("+4.25")}
			</p>
		),
		cat.eggsAndSuch,
		true
	),
	new MenuItem(
		<p>Eggs Benedict</p>,
		11.85,
		<p>Choice of has browns or American fries.</p>,
		cat.breakfastSandwich
	),
	new MenuItem(
		<p>Avocado B.L.T.</p>,
		9.85,
		(
			<p>
				BLT with choice of egg and avocado spread. Choice of hash browns or
				American fries.
			</p>
		),
		cat.breakfastSandwich
	),
	new MenuItem(
		<p>Brunch Sandwich</p>,
		7.5,
		(
			<p>
				Egg sandwich with bacon or sausage and cheese. Choice of hash browns or
				American fries.
			</p>
		),
		cat.breakfastSandwich
	),
	new MenuItem(
		<p>Chicken and Waffles</p>,
		10.85,
		(
			<p>
				Waffle, chicken tenders, bacon, cheddar cheese and maple mayo. Choice of
				hash browns or American fries.
			</p>
		),
		cat.breakfastSandwich
	),
	new MenuItem(
		<p>Biscuits and Gravy</p>,
		8.75,
		<p>Biscuits and sausage gravy</p>,
		cat.breakfastSandwich
	),
	new MenuItem(
		<p>2x2 or Grand Slam</p>,
		9.85,
		(
			<p>
				(2x2) - 2 eggs, 2 bacon, 2 sausage, 2 pancakes or French Toast (Grand
				Slam).
			</p>
		),
		cat.breakfastSweets
	),
	new MenuItem(
		<p>Pancakes or Crepes 1/2/3pc</p>,
		<p>3.75/7.75/8.65</p>,
		(
			<p>
				Choice of one topping: Strawberry, Blueberry, Apples, Chocolate Chips. $
				{bold("+1.65")} Pecans ${bold("+1.95")}.
			</p>
		),
		cat.breakfastSweets
	),
	new MenuItem(
		<p>French Toast 1/2/3pc</p>,
		<p>3.65/6.95/8.25</p>,
		(
			<p>
				Choice of one topping: Strawberry, Blueberry, Apples, Chocolate Chips. $
				{bold("+1.65")} Pecans ${bold("+1.95")}.
			</p>
		),
		cat.breakfastSweets
	),
	new MenuItem(
		<p>Belgium Waffle/Bacon Waffle</p>,
		<p>8.25/9.50</p>,
		(
			<p>
				Choice of one topping: Strawberry, Whip Cream, Blueberry, Apples,
				Chocolate Chips. ${bold("+1.65")} Pecans ${bold("+1.95")}.
			</p>
		),
		cat.breakfastSweets
	),
];
