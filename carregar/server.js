// RegisterServerEvent('cmg2_animations:sync')
// AddEventHandler('cmg2_animations:sync', function(target, animationLib,animationLib2, animation, animation2, distans, distans2, height,targetSrc,length,spin,controlFlagSrc,controlFlagTarget,animFlagTarget)
// 	TriggerClientEvent('cmg2_animations:syncTarget', targetSrc, source, animationLib2, animation2, distans, distans2, height, length,spin,controlFlagTarget,animFlagTarget)
// 	TriggerClientEvent('cmg2_animations:syncMe', source, animationLib, animation,length,controlFlagSrc,animFlagTarget)
// end)




// RegisterServerEvent('cmg2_animations:stop')//Marca o evento como seguro para uso em rede
// AddEventHandler('cmg2_animations:stop', function(targetSrc)
// 	TriggerClientEvent('cmg2_animations:cl_stop', targetSrc) //Dispara um evento no(s) cliente(s) especificado(s) e transmite quaisquer argumentos adicionais.
// end)


on('cmg2_animations:sync',(target, animationLib,animationLib2, animation, animation2, distans, distans2, height,targetSrc,length,spin,controlFlagSrc,controlFlagTarget,animFlagTarget)=>{
    emitNet('cmg2_animations:syncTarget', targetSrc, source, animationLib2, animation2, distans, distans2, height, length,spin,controlFlagTarget,animFlagTarget)
    emitNet('cmg2_animations:syncMe', source, animationLib, animation,length,controlFlagSrc,animFlagTarget)
})
 

on('cmg2_animations:stop',(targetSrc)=>{
   emitNet('cmg2_animations:cl_stop', targetSrc)
})





// on (alias: addEventListener, AddEventHandler)
// RegisterNetEvent (alias: RegisterServerEvent)
// emitNet (alias: TriggerClientEvent, TriggerServerEvent)


// onNet (alias: addNetEventListener)
// emit
// addRawEventListener (alias: addRawEventHandler)
// removeEventListener
// setTick
// clearTick
