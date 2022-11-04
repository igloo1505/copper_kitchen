export class MenuItem {
	constructor(
		title,
		price,
		description,
		category,
		hasAsterisk = false,
		subcategory = false
	) {
		this.title = title;
		this.description = description;
		this.price = typeof price === "float" ? String(price) : price;
		this.category = category;
		this.hasAsterisk = hasAsterisk;
		this.subcategory = subcategory;
	}
}

export const bold = (s) => {
	return <span style={{ fontWeight: 700 }}>{s}</span>;
};

export class CategoryEnum {
	constructor() {
		this.weeklySpecials = "Weekly Specials";
		this.kidsSpecials = "Kids Specials";
		this.burgersAndSandwiches = "Burgers and Sandwiches";
		this.salad = "Salads";
		this.extras = "The Extras";
		this.beverages = "Beverages";
		this.sides = "Sides";
		this.omeletsSkilletsWraps = "Omelets/Skillets/Wraps";
		this.eggsAndSuch = "Eggs and Such";
		this.breakfastSandwich = "Breakfast Sandwiches";
		this.breakfastSweets = "Breakfast Sweets";
	}
}

let cat = new CategoryEnum();

export const categorySubTitles = (key) => {
	let s = false;
	switch (true) {
		case key === cat.weeklySpecials:
			s = "Monday - Friday (No Holidays) 7am-11am";
			break;
		case key === cat.kidsSpecials:
			s = "For ages 12 and under";
			break;
		case key === cat.omeletsSkilletsWraps:
			s = (
				<p>
					These are all Omelets which come with toast, hash browns, American
					fries or seasonal fruit. You can choose to make any omelet a
					{bold(" skillet (+.50)")} or a {bold("wrap")}.
				</p>
			);
			break;
		case key === cat.burgersAndSandwiches:
			s = <p>Comes with Soup or Fries. Patties are 1/2 lb Angus Beef.</p>;
			break;
		default:
			s = false;
	}
	return s;
};
