import React from "react";
import MultiplePizzas from "../assets/pizza.jpeg";
import "../styles/About.css";
import "../styles/About1.css";
function About1() {
  return (
    <div className="about1">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> Товары</h1>
        <table>
		<tr>
				<td>
					Наименование
				</td>
				<td>
					Цена
				</td>
				<td>
					Гипермаркет
				</td>
				<td>
					Адрес
				</td>
				<td>
					Ссылка
				</td>
			</tr>
			<tr>
				<td>
					snickers
				</td>
				<td>
					160тг.
				</td>
				<td>
					Fix Price
				</td>
				<td>
					ул. Бейбитшилик, 75, корп. 1
				</td>
				<td>
				<a target="_blank" href="https://yandex.kz/maps/org/fix_price/193525166363/?from=tabbar&ll=71.405137%2C51.181741&mode=search&sctx=ZAAAAAgCEAAaKAoSCa01lNqL21FAESQPRBZpkElAEhIJuJVem42V4D8RPYIbKVsk0z8iBgABAgMEBSgKOABAowFIAWoCa3qdAc3MTD2gAQCoAQC9ARqg4lLCAWCb4v730AWtk%2BqZywP%2F95CKlAW5jZndpAaauKWJ5AGWgvLUiAGitZKVgQP3iNXWqAbB6euDogWTsY%2Bq5QLz34nmsAaku%2BOYjgaXrfH3tQKT%2Foyb6wTJpuHixgKziYytrAPqAQDyAQD4AQCCAhlmaXggcHJpY2Ug0LIg0LDRgdGC0LDQvdC1igIAkgIDMTYzmgIMZGVza3RvcC1tYXBz&sll=71.405137%2C51.181741&source=serp_navig&sspn=0.123253%2C0.045800&text=fix%20price%20%D0%B2%20%D0%B0%D1%81%D1%82%D0%B0%D0%BD%D0%B5&z=14">
Map Yandex</a>
				</td>
			</tr>
			<tr>
				<td>
					snickers
				</td>
				<td>
					160тг.
				</td>
				<td>
					Fix Price
				</td>
				<td>
					ул. Биржан Сала, 2
				</td>
				<td>
				<a target="_blank" href="https://yandex.kz/maps/org/fix_price/180933555393/?from=tabbar&ll=71.405137%2C51.181741&mode=search&sctx=ZAAAAAgCEAAaKAoSCa01lNqL21FAESQPRBZpkElAEhIJuJVem42V4D8RPYIbKVsk0z8iBgABAgMEBSgKOABAowFIAWoCa3qdAc3MTD2gAQCoAQC9ARqg4lLCAWCb4v730AWtk%2BqZywP%2F95CKlAW5jZndpAaauKWJ5AGWgvLUiAGitZKVgQP3iNXWqAbB6euDogWTsY%2Bq5QLz34nmsAaku%2BOYjgaXrfH3tQKT%2Foyb6wTJpuHixgKziYytrAPqAQDyAQD4AQCCAhlmaXggcHJpY2Ug0LIg0LDRgdGC0LDQvdC1igIAkgIDMTYzmgIMZGVza3RvcC1tYXBz&sll=71.405137%2C51.181741&source=serp_navig&sspn=0.123253%2C0.045800&text=fix%20price%20%D0%B2%20%D0%B0%D1%81%D1%82%D0%B0%D0%BD%D0%B5&z=14">
Map Yandex</a>
				</td>
			</tr>
			<tr>
				<td>
					snickers
				</td>
				<td>
					180тг.
				</td>
				<td>
					Magnum Express
				</td>
				<td>
					ул. Акбидай, 6
				</td>
				<td>
				<a target="_blank" href="https://yandex.kz/maps/org/195969515484/?from=tabbar&ll=71.405137%2C51.181915&mode=search&sll=71.405137%2C51.181741&source=serp_navig&sspn=0.123253%2C0.045800&text=Marnum&z=13.9">
Map Yandex</a>
				</td>
			</tr>
			<tr>
				<td>
					snickers
				</td>
				<td>
					180тг.
				</td>
				<td>
					Magnum Express
				</td>
				<td>
					просп. Республики, 45
				</td>
				<td>
				<a target="_blank" href="https://yandex.kz/maps/org/127373315994/?from=tabbar&ll=71.405137%2C51.181915&mode=search&sll=71.405137%2C51.181741&source=serp_navig&sspn=0.123253%2C0.045800&text=Marnum&z=13.9">
Map Yandex</a>
				</td>
			</tr>
		</table>
      </div>
    </div>
  );
}

export default About1;