
let http = new XMLHttpRequest();
http.open('get', 'https://randomuser.me/api?results=20', true);

http.send();

http.onload =  function(){
    if(this.readyState == 4 && this.status == 200) {
        let products =JSON.parse(this.responseText);
        console.log(products)
        let output = "";
        // ${results.gender}
        for(let results of products.results){
            console.log(results)
            output += `
                
                 <div class="product">
                 <div class="contact">
                 <div class="contact-detials">
                 <div class="contact-image" id="image1" >
                 <img src="${results.picture.large}" alt="${results.picture .large}">
                </div>
                <div class="contact-image" id="image">
               
                 <h2>${results.name.title}&nbsp;${results.name.first}&nbsp;${results.name.last}</h2>
                 <div class="contact-details">
                 <h3 id="gen">Gender: &nbsp;&nbsp;&nbsp;&nbsp;${results.gender}</h3><br>
                 <h3>Age: &nbsp;&nbsp;&nbsp;&nbsp;${results.dob.age}</h3><br>
                 <h3>Email:   &nbsp;&nbsp;&nbsp;&nbsp;${results.email}</h3><br>
                 <h3>Country:   &nbsp;&nbsp;&nbsp;&nbsp;${results.location.country}</h3><br>
                 <h3>Phone:   &nbsp;&nbsp;&nbsp;&nbsp;${results.phone}</h3>
                 </div>
                </div>
                </div>
                </div>
                 </div>
                `;
        }
        document.querySelector(".container").innerHTML = output;
        
        const boder = document.getElementById('gen');
console.log(boder);
        if(boder == 'female'){
            alert('hdhhddh')
            document.getElementById("image1").style.borderLeft = "thick solid #0000FF";
        }
    }
}

