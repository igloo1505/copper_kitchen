import React, { useState, useEffect } from "react";
import styles from "../../styles/universalMenuSection.module.scss";
import data from "../../utils/menuItems";
import clsx from "clsx";
import { CategoryEnum, categorySubTitles } from "../../classes/MenuItem";
import { RiAsterisk } from "react-icons/ri";

const Menu_salad = ({ isBottomIndex }) => {
	let cat = new CategoryEnum().salad;
	return (
		<div className={styles.outerContainer}>
			<div className={styles.menuCategoryTitleContainer}>
				<div className={styles.menuCategoryTitle}>{cat}</div>
			</div>
			{categorySubTitles(cat) && (
				<div className={styles.menuCategorySubTitle}>
					{categorySubTitles(cat)}
				</div>
			)}
			{data
				.filter((d) => d.category === cat)
				.map((d, i, a) => {
					return (
						<div
							className={clsx(
								styles.itemContainer,
								i === a.length - 1 && styles.itemContainer_last,
								isBottomIndex && styles.marginBottom
							)}
							key={`eggsAndSuchItem-${i}`}
						>
							<div className={styles.titleContainer}>
								<div className={styles.titleAsterickContainer}>
									{d.title}
									{d.hasAsterisk && <RiAsterisk className={styles.asterick} />}
								</div>
								<div className={styles.priceContainer}>{d.price}</div>
							</div>
							<div className={styles.descriptionContainer}>{d.description}</div>
						</div>
					);
				})}
		</div>
	);
};

export default Menu_salad;
