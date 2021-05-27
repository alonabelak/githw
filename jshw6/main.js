let arr_style = [
    {
        prop:"color",
        value: "green"
    },
    {
        prop:"font-size",
        value: "20px"
    },
    {
        prop:"text-align",
        value: "center"
    },
    {
        prop:"text-decoration",
        value: "line-through"
    },
    
];
function styleInfo (){ 
    let text = document.getElementById("style_text").value;
    let style = "";
    for (i = 0; i < arr_style.length; i++) {
        style += `${arr_style[i].prop}:${arr_style[i].value};
       `;
    }
    let rez = `<p style="${style}">${text}</p>`;
    document.getElementById("style_rez").innerHTML = rez;
}

let arrAudit = [
    {
        name:"Green auditorium",
        number: "50",
        faculty: "Faculty of Foreign Philology"
    },
    {
        name:"Blue auditorium",
        number: "40",
        faculty: "Faculty of English Philology"
    },
    {
        name:"Black auditorium",
        number: "60",
        faculty: "Faculty of Ukrainian Language"
    },
    {
        name:"Red auditorium",
        number: "30",
        faculty: "Faculty of Physical Trainings"
    },
]

function auditInfoShow(arr){
    let rez = "<ul>";
    for (let i = 0; i < arr.length; i++) {
        rez += `<li> Name of auditorium: ${arr[i].name};<br>Number of places: ${arr[i].number};<br>Faculty: ${arr[i].faculty};  </li>`;
    }
    rez += "</ul>"
    return rez;
}
function auditInfo(){
    let rez = auditInfoShow(arrAudit);
    document.getElementById("audit_rez").innerHTML = rez;
}

function facultyInfo (){
    let info = document.getElementById("auditorium").value;
    let rez_info = arrAudit.findIndex(function (el){
        if(el.faculty == info) {
            return el;
        }
    });
    let rez = arrAudit[rez_info].name;
    document.getElementById("faculty_rez").innerHTML = rez;
}

function auditGroupInfo() {
    let group = document.getElementById("auditgroup").value;
    let rez_info = arrAudit.findIndex(function (el){
        if(el.faculty == group || el.number == group || el.faculty == group) {
            return el;
        }
    });
    let rez = `${arrAudit[rez_info].name}; ${arrAudit[rez_info].number}; ${arrAudit[rez_info].faculty}; `;
    document.getElementById("group_rez").innerHTML = rez;
}

function sortAudit() {
    let sort = arrAudit.sort (function(a,b){
        if (a.number > b.number) {
            return 1;
        } else if (a.number < b.number) {
            return -1;
        } else if (a.number == b.number) {
            return 0;
        }
    });
    let rez = auditInfoShow(sort);
    document.getElementById("sort_rez").innerHTML = rez;
}

function nameSortAudit (){
    let sort = arrAudit.sort (function(a,b){
        if (a.name > b.name) {
            return 1;
        } else if (a.name < b.name) {
            return -1;
        } else if (a.name == b.name) {
            return 0;
        }
    });
    let rez = auditInfoShow(sort);
    document.getElementById("namesort_rez").innerHTML = rez;
}