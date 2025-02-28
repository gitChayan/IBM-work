function getData(){
    let parsedData=JSON.parse(localStorage.getItem("cartData"));
    // let container = document.getElementById('cart-items');
    // let emptyMsg = document.getElementById('empty-cart');
    
    console.log(parsedData);
   
    parsedData.forEach((el,index)=>{
        let productBox=document.createElement("div");//make a big box
        productBox.className="product-box";//applying css 
        let heading = document.createElement("h3");
        heading.innerText=el.category;
    
        let img=document.createElement("img");
        img.src=el.image;
    
        let name = document.createElement("p");
        name.innerText=el.name;
    
        let price=document.createElement("p");
        price.innerText=el.price;
    
        let rating=document.createElement("p");
        rating.innerText=el.rating;
         
        let button=document.createElement("button");
        button.innerText="Add to cart";
        button.addEventListener("click",()=>{
            addTocart(el,index);

        });

        productBox.append(heading,img,name,price,rating,button);

        document.getElementById("cart-items").append(productBox);
    
    
    });
}
getData();


