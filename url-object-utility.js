/** 
  * URL object utility 
  * Purpose: The url() function was developed to have a quick and stable way of capturing url sections from either a specified url or the current url. The function returns an object with all of the url parts as well as some commonly used comparisons and shortcuts.
    When no url is passed to the function, the document.location will be used instead.
  *
  * Example:
  * href = "http://www.somedomain.com/folder/file.ext?search=this&found=that&email=name@gmail.com#yuppeee"
  * 
  * url: full url
  * url(href).url > "http://www.somedomain.com/folder/file.ext?search=this&found=that&email=name@gmail.com#yuppeee"
  *
  * noprotocol: full url without the protocol
  * url(href).noprotocol = "www.somedomain.com/folder/file.ext?search=this&found=that&email=name@gmail.com#yuppeee"
  *
  * protocol: full protocol
  * url(href).protocol > "http:"
  *
  * host: host or hostname
  * url(href).host = "www.somedomain.com"
  *
  * dots: array of host parts as separated by dots
  * url(href).dots > Array[0 = "com", 1 = "somedomain", 2 = "www"]
  *
  * domain: domain section of host, including capturing 3 section country domains
  * url(href).domain > "somedomain.com"
  *
  * matchHost: returns true if specified url's host matches the current url's host
  * url(href).matchHost > false
  *
  * undot: domain section of host without dots
  * url(href).undot > "somedomaincom"
  *
  * sub: subdomain ( removes domain from host )
  * url(href).sub > "www"
  *
  * uri: uri path in full including search and hash
  * url(href).uri > "/folder/file.ext?search=this&found=that&email=name@gmail.com#yuppeee"
  *
  * hash: hash portion of uri, not including the "#"
  * url(href).hash > "yuppeee"
  *
  * search: search portion of uri, not including the "?"
  * url(href).search > "search=this&found=that&email=name@gmail.com"
  *
  * path: uri without search or hash
  * url(href).path > "/folder/file.ext"
  *
  * extension: file extension of path
  * url(href).extension > "ext"
  *
  * noEmail: replace email addresses with REMOVED@REMOVED
  * url(href).noEmail > "http://www.somedomain.com/folder/file.ext?search=this&found=that&email=REMOVED@REMOVED#yuppeee"
  *
  */
  
  var url = function(u) { 
    try{var r={};r.url = u||document.location.href;r.noprotocol=r.url.replace(/^(https?\:)?\/\//i,'');r.protocol=r.url.split('//')[0];r.host=r.noprotocol.split('/')[0]||'';r.dots= r.host.split('.').reverse();r.domain= (r.dots[1].length==2 ? r.dots[2]+'.':'')+r.dots[1]+'.'+r.dots[0];r.matchHost= (new RegExp(r.host,"i")).test(document.location.hostname);r.undot=r.domain.replace(/\./g,'');r.sub=r.host.replace('.'+r.domain,'');r.uri=r.noprotocol.replace(r.host,'');r.hash=r.uri.split('#')[1]||'';r.search=r.uri.replace('#'+r.hash,'').split('?')[1]||'';r.path=r.uri.replace('?'+r.search,'').replace('#'+r.hash,'')||'';r.extension=r.path.split('.').reverse()[0].replace(/\//g,'');r.noEmail= r.url.replace(/(?:=)[^&]*@[^&]*/gi,'=REMOVED@REMOVED');return r;} catch(e){}
  }
