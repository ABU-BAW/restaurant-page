import foodImage from "./fd.jpeg";

const contents = () => {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "welcome to barakat restaurant";
    const image = document.createElement("img");
    image.src = foodImage;
    image.setAttribute("alt", "image of food");
    const category = document.createElement("div");

    const food = document.createElement("div");
    food.classList.add("food");
    const beverages = document.createElement("div");
    beverages.classList.add("beverages");

    category.appendChild(food);
    category.appendChild(beverages);

    content.appendChild(heading);
    content.appendChild(image);
    content.appendChild(category);

};

export { contents }

