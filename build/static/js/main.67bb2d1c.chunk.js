(this["webpackJsonpnd0191-myreads-starter"]=this["webpackJsonpnd0191-myreads-starter"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var s=c(0),o=c.n(s),a=c(21),n=c.n(a),r=(c(26),c(27),c(11)),l=c(2),i=c(4),j=c(17),b="https://reactnd-books-api.udacity.com",d=localStorage.token;d||(d=localStorage.token=Math.random().toString(36).substr(-8));var h={Accept:"application/json",Authorization:d},O=c(3);var u=function(e){var t=Object(s.useState)(e.book.shelf),c=Object(i.a)(t,2),o=c[0],a=c[1];return Object(O.jsx)("li",{children:Object(O.jsxs)("div",{className:"book",children:[Object(O.jsxs)("div",{className:"book-top",children:[Object(O.jsx)("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(e.book.imageLinks.smallThumbnail,")")}}),Object(O.jsx)("div",{className:"book-shelf-changer",children:Object(O.jsxs)("select",{value:o,onChange:function(t){var c,s;console.log("Before : "+window.cr),window.cr.splice(1,1),console.log("After : "+window.cr),c=e.book,s=t.target.value,fetch("".concat(b,"/books/").concat(c.id),{method:"PUT",headers:Object(j.a)(Object(j.a)({},h),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:s})}).then((function(e){return e.json()})),a(t.target.value)},children:[Object(O.jsx)("option",{value:"none",disabled:!0,children:"Move to..."}),Object(O.jsx)("option",{value:"currentlyReading",children:"Currently Reading"}),Object(O.jsx)("option",{value:"wantToRead",children:"Want to Read"}),Object(O.jsx)("option",{value:"read",children:"Read"}),Object(O.jsx)("option",{value:"none",children:"None"})]})})]}),Object(O.jsx)("div",{className:"book-title",children:e.book.title}),Object(O.jsx)("div",{className:"book-authors",children:e.book.authors.map((function(e,t){return Object(O.jsxs)("span",{children:[e," ",Object(O.jsx)("br",{})]},t)}))})]})})};var x=function(e){var t=e.data,c=t.books;return Object(O.jsxs)("div",{className:"bookshelf",children:[Object(O.jsx)("h2",{className:"bookshelf-title",children:t.Shelf_title}),Object(O.jsx)("div",{className:"bookshelf-books",children:Object(O.jsx)("ol",{className:"books-grid",children:c.map((function(e){return Object(O.jsx)(u,{book:e},e.id)}))})})]})};function v(e,t){var c=[];return t.map((function(t){t.shelf===e&&c.push(t)})),c}var k=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=(t[0],t[1],Object(s.useState)([])),o=Object(i.a)(c,2),a=o[0],n=o[1],j=function(){fetch("".concat(b,"/books"),{headers:h}).then((function(e){return e.json()})).then((function(e){n(e.books)}))};Object(s.useEffect)((function(){j()}),[]);var d=v("currentlyReading",a),u=v("wantToRead",a),k=v("read",a);return console.log(d),console.log(u),console.log(k),window.cr=d,Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"list-books",children:[Object(O.jsx)("div",{className:"list-books-title",children:Object(O.jsx)("h1",{children:"MyReads"})}),Object(O.jsx)("div",{className:"list-books-content",children:Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{data:{Shelf_title:"Currently Reading",books:d}}),Object(O.jsx)(x,{data:{Shelf_title:"Want to Read",books:u}}),Object(O.jsx)(x,{data:{Shelf_title:"Read",books:k}})]})}),Object(O.jsxs)("div",{className:"open-search",children:[Object(O.jsx)(r.b,{to:"Search",children:" Add a book "}),Object(O.jsx)(l.c,{children:Object(O.jsx)(l.a,{path:"/Search",element:Object(O.jsx)(m,{})})})]})]})})};var m=function(){return Object(O.jsxs)("div",{className:"search-books",children:[Object(O.jsxs)("div",{className:"search-books-bar",children:[Object(O.jsx)(r.b,{className:"close-search",to:"",children:" Close"}),Object(O.jsx)(l.c,{children:Object(O.jsx)(l.a,{path:"/",element:Object(O.jsx)(k,{})})}),Object(O.jsx)("div",{className:"search-books-input-wrapper",children:Object(O.jsx)("input",{type:"text",placeholder:"Search by title, author, or ISBN"})})]}),Object(O.jsx)("div",{className:"search-books-results",children:Object(O.jsx)("ol",{className:"books-grid"})})]})};var p=function(){return Object(O.jsx)(r.a,{children:Object(O.jsx)("div",{className:"app",children:Object(O.jsx)(l.c,{children:Object(O.jsx)(l.a,{path:"/",element:Object(O.jsx)(k,{})})})})})};n.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(p,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.67bb2d1c.chunk.js.map