$(function(){

    let productName = $('#ProductName')
    let productManufacturer = $('#ProductManufacturer')
    let productPrice = $('#ProductPrice')

    $('#btnProductAdd').click(function(){
        addProduct(
            productName.val(), 
            productManufacturer.val(), 
            productPrice.val(),
            function(addedProduct){
                window.alert("Added "+ addedProduct.name + " to DataBase")
            }
        )
    })

})