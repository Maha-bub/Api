/*
const object={
    name:'Mahabub',
    id:1295223,
    address:{
        division:'dhaka',
        district:'Nilphamari',
        currentAddress:'Dhanmodi'
    }

}
const stringified=JSON.stringify(object);
console.log(stringified);
*/

const shop={
    owner:'alil',
    dddress:{
        streed:'dhanmondi',
        city:'dhaka',
        country:'Bangladesh'
    },
    product_details:{
        brand:'lenove',
        price:50000

    }
}

const shopString=JSON.stringify(shop);
console.log(shopString)
const jsonObject=JSON.parse(shopString);
console.log(jsonObject);