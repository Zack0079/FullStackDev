const { app, BrowserWindow } = require('electron')
const path = require('node:path')

function createWindow() {
    const mainWindow  = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    app.isPackaged
    ? mainWindow.loadFile(path.join(__dirname, "index.html")) // Prod
    : mainWindow.loadURL("http://localhost:3000"); // Dev

    // mainWindow.loadFile('test.html')

}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {

        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') {
        app.quit()
    }
})