1//
document.getElementById("placeorder").addEventListener('click', function () {
    var name = document.getElementById("productname").innerText;
    var quantity = parseInt(productName.match(/\d+/)[0]);
    var price = document.getElementById("productprice").innerText.replace('$', '');
    var ordertotal = document.getElementById("ordertotal").innerText.replace('$', '');

    var eventName = "ViewPurchasedProduct";
    var properties = {
        "productProperties": [{
            "productname": {
                "t": "string",
                "v": name
            },
            "productprice": {
                "t": "number",
                "v": price
            },
            "productquantity": {
                "t": "number",
                "v": quantity
            }
        }],
        "ordertotal": {
            "t": "number",
            "v": ordertotal
        }
    };

    _cl.trackClick(eventName, properties);

    window.location.href = "thankyou.html";
});


2//
document.getElementById("placeorder").addEventListener('click', function () {
    var firstname = document.getElementById("c_diff_fname").value;
    var lastname = document.getElementById("c_diff_lname").value;
    var email = document.getElementById("c_diff_email_address").value;
    var phone = document.getElementById("c_diff_phone").value;
    var state = document.getElementById("c_diff_state_country").value;
    var zip = document.getElementById("c_diff_postal_zip").value;

    var eventName = "IdentifyUser";
    var properties = {
        "customerProperties": {
            "user_traits": {
                "t": "Object",
                "v": {
                    "c_diff_fname": {
                        "t": "string",
                        "v": firstname
                    },
                    "c_diff_lname": {
                        "t": "string",
                        "v": lastname
                    },
                    "c_diff_phone": {
                        "t": "number",
                        "v": phone
                    },
                    "c_diff_email_address": {
                        "t": "string",
                        "v": email
                    },
                    "c_diff_state_country": {
                        "t": "string",
                        "v": state
                    },
                    "c_diff_postal_zip": {
                        "t": "number",
                        "v": zip
                    }
                }
            },
            "identify_by_email": {
                "t": "string",
                "v": email,
                "ib": true
            }
        }
    }
    _cl.identify(eventName, properties)
    clearInterval(cl_create_user)

});



