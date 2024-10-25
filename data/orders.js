export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order){
    orders.unshift(order);
    savToStorage();
}

function savToStorage(){
    localStorage.setItem('orders', JSON.stringify(orders));
}