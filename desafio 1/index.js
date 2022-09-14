function pegueOGato(rex, bob, oli){
    var diferencaRex = Math.abs(oli - rex);
    var diferencaBob = Math.abs(oli - bob);

    console.log(diferencaBob);
    console.log(diferencaRex);

    if(diferencaBob == diferencaRex){
        return "Oli";
    }else{
        if(diferencaBob < diferencaRex){
            return "Bob";
        }else{
            return "Rex";
        }
    }
}