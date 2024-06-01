const cherio = require('cherio');
 const request = require('request');
const fs = require('fs');

// Create a Write Stream 
var WriteStream  = fs.createWriteStream("ImagesLink.txt", "UTF-8");


// request('https://www.growpital.com', (err, resp, html)=> it is not working it doesn't contain the perfect image form so i put another link for test 

request('https://www.BMW.com', (err, resp, html)=>{

    if(!err && resp.statusCode == 200){
        console.log("Request was success ");
        
        // Define Cherio or $ Object 
        const $ = cherio.load(html);

        $("img").each((index, image)=>{

            var img = $(image).attr('src');
            var baseUrl = 'https://www.BMW.com';
            var Links = baseUrl + img;
            WriteStream.write(Links);
            WriteStream.write("\n");
        });

    }else{
        console.log("Request Failed ");
    }
});