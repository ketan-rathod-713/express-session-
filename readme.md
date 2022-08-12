
## Express Session

It is used to create the session with the user. What does that mean ?? In simple words once i logged in to the website i don't need to log in once again to prove my identity, express-session will let the server know that the user is authentic.<br>

### How is it even possible as http protocol is stateless ?
Yes http protocol is stateless, it doesn't remember the client's information once connection closed. But Nowadays there are some usefull options, one of them is cookies. We can store some information in browser side using this. There is expiration period of every cookie, after that browser will delete it.
<br>
Storing username and password in client side would be fool thing to do. Rather we will store one id on client side ( we call it session id ) using express-session, and later if the user creates a http request to any route then we will check if the user is authentic or not.
<br>
## To get brief idea read below documents one by one : 

https://www.w3schools.com/js/js_cookies.asp <br>

### First understand how basic http headers/protocol work , then..
[http headers mdn docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

[cookies in nodejs](https://www.section.io/engineering-education/what-are-cookies-nodejs/) <br>

[express-session npm package](https://www.npmjs.com/package/express-session) <br>

[YOUTUBE VIDEO FOR ALL ABOVE](https://www.youtube.com/watch?v=F-sFp_AvHc8&t=10308s "Google's Homepage")



