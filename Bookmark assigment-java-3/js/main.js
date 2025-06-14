var BookMarkName = document.getElementById("BookMarkName");
var SiteUrl = document.getElementById("SiteUrl");

var tableContent = document.getElementById("tableContent")

var closeBtn = document.getElementById("closeBtn")
var boxErorr = document.querySelector(".box-info")
var MarkBooklist;


if (localStorage.getItem("MarkBooklist")) {
    MarkBooklist = JSON.parse(localStorage.getItem("MarkBooklist"))
    displaybookmark(MarkBooklist);



} else {
    MarkBooklist = []
}


// add book

function addBookmark() {

    if (bookvalidation(), bookurlvalidation()) {
        var markbook = {
            name: BookMarkName.value,
            website: SiteUrl.value,

        }

        MarkBooklist.push(markbook)
        displaybookmark(MarkBooklist)
        // console.log (MarkBooklist);
        clearinput();
        saveToLocalStorage();

    } else {
        console.log("erorr");
        boxErorr.classList.remove("d-none")

    }

}

// add cartoona

function displaybookmark(Booklist) {
    // var url = MarkBooklist[index].website;
    console.log(Booklist);
    var cartoona = "";

    for (var i = 0; i < Booklist.length; i++) {
        cartoona += `<tr>
                            <td>${i + 1}</td>
                            <td>${Booklist[i].name}</td>
                            <td><button class="btn btn-visit" data-index="${i}" > <i class="fa-solid fa-eye pe-2"> visit</button></td>
                            <td><button  onclick="deletebook(${i})" class="btn btn-danger" data-index="${Booklist}" >  <i class="fa-solid fa-trash-can"></i>  DeLete</button></td>
                        </tr>`
    }
    tableContent.innerHTML = cartoona;

}
// clear after add
function clearinput() {
    BookMarkName.value = null;
    SiteUrl.value = null;

}

// delete book
function deletebook(index) {
    // console.log("hhh", index);
    MarkBooklist.splice(index, 1);
    displaybookmark(MarkBooklist);
    saveToLocalStorage();


}

// save to local
function saveToLocalStorage() {
    localStorage.setItem("MarkBooklist", JSON.stringify(MarkBooklist))
}

// validation
function bookvalidation() {
    var regex = /^\w{3,}(\s+\w+)*$/;

    if (regex.test(BookMarkName.value)) {

        console.log("tmm");
        BookMarkName.classList.add("is-valid")
        BookMarkName.classList.remove("is-invalid")
        return true



    } else {
        console.log('88tmm');
        BookMarkName.classList.add("is-invalid")
        BookMarkName.classList.remove("is-valid")
        return false
    }

}
function bookurlvalidation() {
    var regexurl = /^https:\/\/(w{3}\.)(\w{2,})(\.[a-zA-Z]{2,})$/;
    if (regexurl.test(SiteUrl.value)) {

        console.log("tmm");

        SiteUrl.classList.add("is-valid")
        SiteUrl.classList.remove("is-invalid")
        return true



    } else {
        console.log('88tmm');
        SiteUrl.classList.add("is-invalid")
        SiteUrl.classList.remove("is-valid")
        return false
    }

}
var btnVisit = document.querySelectorAll(".btn-visit")
// if (btnVisit) {
for (var x = 0; x < btnVisit.length; x++) {

    btnVisit[x].addEventListener("click", function (e) {
        // console.log(e);
        var index = e.currentTarget.dataset.index;
        console.log(index)
        var url = MarkBooklist[index].website;
        if (!/^https?:\/\//.test(url)) {
            url = "https://" + url;
        }

        window.open(url, "_blank");


    });

}
// cloes box

function cloesBox() {
    boxErorr.classList.add("d-none");
    // document.body.style.overflow = "hidden";
}

closeBtn.addEventListener("click", function () {
    boxErorr.classList.add("d-none")

});

document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
        boxErorr.classList.add("d-none")
    }
})


document.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.classList.contains("box-info")) {
        cloesBox()

    }


})




// }

// visit to Website
// function visitWebsite(e) {
//     var indexwebsit = e.target.dataset.index;
//     console.log(indexwebsit);

//     var httpsRegex = /^https?:\/\//;
//     console.log(MarkBooklist);
//     if (httpsRegex.test(MarkBooklist[indexwebsit].website)) {

//         open(MarkBooklist[indexwebsit].website);
//         console.log(MarkBooklist);


//     } else {
//         open(`https://${MarkBooklist[indexwebsit].website}`);
//         console.log(MarkBooklist);

//     }


// }









// <a href="${Booklist[i].website}"></a> 