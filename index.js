const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Tüm public dosyalar bu klasörden sunulacak
app.use(express.static(__dirname))

// Ana sayfa
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

