const orders = [
    {
        id: '24003874339',
        status: 'Передано в SAP',
        statusChangeTime: 'Sun Oct 24 2021 10:24:00 GMT+0300 (Москва, стандартное время)',
    },
    {
        id: '010001247991',
        status: 'Доставлен',
        statusChangeTime: 'Mon May 24 2021 11:59:00 GMT+0300 (Москва, стандартное время)',
    },
    {
        id: '13030778733',
        status: 'Ожидает оплаты',
        statusChangeTime: 'Mon Oct 25 2021 15:45:00 GMT+0300 (Москва, стандартное время)',
    },
    {
        id: '010001247987',
        status: 'Аннулирован',
        statusChangeTime: 'Thu Dec 12 2019 19:52:00 GMT+0300 (Москва, стандартное время)',
    },
    {
        id: 'DB000006008',
        status: 'Новый',
        statusChangeTime: 'Mon Oct 25 2021 16:50:00 GMT+0300 (Москва, стандартное время)',
    }
];
const statuses = ['Новый', 'Ожидает оплаты', 'Передано в SAP', 'Доставлен'];

function changeStatus(id) {
    var changeOrder = orders.filter(item => item.id === id)
    if (changeOrder.status != statuses.pop()) {
        var someel = statuses.indexOf(changeOrder.status)
        changeOrder.status = statuses[someel + 1]
        return ({
            status: 'success',
            message: 'Статус заказа ' + changeOrder[0].id + ' изменен на ' + changeOrder.status
        })
    }
    else{
        return ({
            status: 'error',
            message: 'Заказа нет, или он уже доставлен'
        })
    }
}
var newStatus = changeStatus('DB000006008')
console.log(newStatus)