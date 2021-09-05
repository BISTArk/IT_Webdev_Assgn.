const form = document.getElementById('feedback');
let submitable = 5;
let totalPrice = 0.00;
const prices = {
    hoodie : 1000,
    coffeemug : 600,
    shirt : 500
}

function loadpriceTable(){
    for (const x in prices) {
        const price = document.getElementById(`${x}_price`);
        price.innerHTML = prices[x];
    }
}

let validate = {
    val_name : (name)=>{
        let regexp = /^\+?([a-zA-Z]{1,10})\)?[ ]?([a-zA-Z]{1,10})[ ]?([a-zA-Z]{1})$/;
        if (name.match(regexp)) {
            submitable--;
            return true;
        } else {
            return false;
        }
    },

    val_city : (city)=>{
        let regexp  = /[a-zA-Z]/;
        if (city.match(regexp)) {
            submitable--;
            return true;
        } else {
            return false;
        }
    },

    val_phone : (number)=>{
        let regexp = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;
        if (number.match(regexp)) {
            submitable--;
            return true;
        } else {
            return false;
        }
    },

    val_mail : (mailid)=>{
        let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mailid.match(regexp)) {
            submitable--;
            return true;
        } else {
            return false;
        }
    },

    val_comments : (comment)=>{
        if (comment.length>0) {
            submitable--;
            return true;
        } else {
            return false;
        }
    }
}

function formsub(){
    const x = document.getElementById("feedback");
    let result = "Results Sent ->";
    for (let i=0;i<x.length-1;i++) {
        result+=`${x[i].name} : ${x[i].value}\n`;
    }
    alert(result);
    x.reset();
}

for (const x of form) {
    x.addEventListener("blur",()=>{
        if(validate[`val_${x.name}`](x.value)){
            document.getElementById(`invalid_${x.name}`).innerHTML = ``;
        }else{
            document.getElementById(`invalid_${x.name}`).innerHTML = `Invalid_${x.name}`;
        }
    });
    console.log(x);
}

let updatePrice = ()=>{
    totalPrice = 0;
    console.log("HELLO");
    for (const x in prices) {
        totalPrice += (document.getElementById(`${x}_quant`).value)*prices[x];
    }

    document.getElementById('total_price').value = `${totalPrice}`;
    console.log(document.getElementById('total_price'),totalPrice);
}

for (const x in prices) {
    document.getElementById(`${x}_quant`).addEventListener('change',()=>{
        updatePrice(x);
    });

}

window.onload = ()=>{
    form.reset();
    loadpriceTable();
    for (const x in prices) {
        document.getElementById(`${x}_quant`).value = 0;
    }
    updatePrice();
}


document.getElementById("total-btn").addEventListener('click',()=>{
    alert(`Total Price of the order = ${totalPrice}`)
})

document.getElementById("submit-btn").addEventListener('click',(event)=>{
    event.preventDefault();
    if(submitable===0){
        formsub();
    }else{
        alert("Fill all the required Fields");
    }
});

