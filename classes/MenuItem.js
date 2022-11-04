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
		this.price = String(price);
		this.category = category;
		this.hasAsterisk = hasAsterisk;
		this.subcategory = subcategory;
	}
}

export const bold = (s) => {
	return `<span style="font-weight: 700">${s}</span>`;
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

let cat = CategoryEnum();

export const categorySubTitles = (key) => {
	let s = "";
	switch (true) {
		case key === cat.weeklySpecials:
			s = "Monday - Friday (No Holidays) 7am-11am";
			break;
		case key === cat.kidsSpecials:
			s = "For ages 12 and under";
			break;
		case key === cat.omeletsSkilletsWraps:
			s = `These are all Omelets which come with toast, hash browns, American fries or seasonal fruit. You can choose to make any omelet a ${bold(
				"skillet (+.50)"
			)} or a ${bold("wrap")}.`;
			break;
		default:
			break;
	}
	return s;
};
