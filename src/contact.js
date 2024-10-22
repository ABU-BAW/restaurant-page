const contacts = () => {
    const content = document.getElementById("content");

    const contactContent = document.createElement("div");
    contactContent.classList.add("contact-content");
    contactContent.innerHTML = `
        <h1>CONTACTS</h1>
        <div>
            <h2>manager</h2>
            <p>Phone: +233 557339307</p>
            <p>email: hassanmanager@gmail.com</p>
        </div>
        <div>
            <h2>supervisor</h2>
            <p>Phone: +233 206735935</p>
            <p>email: superviman@gmail.com</p>
        </div>
        <div>
            <h2>waiter</h2>
            <p>Phone: +233 247469234</p>
            <p>email: waiterstanding@gmail.com</p>
        </div>
    `;
    content.appendChild(contactContent);

}

export {contacts}