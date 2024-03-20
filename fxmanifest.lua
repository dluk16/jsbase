fx_version 'cerulean'
game 'gta5'

author 'LucianoEun <lucianoeun@gmail.com>'
description 'Base fivem em javascript'
version '1.0.0'

--=========================================
client_script {
    'client/spawner.js'    
}

--=========================================
server_script {
    'server/login.js',
    'server/logout.js',
    'server/database.js'    
}

--=========================================
ui_page 'views/index.html'

loadscreen 'views/loadscreen.html'
loadscreen_cursor 'yes'

files {
    'views/index.html',
    'views/loadscreen.html'
}
