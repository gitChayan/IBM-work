const button = document.getElementById("submit-products");


button.addEventListener("click", async()=>{

    const name = document.getElementById("name").value;
    const desc = document.getElementById("desc").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const image = document.getElementById("img").value;

    const obj = {
        name, price, category, image, desc
    }

    const response = await fetch("http://localhost:8080/api/create-product", {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(obj)
    });

    const res = await response.json();

    console.log(res)

})
Toastify({
    text: "Hello, this is a toast! 🎉",  // Message
    duration: 3000,                     // Display time (3 seconds)
    gravity: "top",                     // Position (top, bottom)
    position: "right",                  // Alignment (left, center, right)
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Style
    onClick: function() {               // Callback on click
      alert("Toast clicked!");
    }
  }).showToast();
