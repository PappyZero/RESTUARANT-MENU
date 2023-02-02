let foodContainer = document.querySelector('.food-container');

const fooditem=[
    {
        FoodName: "pounded yam and egusi",
        foodimg: 'images/pounded yam and egusi.jpg',
        price: "#700",
        type: "L unch",
        des: "Pounded yam and egusi is a local delicacy which is full of nutritious content made to brighten up everyones lunchtime and make them have a great day ahead."
    },
    {
        FoodName: "bread and tea",
        foodimg: 'images/bread and tea image.jpg',
        price: "#500",
        type: "breakFast",
        des: "Bread and tea is the perfect meal to begin the day with, best served hot with freshly baked bread, very sumptuous and good to begin the day with."
    },
    {
        FoodName: "pap and akara",
        foodimg: 'images/pap and akara image.jpg',
        price: "#550",
        type: "breakFast",
        des: "Pap and akara recipe — easy breakfast, brunch or dinner recipe that is protein rich, healthy and tasty. Pap and akara is a kids' favorite, so it is made often for their after school snack. Pap can actually be taken any time you feel like but it's mostly taken in the morning."
    },
    {
        FoodName: "Beans and plantain",
        foodimg: 'images/beans and plantain.jpg',
        price: "#450",
        type: "Lunch",
        des: "Beans is every real man's favourite meal and is even better alonside plantain. Get yourself some beans and plantain today and be happy. "
    },
    {
        FoodName: "Amala and ewedu",
        foodimg: 'images/amala and ewedu.jpg',
        price: "#400",
        type: "Lunch",
        des: "Amala is a very popular Nigerian delicacy common with the westerners but accepted by all. It is made of yam flour, cassava flour or plantain floor which is very good."
    },
    {
        FoodName: "fried rice and chicken",
        foodimg: 'images/fried rice and chicken.jpg',
        price: "#600",
        type: "Lunch",
        des: "Fried rice is like the best lunch time meal for everyone, it is filled many vegetables and meat which makes it very proteinous and healthy."
    },
    {
        FoodName: "Potato and egg sauce",
        foodimg: 'images/potato.jpg',
        price: "#500",
        type: "Lunch",
        des: "This is a very reliefing and satisfying meal to brighten up ones day and make them happy."
    },

    {
        FoodName: "Zobo delight",
        foodimg: 'images/zobo drink.jpg',
        price: "#150",
        type: "Drinks",
        des: "You need less than five minutes to make this easy zobo. Use our simple recipe on it’s own or use it as a base for other drinks."
    },
    {
        FoodName: "Kunu Shakes",
        foodimg: 'images/kunu drink.jpg',
        price: "#150",
        type: "Drinks",
        des: "Kunu shake is a cool and tempting  drink prepared from natural grains like millet, maize and also tiger nut. To keep things simple and easy, this recipe primarily explains how to make Kunu with tiger nut (Aya)."
    },

    {
        FoodName: "indomie relish",
        foodimg: 'images/indomie relish image.jpg',
        price: "#400",
        type: "Dinner",
        des: "Indomie relish is a classic spicy and tasty noodle to end the day, it contains seafood to increase its nutritional content."
    },
    {
        FoodName: "Cassava Flakes (Garri)",
        foodimg: 'images/cassava flakes.jpg',
        price: "#250",
        type: "Dinner",
        des: "Cassava Flakes is the easiest and tastiest meal to make as it does not require much effort and ingredients, It is our very own local delicacy."
    }
]


const food = fooditem.map(item => {
    const listitem = ` <div class="col-md-6 foodbox ${item.type}">
    <!-- content div -->
    <div class="content b my-2">
        <!-- image -->
        <div class="c-image">
            <img src="${item.foodimg}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">  
                <!-- title -->
                <span class="title">${item.FoodName}</span>
                <!-- price -->
                <span class="price">${item.price}</span>
            </div>
            <!-- Description -->
            <div class="des my-3 ">
                <p>${item.des}</p>
            </div>
        </div>   
    </div>
</div>`;
foodContainer.innerHTML += listitem;
})
const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('ul');

menu.forEach(m => {
    m.addEventListener('click', e=>{
        console.log(e.target.innerHTML)
        foodbox.forEach(box => {
            box.classList.add('d-none')
            if(e.target.innerHTML === 'All')
            {
                box.classList.remove('d-none')
            }
            else if(e.target.innerHTML==='Breakfast'){
                if(box.classList.contains('breakFast'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Lunch'){
                if(box.classList.contains('Lunch'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Drinks'){
                if(box.classList.contains('Drinks'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Dinner'){
                if(box.classList.contains('Dinner'))
                {
                    box.classList.remove('d-none')
                }
                
            }
        })
        
    })
})