let angkaJeda = function(n){
    for (let i = 1; i<=n ;i++){
        if (i === 1){
            console.log(i)
        }else{
            setTimeout(function(){
                console.log(i)
            }, 1000)
        }
    }
}

angkaJeda(4)
