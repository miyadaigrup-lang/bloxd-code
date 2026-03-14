onPlayerJoin = (id)=>{
 api.sendMessage(id,"Welcome to the server!")
}

onPlayerChat = (id,msg)=>{
 if(msg=="hello"){
  api.sendMessage(id,"Hello player!")
 }
}
