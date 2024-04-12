setTick(() => {   
    display();      
})


function display(){

    const ped = PlayerPedId()
    const [px, py, pz] = GetEntityCoords(ped, false);  

    let [visivel, x, y] = GetScreenCoordFromWorldCoord(px, py, pz+1.0)
   
    if(visivel){
       
        SetTextScale(0.0, 0.3)
        SetTextFont(0)
        SetTextProportional(1)
        SetTextColour(255, 255, 255, 255)
        SetTextDropshadow(0, 0, 0, 0, 255)
        //SetTextEdge(2, 0, 0, 0, 150)
        //SetTextDropShadow()
        //SetTextOutline()
        SetTextCentre(1)

        BeginTextCommandDisplayText("STRING")
        AddTextComponentSubstringPlayerName("ped id: "+ped)
        EndTextCommandDisplayText(x, y)
    }  
}