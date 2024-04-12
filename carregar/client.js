var carregando = false;

RegisterCommand('carregar',(source, args)=>{
    const carregar = args[1];
    if(carregar == '1'){
        if(!carregando){

            carregando = true;
            let player = PlayerPedId();	
            let lib = 'missfinale_c2mcs_1';
            let anim1 = 'fin_c2_mcs_1_camman';
            let lib2 = 'nm';
            let anim2 = 'firemans_carry';
            let distans = 0.15;
            let distans2 = 0.27;
            let height = 0.63;
            let spin = 0.0;	
            let length = 100000;
            let controlFlagMe = 49;
            let controlFlagTarget = 33;
            let animFlagTarget = 1;
            let closestPlayer = GetClosestPlayer(3);
            let target = GetPlayerServerId(closestPlayer);

            if(closestPlayer == null){
                emitNet('cmg2_animations:sync', closestPlayer, lib,lib2, anim1, anim2, distans, distans2, height,target,length,spin,controlFlagMe,controlFlagTarget,animFlagTarget)
            }

        }else{
            carregando = false;
            ClearPedSecondaryTask(GetPlayerPed(-1));
            DetachEntity(GetPlayerPed(-1), true, false);
            let closestPlayer = GetClosestPlayer(3);
            let target = GetPlayerServerId(closestPlayer);
            emitNet("cmg2_animations:stop", target);
        }
    }
      

},false)


onNet('cmg2_animations:syncTarget',(target, animationLib, animation2, distans, distans2, height, length,spin,controlFlag)=>{
	let playerPed = GetPlayerPed(-1)
	let targetPed = GetPlayerPed(GetPlayerFromServerId(target))
	carregando = true
	print("triggered cmg2_animations:syncTarget")
	RequestAnimDict(animationLib)

    while (!HasAnimDictLoaded(animationLib)) {
        Wait(10)
    }
    if(spin == null){
        spin = 180.0;
    }
    AttachEntityToEntity(GetPlayerPed(-1), targetPed, 0, distans2, distans, height, 0.5, 0.5, spin, false, false, false, false, 2, false)

    if(controlFlag == null){
        controlFlag = 0;
    }
    TaskPlayAnim(playerPed, animationLib, animation2, 8.0, -8.0, length, controlFlag, 0, false, false, false)
})



// RegisterNetEvent('cmg2_animations:syncTarget')
// AddEventHandler('cmg2_animations:syncTarget', function(target, animationLib, animation2, distans, distans2, height, length,spin,controlFlag)
// 	local playerPed = GetPlayerPed(-1)
// 	local targetPed = GetPlayerPed(GetPlayerFromServerId(target))
// 	carryingBackInProgress = true
// 	print("triggered cmg2_animations:syncTarget")
// 	RequestAnimDict(animationLib)

// 	while not HasAnimDictLoaded(animationLib) do
// 		Citizen.Wait(10)
// 	end
// 	if spin == nil then spin = 180.0 end
// 	AttachEntityToEntity(GetPlayerPed(-1), targetPed, 0, distans2, distans, height, 0.5, 0.5, spin, false, false, false, false, 2, false)
// 	if controlFlag == nil then controlFlag = 0 end
// 	TaskPlayAnim(playerPed, animationLib, animation2, 8.0, -8.0, length, controlFlag, 0, false, false, false)
// end)











// RegisterNetEvent('cmg2_animations:syncMe')
// AddEventHandler('cmg2_animations:syncMe', function(animationLib, animation,length,controlFlag,animFlag)
// 	local playerPed = GetPlayerPed(-1)
// 	print("triggered cmg2_animations:syncMe")
// 	RequestAnimDict(animationLib)

// 	while not HasAnimDictLoaded(animationLib) do
// 		Citizen.Wait(10)
// 	end
// 	Wait(500)
// 	if controlFlag == nil then controlFlag = 0 end
// 	TaskPlayAnim(playerPed, animationLib, animation, 8.0, -8.0, length, controlFlag, 0, false, false, false)

// 	Citizen.Wait(length)
// end)

// RegisterNetEvent('cmg2_animations:cl_stop')
// AddEventHandler('cmg2_animations:cl_stop', function()
// 	carryingBackInProgress = false
// 	ClearPedSecondaryTask(GetPlayerPed(-1))
// 	DetachEntity(GetPlayerPed(-1), true, false)
// end)

// function GetPlayers()
//     local players = {}

//     for i = 0, 256 do
//         if NetworkIsPlayerActive(i) then
//             table.insert(players, i)
//         end
//     end

//     return players
// end

// function GetClosestPlayer(radius)
//     local players = GetPlayers()
//     local closestDistance = -1
//     local closestPlayer = -1
//     local ply = GetPlayerPed(-1)
//     local plyCoords = GetEntityCoords(ply, 0)

//     for index,value in ipairs(players) do
//         local target = GetPlayerPed(value)
//         if(target ~= ply) then
//             local targetCoords = GetEntityCoords(GetPlayerPed(value), 0)
//             local distance = GetDistanceBetweenCoords(targetCoords['x'], targetCoords['y'], targetCoords['z'], plyCoords['x'], plyCoords['y'], plyCoords['z'], true)
//             if(closestDistance == -1 or closestDistance > distance) then
//                 closestPlayer = value
//                 closestDistance = distance
//             end
//         end
//     end
// 	print("closest player is dist: " .. tostring(closestDistance))
// 	if closestDistance <= radius then
// 		return closestPlayer
// 	else
// 		return nil
// 	end
// end