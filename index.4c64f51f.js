var e=function(e,n,i,t,a){var s=document.querySelector("body"),o=document.createElement("div");switch(o.style.marginRight=n+"px",o.style.marginTop=e+"px",a){case"success":o.className="notification success";break;case"error":o.className="notification error";break;case"warning":o.className="notification warning"}var c=document.createElement("h2");c.className="title",c.innerText=i;var r=document.createElement("p");r.innerText=t,o.appendChild(c),o.appendChild(r),s.appendChild(o),setTimeout(function(){return o.remove()},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.4c64f51f.js.map
