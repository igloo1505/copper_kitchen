import React, { useState, useEffect } from "react";
import styles from "../../styles/universalMenuSection.module.scss";
import { connect } from "react-redux";
import data from "../../utils/menuItems";
import clsx from "clsx";
import { CategoryEnum, categorySubTitles } from "../../classes/MenuItem";
import { RiAsterisk } from "react-icons/ri";

const Menu_omeletsSkilletsWraps = ({ UI }) => {
	let cat = new CategoryEnum();
	return (
		<div className={styles.outerContainer}>
			<div className={styles.menuCategoryTitleContainer}>
				<div className={styles.menuCategoryTitle}>
					{cat.omeletsSkilletsWraps}
				</div>
			</div>
			{categorySubTitles(cat.omeletsSkilletsWraps) && (
				<div className={styles.menuCategorySubTitle}>
					{categorySubTitles(cat.omeletsSkilletsWraps)}
				</div>
			)}
			{data
				.filter((d) => d.category === cat.omeletsSkilletsWraps)
				.map((d, i, a) => {
					return (
						<div
							className={clsx(
								styles.itemContainer,
								i === a.length && styles.itemContainer_last
							)}
							key={`omeleteItem-${i}`}
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
const mapStateToProps = (state, props) => ({
	UI: state.UI,
	props: props,
});
export default connect(mapStateToProps)(Menu_omeletsSkilletsWraps);
