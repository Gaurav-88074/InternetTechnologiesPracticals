window.onload = function(params) {
    $('.btn1').click((e)=>{
        e.preventDefault();
        // console.log("i'm hit");
        // console.log(e);
        const name = $('#name').val();
        const model= $('#model').val();
        const year = $('#year').val();
        const type = $('#type').val();
        const color = $('#color').val();
        const seating_capacity = $('#seating-capacity').val();
        const cubic_capacity = $('#cubic-capacity').val();
        // console.log(name);
        const obj = {
            name,model,year,
            type,color,seating_capacity,cubic_capacity
        }
        console.log(obj);
    })
}