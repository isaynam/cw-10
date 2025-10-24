import { header } from "./component/header/header.js";
import { introduction } from "./component/introduction/introduction.js";
import { feature } from "./component/feature/feature.js";
import {deatails} from "./component/deatails/deatails.js";
import "./style.css";
// document.addEventListener('DOMContentLoaded',function() {
// 	const app=document.getElementById("app")
// // 	app.appendChild(header())
// // 	const main = document.createElement('main');
// // main.innerHTML = '<p>Welcome to my website!</p>';
// // app.appendChild(main);
// })
export function render() {
const app= document.getElementById("app")
const componentHeader=header()
const bannerText=introduction()
const featureComponent = feature();
const cartDeatails = deatails();
app.innerHTML=`
${componentHeader}
${bannerText}
${featureComponent}
${cartDeatails}
`
}
document.addEventListener('DOMContentLoaded',render())