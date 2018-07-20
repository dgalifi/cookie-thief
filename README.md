express webserver for stealing cookie values
==============================
run with 

```node index.js```

index.html is an example page containing a XSS script which reads all the cookies and sends the values to the webserver

the cookie values are saved on the log-cookie.txt file

the idea is injecting the img script in a form vulnerable to xss

### Remember 

 - update the URL value in var url = 'http://10.0.2.15:3000'
 - remove all the console.log from the img script. They are there just for debugging purposes


