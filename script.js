let wrapper = document.body;
let div = document.createElement("div");
div.innerHTML = "<div class=''><i class='bi bi-geo-alt'></i> <p>Shahar:Toshkent</p> <p>Topshirish punktlari</p></div> <p>Buyurmangizni 1 kunda bepul yetkazib beramiz!</p><div> <p>Uzumda soting</p><p>Savol-javoblar</p> <p>Buyurtmalarim</p> <select><option>O'zbekcha</option><option>Русскый</option> </select></div>"

div.classList.toggle("header");
wrapper.append(div);

let nav = document.createElement("nav");
nav.innerHTML = "<div class='nav__logo-block'><img src='./img/uzum logo.jpg' alt='The Image' /><h1>Uzum market</h1></div> <button><i class='bi bi-collection'></i> Katalog </button><div class='search-items'><input type='text' placeholder='Mahsulotlar va turkumlar izlash'><i class='bi bi-search'></i></div> <div><i class='bi bi-person'></i><p>Kirish</p></div> <div><i class='bi bi-heart'></i><p>Saralanganlar</p></div> <div><i class='bi bi-bag'></i><p>Savat</p></div> "

nav.classList.toggle("nav");
wrapper.append(nav);

let nav2 = document.createElement("nav2");
nav2.innerHTML = "<div class='union'><img src='./img/union.png' alt='The Image' /><small>Muddatli to'lov</small></div><div class='low-prices'><img src='./img/Низкие цены.png' alt='The Image' /><small>Arzon narxlar</small></div><div class='our-yard'><img src='./img/Наш двор.png' alt='The Image' /><small>Hovlimiz</small></div><div><ul><li>Elektronika</li><li>Maishiy texnika</li><li>Kiyim</li><li>Poabzallar</li><li>Aksessuarlar</li><li>Go'zallik va parvarish</li><li>Salomatlik</li><select><option>Yana</option></select> </ul></div>"

nav2.classList.toggle("nav2");
wrapper.append(nav2);




















// let header = document.createElement("header");
// header.innerHTML = "<div><img src='./img/Screenshot 2024-04-23 172803.png' alt='The Image' /></div> ";
// wrapper.append(header);

// header.classList.toggle("header");

