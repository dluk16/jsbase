RegisterCommand("chat", async (source, args) =>{
    let argsString = args.join(" ")
    emitNet("js:chat", (argsString ? argsString: "mensagem.."),["cores"])
    return
})