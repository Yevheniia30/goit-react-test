(this["webpackJsonpgoit-react-test"]=this["webpackJsonpgoit-react-test"]||[]).push([[0],{14:function(e,t,i){},24:function(e,t,i){},25:function(e,t,i){},26:function(e,t,i){},27:function(e,t,i){"use strict";i.r(t);i(1);var o=i(7),n=i.n(o),r=(i(14),i(15),i(4)),c=i(0),s=Object(r.a)({link:{display:"block",color:"#000000",textDecoration:"none",padding:10,"&:hover":{color:"#fff",backgroundColor:"#808080"}},activeLink:{color:"#fff",backgroundColor:"#752080","&:hover":{color:"#fff",backgroundColor:"#360f3b"}}}),a=function(e){var t=e.path,i=e.label,o=s(),n=window.location.pathname;return Object(c.jsx)("a",{className:[o.link,n===t?o.activeLink:""].join(" "),href:t,children:i})},l=Object(r.a)({nav:{width:200,display:"flex",flexDirection:"column",listStyle:"none",margin:function(e){return 5===e?"20px":"0px"},padding:10,borderRight:"1px solid #000000"}}),j=function(){var e=l(5);window.location.pathname;return console.log(e),Object(c.jsxs)("div",{className:e.nav,children:[Object(c.jsx)(a,{path:"/home-page",label:"HOME"}),Object(c.jsx)(a,{path:"/users-page",label:"USERS"}),Object(c.jsx)(a,{path:"/books-page",label:"BOOKS"}),Object(c.jsx)(a,{path:"/about-page",label:"ABOUT"}),Object(c.jsx)(a,{path:"/test-page",label:"TEST"})]})},u=(i(24),i(25),function(){return Object(c.jsx)("h1",{children:"HomePage"})}),d=function(){return Object(c.jsx)("h1",{children:"UsersPage"})},b=function(){return Object(c.jsx)("h1",{children:"AboutPage"})},p=function(e){var t=e.book,i=t.title,o=t.author,n=t.price;return Object(c.jsxs)("li",{children:[Object(c.jsx)("h2",{children:i}),Object(c.jsx)("p",{children:o}),Object(c.jsx)("p",{children:n}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam tenetur ea reprehenderit eum voluptatum optio! Fugit distinctio maiores fugiat veritatis nesciunt modi temporibus, laborum, officia omnis deleniti, tempore enim eveniet."})]})},h=function(e){var t=e.title,i=e.books;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)("ul",{children:i.map((function(e){return Object(c.jsx)(p,{book:e},e.id)}))})]})};h.defaultProps={books:[]};var m=h,x=i(9),O=function(){return Object(c.jsx)(m,{title:"BooksPage",books:x})},f=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione maxime totam adipisci tempore nam animi perferendis odio! Reiciendis, consequuntur accusantium."}),e.children]})},g=function(e){var t=e.someNumber,i=e.userName,o=e.age;return Object(c.jsxs)("div",{children:[t>10?Object(c.jsxs)("h1",{children:["Hello From React ",t," "]}):Object(c.jsxs)("p",{children:["Hello ",i,"!"]}),o<18&&Object(c.jsx)("p",{children:"Not 18 years old yet! "})]})};g.defaultProps={someNumber:0,userName:"User"};var v=g,k=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"trololo",children:Object(c.jsx)("input",{type:"text",id:"trololo",placeholder:"Enter name"})}),Object(c.jsx)("button",{type:"button",onClick:e.sayHello,children:"Push me"})]})},y=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"TestPage"}),Object(c.jsx)(v,{someNumber:1,age:15,userName:"Yevheniia"}),Object(c.jsx)(k,{sayHello:function(){return console.log("HELLO")}}),Object(c.jsx)(f,{children:Object(c.jsx)("h1",{children:"Test"})})]})},N=function(){var e=window.location.pathname;return Object(c.jsxs)("div",{className:"content",children:["/home-page"===e&&Object(c.jsx)(u,{}),"/users-page"===e&&Object(c.jsx)(d,{}),"/about-page"===e&&Object(c.jsx)(b,{}),"/books-page"===e&&Object(c.jsx)(O,{}),"/test-page"===e&&Object(c.jsx)(y,{}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia assumenda deleniti accusantium facere officia deserunt consequuntur molestias eligendi iste. Sunt tempore, totam dolorem commodi esse odio magni ab placeat ipsum."})]})},P=(i(26),function(e){var t=e.options;return Object(c.jsxs)("div",{className:"ColorPicker",children:[Object(c.jsx)("h2",{className:"ColorPicker__title",children:"Color Picker"}),Object(c.jsx)("div",{children:t.map((function(e,t){return Object(c.jsx)("span",{className:"ColorPicker__option",style:{backgroundColor:e.color}},t)}))})]})}),w=[{label:"red",color:"#F44336"},{label:"green",color:"#4CAF58"},{label:"blue",color:"#2196F3"},{label:"gray",color:"#60708B"},{label:"pink",color:"#E91E63"}],C=function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(j,{}),Object(c.jsx)(N,{}),Object(c.jsx)(P,{options:w})]})};n.a.render(Object(c.jsx)(C,{}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"id":"id-1","title":"My life","author":"Jane Bo","price":450},{"id":"id-2","title":"Love is...","author":"Bobby Jo","price":220},{"id":"id-3","title":"Sweet melody","author":"Alex Parker","price":100},{"id":"id-4","title":"Gracie","author":"Alisa Douson","price":500},{"id":"id-5","title":"Ann Marie","author":"Marie Bell","price":300}]')}},[[27,1,2]]]);
//# sourceMappingURL=main.f60c2465.chunk.js.map