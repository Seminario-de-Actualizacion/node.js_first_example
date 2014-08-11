var fs=require("fs"),
	url=require("url"),
	hb=require("handlebars"),
	server=require("http").createServer(handler);

server.listen(8000);

function handler(req,res) {
	var path = url.parse(req.url).pathname;
	var reg = /\.(axl)/;
	switch(true){
		// Manejo de las plantillas con extension .axl 
		case reg.test(path):
			var file = fs.readFile(__dirname+path,'utf8',
				function(error,data){
					if(error){
						res.writeHead(500);
						res.end("File {" + path + "} not found");
					}
					var json = {'dateSystem': new Date(), 'Owner':'Alex Roldán HD.'};
					var template = hb.compile(data);
					res.writeHead(200);
					res.end(template(json));
				});
			break;
		// En caso que se haga la solicitud sin ninguna archivo se redirecciona a index.html
		case path=="/":
			path = "/index.html";
		// Manejo para los archivos del servidor
		default:
			var file = fs.readFile(__dirname+path,'utf8',
				function(error,data){
					if(error){
						res.writeHead(500);
						res.end("File {" + path + "} not found");
					}
					res.writeHead(200);
					res.end(data);
				});
	}
}
