const container =document.querySelector('.container');
const checkBox=container.querySelectorAll('input[name="food"]');
const h4 =document.querySelector('h4');

checkBox.forEach(element => {
    let output=[];
    let total = 0;
    element.onchange=(e)=>{
        const check=container.querySelectorAll('input[name="food"]:checked');
        check.forEach(item => {
            output.push(item.value);
            total +=+item.getAttribute('price')
        });

        h4.innerHTML =`
        This item is selected ${output.join(', ')},and total Amount is <span style="color:red">${total}</span>,please pay this amount and wait for a moment.
        `
    }
    

});