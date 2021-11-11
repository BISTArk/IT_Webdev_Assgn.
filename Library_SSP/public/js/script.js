const x = document.getElementById("update_form");
const add_form = document.getElementById("add_form");
const delete_btn = document.getElementById("delete_btn");
const coverimg = document.getElementsByClassName("coverimg");
const search_btn = document.getElementById("search_btn");
const find_btn = document.getElementById("find_btn");

async function deleteoff(bookStr) {
  let book = JSON.parse(bookStr);
  console.log(book);
  let data = {
    name: book.name,
    author: book.author,
  };
  console.log(data);
  let res = await fetch(`http://localhost:3030/delete/${book._id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let json = await res.json();
  console.log(res.status);
  if (res.status === 200) {
    alert("Book Sucessfully deleted");
    window.location.href = "/delete";
  }else{
    window.location.href = "/delete";
  }
}

function tryOtherImages(img, name) {
  img.src = "../covers/" + name + ".jpg";
  img.onerror = function () {
    img.src = "../covers/" + name + ".png";
    img.onerror = function () {
      img.src = "../covers/" + name + ".jpeg";
      img.onerror = function () {
        this.onerror = null
      };
    };
  };
}

if (x !== null) {
  function fun(e) {
    alert("Book has been updated");
    window.location.href = "/update";
  }

  x.onsubmit = fun;
}

if (add_form !== null) {
  function addsubmit(e) {
    alert("Book has been added");
    window.location.href = window.location.href;
  }

  add_form.onsubmit = addsubmit;
}

if (delete_btn !== null) {
  delete_btn.onclick = () => deleteoff(test);
}

if (coverimg !== null) {
  for (const x of coverimg) {
    tryOtherImages(x, x.alt);
  }
}

if(find_btn !== null){
find_btn.addEventListener("click", async () => {
  let form = document.getElementById("find_form");
  let data = {
    name: form.name.value,
    author: form.author.value,
  };
  console.log(data);
  let res = await fetch("http://localhost:3030/find", {
    method: "POST",
    mode: "cors",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let json = await res.json();
  console.log(json);
  if (json.length > 0) {
    window.location.href = `${window.location.href}/${json[0]._id}`;
  } else {
    alert("book not found");
    window.location.href = window.location.href;
  }
});
}

if(search_btn !== null){
  search_btn.addEventListener("click", ()=>{
    console.log("Hemlos");
    const search_form = document.getElementById("search_form");
    window.location.href = `/search/${search_form.term.value}`
    console.log(`/search/${search_form.term.value}`);
  })
}