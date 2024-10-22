const menu = () => {
    const content = document.getElementById("content");

    const menuContent = document.createElement("div");
    menuContent.classList.add("menu-content");
    menuContent.innerHTML = `
        <h1>OUR MENU</h1>
        <div id="food">
            <h1>foods</h1>
            <ul>
                <li>Banku and Okro stew</li>
                <li>Fufu and palm nut soup</li>
                <li>Waakye and egg</li>
                <li>Tuo and zaafi</li>
            </ul>
            <h1>Beverages</h1>
            <ul>
                <li>fanta lemon</li>
                <li>coca cola</li>
                <li>Tamarinda sunny</li>
                <li>Belfast</li>
            </ul>
        </div>
    `;
    content.appendChild(menuContent);
}


export {menu}