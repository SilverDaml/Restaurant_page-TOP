import './style.css';

const menu = () => {


    //Main content creation
    const content = document.getElementById('content')
    content.innerHTML = '';
    let h1 = document.createElement('h1');

    



    h1.textContent = "Our Menu";


    
    content.appendChild(h1);

        // Create container for menu cards
        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu-container');
    
        // Menu items
        const menus = [
            {
                name: "Gourmet Burger",
                image: "../src/gourmet-burger.jpg",
                description: "A delicious burger made with premium beef patty, topped with gourmet cheese, fresh vegetables, and special sauce.",
                price: "$10.99"
            },
            {
                name: "Pasta",
                image: "../src/gourmet-pasta.jpg",
                description: "Authentic Italian pasta cooked to perfection and served with your choice of sauce: marinara, alfredo, or pesto.",
                price: "$12.99"
            },
            {
                name: "Pizza",
                image: "../src/gourmet-pizza.jpg",
                description: "Classic Italian pizza with a crispy crust, topped with tomato sauce, mozzarella cheese, and your favorite toppings.",
                price: "$14.99"
            }
        ];
    
        // Create menu cards
        menus.forEach(menuItem => {
            const card = document.createElement('div');
            card.classList.add('menu-card');
    
            const image = document.createElement('img');
            image.src = menuItem.image;
            image.alt = menuItem.name;
    
            const name = document.createElement('h2');
            name.textContent = menuItem.name;
    
            const description = document.createElement('p');
            description.textContent = menuItem.description;
    
            const price = document.createElement('p');
            price.textContent = menuItem.price;
    
            // Append elements to card
            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(description);
            card.appendChild(price);
    
            // Append card to menu container
            menuContainer.appendChild(card);
        });
    
        // Append menu container to content div
        content.appendChild(menuContainer);

    return content;
}

export default menu;
