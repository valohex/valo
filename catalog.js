// let buildLink = 'https://test.com/'
// let password = '666';

// // не трогать
// const products = [
//     {
//         id: 1,
//         img: "assets/images/catalog/fortnite.svg",
//         name: "AquaFort Cheat",
//         content: "AquaFortCheat contains a lot of functionality that will help you win royal battles",
//         link: (buildLink),
//     },
//     {
//         id: 2,
//         img: "assets/images/catalog/cs2.svg",
//         name: "AquaCS2 Cheat",
//         content: "AquaCS2_Cheat will help you win any CS2 game. Good protection, many functions, user-friendly interface",
//         link: (buildLink),
//     },
//     {
//         id: 3,
//         img: "assets/images/catalog/gta.svg",
//         name: "AquaGTAV Cheat",
//         content: "AquaGTAV_Cheat is a good trainer for both offline and online sessions",
//         link: (buildLink),
//     },
//     {
//         id: 4,
//         img: "assets/images/catalog/minecraft.svg",
//         name: "AquaMinecraft Cheat",
//         content: "Everything you need for your PVP can be found in AquaMinecraftCheat",
//         link: (buildLink),
//     },
//     {
//         id: 5,
//         img: "assets/images/catalog/apex.svg",
//         name: "AquaApex Cheat",
//         content: "Find all the features you need in AquaApexCheat",
//         link: (buildLink),
//     },
//     {
//         id: 6,
//         img: "assets/images/catalog/valorant.svg",
//         name: "AquaValorant Cheat",
//         content: "Win and dominate with AquaValorantCheat.",
//         link: (buildLink),
//     },
//     {
//         id: 7,
//         img: "assets/images/catalog/rainbow.svg",
//         name: "AquaRainbow Cheat",
//         content: "AquaRainbowCheat will help you win where it is impossible to win",
//         link: (buildLink),
//     },
//     {
//         id: 8,
//         img: "assets/images/catalog/roblox.svg",
//         name: "AquaRoblox Cheat",
//         content: "The best executer for roblox for PC, without keys",
//         link: (buildLink),
//     },
//     {
//         id: 9,
//         img: "assets/images/catalog/pubg.svg",
//         name: "AquaPUBG Cheat",
//         content: "AquaPUBG_Cheat will make you a king in royal battles",
//         link: (buildLink),
//     },
//     {
//         id: 10,
//         img: "assets/images/catalog/warzone.svg",
//         name: "AquaWarzone Cheat",
//         content: "AquaWarzoneCheat contains a lot of auxiliary functions for your game",
//         link: (buildLink),
//     },
//     {
//         id: 11,
//         img: "assets/images/catalog/dayz.svg",
//         name: "AquaDayZ Cheat",
//         content: "AquaDayZ_Cheat will open up new possibilities in the game",
//         link: (buildLink),
//     },
//     {
//         id: 12,
//         img: "assets/images/catalog/league.svg",
//         name: "AquaLeague Cheat",
//         content: "AquaLeagueCheat is an innovation that will allow you to raise your rating",
//         link: (buildLink),
//     },
//     {
//         id: 13,
//         img: "assets/images/catalog/rust.svg",
//         name: "AquaRust Cheat",
//         content: "AquaRustCheat is a spector of joy for you and your neighbors",
//         link: (buildLink),
//     },
//     {
//         id: 14,
//         img: "assets/images/catalog/overwatch.svg",
//         name: "AquaOverwatch2 Cheat",
//         content: "AquaOverwatch2_Cheat will help you ensure an enjoyable game",
//         link: (buildLink),
//     },
//     {
//         id: 15,
//         img: "assets/images/catalog/genshin.svg",
//         name: "AquaGenshin Cheat",
//         content: "Fighting monsters will become much easier with AquaGenshinCheat",
//         link: (buildLink),
//     },
//     {
//         id: 16,
//         img: "assets/images/catalog/left4.svg",
//         name: "AquaLeft4Dead2 Cheat",
//         content: "Play simply and comfortably with AquaLeft4Dead2_Cheat",
//         link: (buildLink),
//     },

// ]

// const catalog = document.getElementById('catalogContainer');

// products.map((item, index) => {
//     catalog.innerHTML += `
//     <div class="catalog-block__item">
//     <div>
//         <img src="${item.img}" alt="" class="catalog-block__img">
//         <div class="catalog-block__item-title">${item.name}</div>
//         <div class="catalog-block__item-subtitle">${item.content}</div>
//         <div class="catalog-block__item-subtitle">Archive password: ${password}</div>
//     </div>
//     <a href="${item.link}" class="catalog-block__item-link">GET FREE</a>
//     <div class="catalog-block__actual">#Actual</div>
// </div>`;
// })