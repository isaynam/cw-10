import { header } from "./component/Header/Header.js";
import { banner } from "./component/Banner/Banner.js";
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
const bannerText=banner()
app.innerHTML=`
${componentHeader}
${bannerText}
`
}
document.addEventListener('DOMContentLoaded',render())