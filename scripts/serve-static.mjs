import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('out');
const port=Number(process.env.PORT||3000);
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.txt':'text/plain; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.woff2':'font/woff2','.ico':'image/x-icon'};
const server=http.createServer(async(req,res)=>{
 try{
  const url=new URL(req.url||'/', 'http://localhost');
  const name=decodeURIComponent(url.pathname);
  if(name.includes('\0')){res.writeHead(400);res.end();return;}
  let file=path.resolve(root,'.'+name);
  if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
  const stat=await fs.stat(file);
  if(stat.isDirectory())file=path.join(file,'index.html');
  const bytes=await fs.readFile(file);
  res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});
  res.end(req.method==='HEAD'?undefined:bytes);
 }catch{
  res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});
  try{res.end(await fs.readFile(path.join(root,'404.html')));}catch{res.end('Not found');}
 }
});
server.listen(port,'127.0.0.1',()=>console.log(`GSTGuru Pro preview: http://127.0.0.1:${port}`));
