const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const port = 7777;

// get resouces from /public
app.use(express.static(__dirname));

// for the post requests
app.use(bodyParser.urlencoded({extended:true}))

// send the index.html file to the user on the GET request
app.get('/', function (req, res){
    res.sendFile('index.html', {root: __dirname})
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });

// listen on the port
app.listen(port, ()=> {
    console.log(`Now listening on port ${port}`);
});

// // python options
// var options = {
//     mode: 'text',
//     pythonPath: __dirname + '/python3_7_1env/scripts/python.exe',
//     pythonOptions: [],
//     scriptPath: __dirname + '/pythonScripts',
//     args: []
// };

// // function to run a python script and retreive errors
// async function runPython() {
//     const { success, err = '', results } = await new Promise((resolve, reject) => {
//       PythonShell.run('powerPointify.py', options, function(
//         err,
//         results
//       ) {
//         if (err) {
//             console.log(err)
//           reject({ success: false, err });
//         }
//         resolve({ success: true, results });
//       });
//     });
//   };

// async function runScripts(theme){
//     console.log("loading...")
//     await runPython();
//     console.log("completed: " + theme);
// }

app.post ('/upload', upload.single('image'), (req, res) => {
    var userText = req.body.userInputText;
    var userImage = req.body.userInputImage;
    if(userImage == "") {
    }
    res.sendStatus(200);
    console.log(userText);
});