export default {
	setInfo: {
		name: "Core Set 2021",
		code: "M21"
	},
	cards: [
		// color: w=1, u=2, b=3, r=4, g=5, c=6, m=7
		// instants
		{ name: "Alchemist's Gift", cost: [["b"]], imageUrl: "6/e/6e4c9574-1ee3-461e-848f-8f02c6a8b7ee", cmc: 1, color: 3, sev: 45, pump: 1, counterspell: 0, removal: 0 },
		{ name: "Angelic Ascension", cost: [["w", "1"]], imageUrl: "e/8/e8cca776-b0e4-4cd2-815f-36c1f86cf497", cmc: 2, color: 1, sev: 70, pump: 0, counterspell: 0, removal: 1 },
		{ name: "Burn Bright", cost: [["r", "1", "1"]], imageUrl: "f/1/f19b4a80-41e1-4c5f-869a-682f08543f12", cmc: 3, color: 4, sev: 45, pump: 1, counterspell: 0, removal: 0 },
		{ name: "Cancel", cost: [["u", "u", "1"]], imageUrl: "5/9/59e14910-ee2e-49ae-855e-46a8ab6cad82", cmc: 3, color: 2, sev: 40, pump: 0, counterspell: 1, removal: 0 },
		{ name: "Defiant Strike", cost: [["w"]], imageUrl: "5/c/5c23869b-c99a-49dd-9e29-fcc0eb63fad1", cmc: 1, color: 1, sev: 70, pump: 1, counterspell: 0, removal: 0 },
		{ name: "Discontinuity", cost: [["u", "u", "u", "1", "1", "1"]], imageUrl: "b/3/b33ba0a8-04e9-4df6-af20-a3ca4470cdcc", cmc: 6, color: 2, sev: 66, pump: 0, counterspell: 1, removal: 0 },
		{ name: "Eliminate", cost: [["b", "1"]], imageUrl: "f/8/f8eb4087-3a4c-4de8-8e29-f4cd71acb180", cmc: 2, color: 3, sev: 23, pump: 0, counterspell: 0, removal: 1 },
		{ name: "Feat of Resistance", cost: [["w", "1"]], imageUrl: "7/3/73148b3b-73d3-4f57-8b67-1e91fbe112b9", cmc: 2, color: 1, sev: 21, pump: 1, counterspell: 0, removal: 0 },
		{ name: "Finishing Blow", cost: [["b", "1", "1", "1", "1"]], imageUrl: "2/b/2b85a552-2119-4d9c-b7c1-c09c2d9f2f38", cmc: 5, color: 3, sev: 21, pump: 0, counterspell: 0, removal: 1 },
		{ name: "Frantic Inventory", cost: [["u", "1"]], imageUrl: "8/f/8f14abb0-0e9f-448e-85d7-6cb71f756c56", cmc: 2, color: 2, sev: 100, pump: 0, counterspell: 0, removal: 0 },
		{ name: "Frost Breath", cost: [["u", "1", "1"]], imageUrl: "3/9/393fc485-d3c1-4826-933d-89f66df769d4", cmc: 3, color: 2, sev: 50, pump: 0, counterspell: 0, removal: 0 },
		{ name: "Fungal Rebirth", cost: [["g", "1", "1"]], imageUrl: "4/0/4037e3b2-cb62-4f88-943d-3edcd6827c23", cmc: 3, color: 5, sev: 60, pump: 0, counterspell: 0, removal: 0 },
		{ name: "Goblin Wizardry", cost: [["r", "1", "1", "1"]], imageUrl: "d/7/d7ac8bdd-851f-449d-a108-70578eabf254", cmc: 4, color: 4, sev: 80, pump: 0, counterspell: 0, removal: 0 },
		{ name: "Grasp of Darkness", cost: [["b", "b"]], imageUrl: "7/7/7737b578-8ae3-4846-b508-93ef40f25244", cmc: 2, color: 3, sev: 22, pump: 0, counterspell: 0, removal: 1 },
		{ name: "Heroic Intervention", cost: [["g", "1"]], imageUrl: "4/3/43c037e3-7d1a-48ca-8ecc-276696592f62", cmc: 2, color: 5, sev: 2, pump: 0, counterspell: 0, removal: 0 },
		{ name: "Life Goes On", cost: [["g"]], imageUrl: "3/8/3888197f-5da4-4413-9cad-b37a12ba1e60", cmc: 1, color: 5, sev: 100, pump: 0, counterspell: 0, removal: 0 },
		{ name: "Lofty Denial", cost: [["u", "1"]], imageUrl: "6/4/64832674-beb1-446e-b2f7-8a5e271139a5", cmc: 2, color: 2, sev: 50, pump: 0, counterspell: 1, removal: 0 },
		{ name: "Miscast", cost: [["u"]], imageUrl: "0/3/033afbd5-9937-4957-98ba-48e469a490bb", cmc: 1, color: 2, sev: 50, pump: 0, counterspell: 1, removal: 0 },
		{ name: "Opt", cost: [["u"]], imageUrl: "3/2/323db259-d35e-467d-9a46-4adcb2fc107c", cmc: 1, color: 2, sev: 100, pump: 0, counterspell: 0, removal: 0 },
		{ name: "Rain of Revelation", cost: [["u", "1", "1", "1"]], imageUrl: "d/a/da367981-9d6f-419f-9f58-f969b6183336", cmc: 4, color: 2, sev: 80, pump: 0, counterspell: 0, removal: 0 },
		{ name: "Ranger's Guile", cost: [["g"]], imageUrl: "0/2/02392840-f0c4-462e-84ce-9a7cdd9f5efb", cmc: 1, color: 5, sev: 31, pump: 1, counterspell: 0, removal: 0 },
		{ name: "Return to Nature", cost: [["g", "1"]], imageUrl: "3/f/3f1b4490-d96d-4448-835b-6cc453c1f344", cmc: 2, color: 5, sev: 70, pump: 0, counterspell: 0, removal: 1 },
		{ name: "Revitalize", cost: [["w", "1"]], imageUrl: "a/3/a3bd4bce-8ab0-40b9-aad7-7d57a011bb0b", cmc: 2, color: 1, sev: 100, pump: 0, counterspell: 0, removal: 0 },
		{ name: "Rewind", cost: [["u", "u", "1", "1"]], imageUrl: "b/8/b832abcc-9ffd-47bf-827a-01b303c610ee", cmc: 4, color: 2, sev: 40, pump: 0, counterspell: 1, removal: 0 },
		{ name: "Rookie Mistake", cost: [["u"]], imageUrl: "b/1/b19de7a5-c291-405b-a2e6-8d3ac56e6570", cmc: 1, color: 2, sev: 80, pump: 1, counterspell: 0, removal: 0 },
		{ name: "Run Afoul", cost: [["g"]], imageUrl: "b/d/bd328139-0dc1-403b-ad79-b1cf3479ac33", cmc: 1, color: 5, sev: 70, pump: 0, counterspell: 0, removal: 1 },
		{ name: "Scorching Dragonfire", cost: [["r", "1"]], imageUrl: "a/9/a9a1cce7-1472-42fc-bfd3-c9ed9e563f03", cmc: 2, color: 4, sev: 23, pump: 0, counterspell: 0, removal: 1 },
		{ name: "Shock", cost: [["r"]], imageUrl: "5/9/59fa8e8d-bcb8-47bf-b71a-df11c8d0f2c9", cmc: 1, color: 4, sev: 23, pump: 0, counterspell: 0, removal: 1 },
		{ name: "Soul Sear", cost: [["r", "1", "1"]], imageUrl: "6/2/62584e4f-dac1-4d99-ac0a-6a2451603889", cmc: 3, color: 4, sev: 21, pump: 0, counterspell: 0, removal: 1 },
		{ name: "Sublime Epiphany", cost: [["u", "u", "1", "1", "1", "1"]], imageUrl: "a/d/ad1bcb44-a562-4f66-b862-6d0ef3546ab4", cmc: 6, color: 2, sev: 1, pump: 0, counterspell: 1, removal: 1 },
		{ name: "Sure Strike", cost: [["r", "1"]], imageUrl: "0/6/064a6f1c-a058-4cc8-b467-5dbecb5eeb99", cmc: 2, color: 4, sev: 39, pump: 1, counterspell: 0, removal: 0 },
		{ name: "Swift Response", cost: [["w", "1"]], imageUrl: "a/9/a90c1ad0-83bd-471c-8d4c-e65bc2abaa18", cmc: 2, color: 1, sev: 25, pump: 0, counterspell: 0, removal: 1 },
		{ name: "Thrill of Possibility", cost: [["r", "1"]], imageUrl: "f/4/f4af156d-0fbf-4a4e-b0c1-db7e95be4903", cmc: 2, color: 4, sev: 100, pump: 0, counterspell: 0, removal: 0 },
		{ name: "Titanic Growth", cost: [["g", "1"]], imageUrl: "6/d/6da62557-9783-4e6c-9b5f-2b77dbf96909", cmc: 2, color: 5, sev: 23, pump: 1, counterspell: 0, removal: 0 },
		{ name: "Unleash Fury", cost: [["r", "1"]], imageUrl: "e/8/e854e6a3-8684-43fa-9560-ef4c3b62c935", cmc: 2, color: 4, sev: 30, pump: 1, counterspell: 0, removal: 0 },
		{ name: "Unsubstantiate", cost: [["u", "1"]], imageUrl: "2/d/2dc0bafd-debc-4b62-9fe0-56b4aad02484", cmc: 2, color: 2, sev: 30, pump: 0, counterspell: 1, removal: 1 },
		{ name: "Village Rites", cost: [["b"]], imageUrl: "9/c/9c0f60a6-b5c8-4704-8b61-94e8fc463e5d", cmc: 1, color: 3, sev: 70, pump: 0, counterspell: 0, removal: 0 },
		{ name: "Volcanic Geyser", cost: [["r", "r"]], imageUrl: "7/e/7e22c791-6ef9-4f13-a14d-4f795f48bb1c", cmc: 3, color: 4, sev: 23, pump: 0, counterspell: 0, removal: 1 },
		// flash
		{ name: "Capture Sphere", cost: [["u", "1", "1", "1"]], imageUrl: "f/5/f5ed9f08-56e8-4e24-aae2-05270d7c1ba8", cmc: 4, color: 2, sev: 60, pump: 0, counterspell: 0, removal: 1 },
		{ name: "Containment Priest", cost: [["w", "1"]], imageUrl: "a/2/a24e8dba-5c86-4e32-8a52-61402f7fe9f0", cmc: 2, color: 1, sev: 80, pump: 0, counterspell: 0, removal: 0 },
		{ name: "Liliana's Standard Bearer", cost: [["b", "1", "1"]], imageUrl: "3/d/3dc48b87-62cb-48f6-8979-e6fb98717b52", cmc: 3, color: 3, sev: 40, pump: 0, counterspell: 0, removal: 0 },
		{ name: "Masked Blackguard", cost: [["b", "1"]], imageUrl: "d/6/d61b4b71-3cbb-4422-8ce7-657ca3bb6a82", cmc: 2, color: 3, sev: 70, pump: 0, counterspell: 0, removal: 0 },
		{ name: "Niambi, Esteemed Speaker", cost: [["w", "u"]], imageUrl: "e/2/e21827eb-fa49-4784-a86b-aef164a5018e", cmc: 2, color: 7, sev: 50, pump: 0, counterspell: 0, removal: 0 },
		{ name: "Thieves' Guild Enforcer", cost: [["b"]], imageUrl: "d/f/df99f770-2c39-4025-a8a2-a5890f61eb53", cmc: 1, color: 3, sev: 70, pump: 0, counterspell: 0, removal: 0 },
	],
	sources: {
		Basic$Lands: [
			{ name: "Plains", mana: "w", perms: 1, imageUrl: "0/d/0d4e5bc1-f0c3-4ea7-a549-c36d932103b1", iconColor: "#ffeea9", manaSymbol: "./assets/W.svg" },
			{ name: "Island", mana: "u", perms: 1, imageUrl: "0/6/0600d6d5-f6a1-47c3-a898-733fab10bbf5", iconColor: "#82deff", manaSymbol: "./assets/U.svg" },
			{ name: "Swamp", mana: "b", perms: 1, imageUrl: "3/0/30b3d647-3546-4ade-b395-f2370750a7a6", iconColor: "#ff9ef4", manaSymbol: "./assets/B.svg" },
			{ name: "Mountain", mana: "r", perms: 1, imageUrl: "b/9/b92c8925-ecfc-4ece-b83a-f12e98a938ab", iconColor: "#ff796a", manaSymbol: "./assets/R.svg" },
			{ name: "Forest", mana: "g", perms: 1, imageUrl: "3/2/3279314f-d639-4489-b2ab-3621bb3ca64b", iconColor: "#89ff77", manaSymbol: "./assets/G.svg" },
		],
		Dual$Lands: [
			{ name: "Temple of Silence", mana: "wb", perms: 2, imageUrl: "0/f/0f5b0f0a-dc16-45e2-91ab-28e0b9f66d00" },
			{ name: "Temple of Mystery", mana: "ug", perms: 2, imageUrl: "0/c/0c284acd-4407-42ad-9f4c-359041223609" },
			{ name: "Temple of triumph", mana: "wr", perms: 2, imageUrl: "2/3/2366499c-9d07-46bb-8488-6cd60056fa16" },
			{ name: "Temple of Epiphany", mana: "ur", perms: 2, imageUrl: "1/6/1652bb3c-c365-4046-b07e-3d861fa324c6" },
			{ name: "Temple of Malady", mana: "bg", perms: 2, imageUrl: "c/9/c97929f8-ae80-4b4a-9d9b-2f3c7605edc8" },
			// gain lands
			{ name: "Tranquil Cove", mana: "wu", perms: 2, imageUrl: "0/f/0fee9b4b-1510-4b78-bdde-2e0bb319ee33" },
			{ name: "Dismal Blackwater", mana: "ub", perms: 2, imageUrl: "b/3/b3b1afa0-9bb5-4566-a85e-86a5c03e0187" },
			{ name: "Bloodfell Caves", mana: "br", perms: 2, imageUrl: "5/d/5d89a0e2-1163-4a11-b0df-deef2e6c8108" },
			{ name: "Rugged Highlands", mana: "rg", perms: 2, imageUrl: "9/d/9daef8db-56a5-4b1e-b4bf-734d0516557c" },
			{ name: "Blossoming Sands", mana: "wg", perms: 2, imageUrl: "c/8/c8483586-9a07-4f54-a390-7dd97fcea5cb" },
			{ name: "Scourd Barrens", mana: "wb", perms: 2, imageUrl: "f/e/feb3d45c-a28c-49d2-ab79-53ab42c7fdfd" },
			{ name: "Swiftwater Cliffs", mana: "ur", perms: 2, imageUrl: "e/6/e649fc68-fca5-4234-aff4-0ec2382a66d4" },
			{ name: "Jungle Hollow", mana: "bg", perms: 2, imageUrl: "6/9/69f28d7a-6480-4725-9719-2354921e6410" },
			{ name: "Wind-Scarred Crag", mana: "wr", perms: 2, imageUrl: "8/6/86367edc-9587-4f3b-aa95-c3a2bfc8c6f4" },
			{ name: "Thornwood Falls", mana: "ug", perms: 2, imageUrl: "f/8/f82851a5-5f70-488a-b21c-bdd65d2fca7c" },
		],
		Misc$Mana$Sources: [
			{ name: "Palladium Myr", manarr: ["1", "1"], perms: 1, imageUrl: "2/7/27305aad-f1bd-4895-8611-143bc0250bee" },
			{ name: "Radiant Fountain", mana: "1", perms: 1, imageUrl: "0/2/0296c34b-120b-483e-8b49-6d432c04f9a4" },
			{ name: "Animal Sanctuary", mana: "1", perms: 1, imageUrl: "f/8/f8d7a2c7-666d-4fc6-bac8-ef8eb66e355d" },
			{ name: "Llanowar Visionary", mana: "g", perms: 1, imageUrl: "d/6/d6e23afa-7e08-4049-baf0-d4d0134ba2c8" },
		],
		Five$Color$Sources: [
			{ name: "Meteorite", mana: "wubrg", perms: 5, imageUrl: "e/c/ec3a2c95-4e7a-43c5-90bd-6f1de7c82a5c" },
			{ name: "Chromatic Orrery", manarr: ["1", "1", "1", "1", "1"], perms: 1, imageUrl: "3/a/3af78d76-ad5c-44ba-880d-b834bcde5398" },
		],
		sourceOrder: [
			// ordered in the same order as the sources
			// named Like$This
			"Basic$Lands",
			"Dual$Lands",
			"Misc$Mana$Sources",
			"Five$Color$Sources"
		]
	}
}