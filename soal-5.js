let angkaJeda = function(n){
    for (let i = 1; i<=n ;i++){
        setTimeout(function(){
            console.log(i)
        },1000*i)
    }
}

angkaJeda(4)
