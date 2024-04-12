RegisterCommand("loc", ()=>{
    const [x, y, z] = GetEntityCoords(PlayerPedId(), false)
    console.log(x.toFixed(3)+","+y.toFixed(3)+","+z.toFixed(3))    
},false)




RegisterCommand("vestir", ()=>{
    console.log("Nada acontece")
},false)