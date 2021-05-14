const topPanel = {
    info(text = "Some text here", autoclose = true) {
        this.showPanel(text, "info", autoclose);
    },
    success(text = "Some text here", autoclose = true) {
        this.showPanel(text, "success", autoclose);
    },
    danger(text = "Some text here", autoclose = false) {
        this.showPanel(text, "danger", autoclose);
    },
    warning(text = "Some text here", autoclose = false) {
        this.showPanel(text, "warning", autoclose);
    },
    showPanel(text, type, autoclose) {
        let btn = autoclose
            ? ""
            : '<button onclick="topPanel.closePanel()>&times;</button>';
        let h = `<div id="top_panel" class="panel_${type}">
          <p>${text}</p>${btn}<div></div>`;
        if (document.getElementById("top_panel") !== null) {
            this.closePanel();
        }
        document
            .getElementsByTagName("body")[0]
            .insertAdjacentHTML("afterbegin", h);
        if (autoclose) {
            const _this = this;
            setTimeout(function () {
                _this.closePanel();
            }, 3000);
        }
    },
    closePanel() {
        document.getElementById("top_panel").remove();
    },
};

let CART = [];

const cartAction = {
    add: function ($prod) {     // $prod переменная, просто объект
        $prod.buy = false;
        // CART.find(function ()); //find содержит в себе функцию котороя должна вернуть результат
        // CART.find(function (el) { }); // эта функция аргументом принимает текущий элемент в массиве а в {тело функции} 
        // if (el.title == $prod.title) {         //если в элементе el поле title равно тому что нам пришло в объекте $prod по ключу title нам нужно вернуть элемент
        // return el;                         // результат возвращается в find, а find должен его присвоить в кокую-то переменную, ее надо объявить let isset_prod 
        // }
        // итого получили
        // let isset_prod = CART.find(function (el) {
        //     if (el.title == $prod.title) {
        //         return el;
        //     }
        // });
        // let isset_prod = CART.find((el) => el.title == $prod.title);  //тоже самое стрелочная функция
        let isset_prod = CART.find(
            function (el) { return el.title == $prod.title; }  // function , избавляемся от стрелки, ставим квадратные скобки, в конце точку с запятой и return
        );


        if (isset_prod !== undefined) {
            let new_qty = $prod.qty + isset_prod.qty;
            let prod_ind = CART.findIndex(function (el) {
                return el.title === $prod.title;
            });
            CART[prod_ind].qty = new_qty;
            CART[prod_ind].buy = false;
        } else {
            CART.push($prod);
        }
    }, buyed(k) {
        if (CART[k].buy) {
            CART[k].buy = false;
        } else {
            CART[k].buy = true;
        }
        printCart();
    },
    dlt(k) {
        if (!CART[k].buy) {
            if (confirm("Really delete product: " + CART[k].title + "?")) {
                CART.splice(k, 1);
                printCart();
            }

        } else {
            topPanel.warning("Product already bought", true);
        }
    },
    maxTotal() {
        let max_key = 0;
        let max_total = CART[0].price * CART[0].qty;
        for (let i = 1; i < CART.length; i++) {
            if (CART[i].price * CART[i].qty > max_total) {
                max_total = CART[i].price * CART[i].qty;
                max_key = i;
            }
        }
        return {
            title: CART[max_key].title,
            total: max_total
        };

    },
    letSort(arr) {
        arr.sort(
            function (a, b) {
                if (a.buy !== false) {
                    return 1;
                } else {
                    return -1;
                }
            }

        )
        printCart();
    }
};

function mySort() {
    cartAction.letSort(CART);
}


function maxTotalProduct() {
    const prod = cartAction.maxTotal();
    const res = `
    <p><b> ${prod.title}</b> ${prod.total.toFixed(2)}</p>
    `;
    document.getElementById("max_prod").innerHTML = res;
}


function addToCart() {
    const title = document.getElementById("prod_name").value,        
        price = parseFloat(document.getElementById("prod_price").value),
        qty = parseInt(document.getElementById("prod_qty").value);

    let valid = true,  
        errMsg = [];   

    if (title === "") {  
        valid = false;
        errMsg.push("Enter product name.");  
    }
    if (isNaN(price) || price <= 0) {
        valid = false;
        errMsg.push("Enter product price");
    }
    if (qty <= 0) {
        valid = false;
        errMsg.push("Enter product qty.");
    }



    if (valid) {  
        cartAction.add(
            {
                title: title, 
                price: price,
                qty: qty,
                
            });
        document.getElementById("prod_name").value = ""; 
        document.getElementById("prod_price").value = "";
        document.getElementById("prod_qty").value = "1";
        document.getElementById("prod_name").focus();

        printCart();  

    } else {   
        topPanel.warning(errMsg.join(""), true);
    }
}


function printCart() {  
    let res = "<ul>",
        cart_total = 0,
        qty_total = 0;
    for (let i = 0; i < CART.length; i++) {
        const prod = CART[i];
        const is_buy = prod.buy ? `<span class="badge bg-success">&#10003;</span>` : `<span class="badge bg-danger">&times;</span>`;
        const prod_total = prod.qty * prod.price
        cart_total += prod_total;
        qty_total += prod.qty;
        res += `
        <li class="mb-3">
            ${is_buy} <b>${prod.title}<b>  ${prod.qty} x  ${prod.price.toFixed(2)} =  ${prod_total.toFixed(2)}
            <div class="mt-2 text-end">
                <button type="button" class ="btn btn-info btn-sm mr-4" onclick ="cartAction.buyed(${i})">Bought</button>     
                <button type="button" class ="btn btn-danger btn-sm" onclick ="cartAction.dlt(${i})">Delete</button>     
            </div>
           
        </li> `;
    }
    res += `<li> <b> TOTAL: <b>${cart_total.toFixed(2)}</li>`;
    res += `<li> <b> Avg_positions: <b>${(cart_total / CART.length).toFixed(2)}</li>`;
    res += `<li> <b> Avg_units: <b>${(cart_total / qty_total).toFixed(2)}</li>`;
    res += "</ul>";
    document.getElementById("cart_list").innerHTML = res;
}

let arr_style = [
    {
        prop: "color",
        value: "red"
    },
    {
        prop: "font-size",
        "value": 30
    },
    {
        prop: "text-align",
        "value": "center"
    },
    {
        prop: "text-decoration",
        value: "underline"
    }
];


function myStyle() {
    let mytext = document.getElementById("text_style").value;
    debugger;
    let stl = "";
    for (i = 0; i < arr_style.length; i++) {
        stl += `${arr_style[i].prop}:${arr_style[i].value};
       `;
        
    }
    let res = `<p style="${stl}"> ${mytext}</p>`;
    document.getElementById("res_style").innerHTML = res;
};



/*задача 4*/

let arrAudience = [
    {
        numb_name: "first audience",
        quantity: 19,
        faculty_name: "Department of Economics"
    },
    {
        numb_name: "second audience",
        quantity: 12,
        faculty_name: "Faculty of Cybersecurity"
    },
    {
        numb_name: "third audience",
        quantity: 16,
        faculty_name: "Faculty of Business"
    },
    {
        numb_name: "fourth audience",
        quantity: 18,
        faculty_name: "Faculty of Automation and Electronics"
    },
    {
        numb_name: "fifth audience",
        quantity: 20,
        faculty_name: "Faculty of Tourism"
    }
];







































































