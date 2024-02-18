// selection
var apple = document.querySelector("#home");

// css changes
// apple.style.color="white";
// apple.style.backgroundColor="black";

// html change
// apple.innerHTML="<ul>hey whatsapp</ul>"

// text change
// apple.textContent="facebook"

// adding listeners
// apple.addEventListener('mouseenter',function(){
//     apple.style.color="red";
// })
// apple.addEventListener('mouseleave',function(){
//     apple.style.color="black";
// })

var arr = [
  {
    name: "Petals of roses",
    Image:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Animals od town",
    Image:
      "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "the crowd of city",
    Image:
      "https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "fruits of planet",
    Image:
      "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "orange peeled",
    Image:
      "https://images.unsplash.com/photo-1495512446763-b2bdc445b4db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "web design",
    Image:
      "https://images.unsplash.com/photo-1560972550-aba3456b5564?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Application design",
    Image:
      "https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function showTheCards() {
  var clutter = "";
  arr.forEach(function (obj) {
    clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.Image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
  });
  document.querySelector(".container").innerHTML = clutter;
}
function handleSerchFunctionality() {
  var input = document.querySelector("#searchinput");
  input.addEventListener("focus", function () {
    document.querySelector(".overlay").style.display = "block";
  });
  input.addEventListener("blur", function () {
    document.querySelector(".overlay").style.display = "none";
  });
  input.addEventListener("input", function () {
    const filterdArray = arr.filter((obj) =>
      obj.name.toLowerCase().startsWith(input.value)
    );
    var clutter = "";
    filterdArray.forEach(function (obj) {
      clutter += `<div class="res flex px-8 py-3">
        <i class="ri-search-line font-semibold mr-5"></i>
        <h3 class="font-semibold">${obj.name}</h3>
        </div>`;
    });
    document.querySelector(".searchdata").style.display = "block";
    document.querySelector(".searchdata").innerHTML = clutter;
  });
}

showTheCards();
handleSerchFunctionality();
