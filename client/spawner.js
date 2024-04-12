  on('onClientGameTypeStart', () => {
    exports.spawnmanager.setAutoSpawnCallback(() => {     
      exports.spawnmanager.spawnPlayer(
        {             
          x: 686.245,
          y: 577.950,
          z: 130.461,
          heading: 291.71,
          model: 'mp_m_freemode_01',
          skipFade: false
        }   
      );
    });   
    exports.spawnmanager.setAutoSpawn(true)
    exports.spawnmanager.forceRespawn()  
  });

  Delay = (ms) => new Promise(res => setTimeout(res, ms));

  RegisterCommand("reset", async() =>{   
      modelo()
  }, false);
  
  
  function modelo(){
      let model = 'mp_m_freemode_01';    
      if(IsModelInCdimage(model) && IsModelValid(model)){
          RequestModel(model)
      
          while(!HasModelLoaded(model)){
              Delay(1000)
          }
          SetPlayerModel(PlayerId(), model)
      
          if( model !== "mp_f_freemode_01" && model !== "mp_m_freemode_01"){
              SetPedRandomComponentVariation(PlayerPedId(), true)
          }else{           
              SetPedComponentVariation(PlayerPedId(), 0, 0, 0, 0)//rosto         
              SetPedComponentVariation(PlayerPedId(), 1, 0, 0, 0)//mascaras
              SetPedComponentVariation(PlayerPedId(), 2, 6, 1, 2)//cabelos
              SetPedComponentVariation(PlayerPedId(), 3, 15, 0, 0)//corpo
              SetPedComponentVariation(PlayerPedId(), 4, 29, 0, 0) //calças, ped, parte, modelo, textura, cor
              SetPedComponentVariation(PlayerPedId(), 5, 0, 0, 0)//mochilas e paraquedas
              SetPedComponentVariation(PlayerPedId(), 6, 1, 0, 0)//sapatos
              SetPedComponentVariation(PlayerPedId(), 7, 151, 0, 0)//acessorios
              SetPedComponentVariation(PlayerPedId(), 8, 15, 0, 0)//camiseta
              SetPedComponentVariation(PlayerPedId(), 9, 0, 0, 0)//colete
              SetPedComponentVariation(PlayerPedId(), 10, 53, 0, 0)//adesivos
              SetPedComponentVariation(PlayerPedId(), 11, 45, 0, 0)//jaqueta
          }
          SetModelAsNoLongerNeeded(model)
      }
  }   