(this.webpackJsonpgitexpertapp=this.webpackJsonpgitexpertapp||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),i=n.n(c),r=(n(15),n(2)),s=n(9),u=n(0),d=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(r.a)(n,2),i=c[0],d=c[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(s.a)(t))})),d(""))},style:{display:"contents"},children:Object(u.jsx)("input",{type:"text",value:i,onChange:function(t){return function(t){var e=t.target.value;d(e)}(t)},style:{width:"60%"}})}),Object(u.jsx)("button",{onClick:function(){e([])},style:{width:"20%",marginLeft:"10px"},children:"Limpiar Listado"})]})},o=n(10),j=n(6),l=n.n(j),h=n(8),p=function(){var t=Object(h.a)(l.a.mark((function t(e){var n,a,c,i,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=20&api_key=CLEQp1OaLyKEL2wt6kbI1HFY1ZSFZlMp"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,i=c.data,r=(i||[]).map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",r);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();var b=function(t){var e=t.title,n=(t.id,t.url);return Object(u.jsxs)("div",{className:"cards animate__animated animate__bounce",children:[Object(u.jsx)("img",{className:"imgItem",src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},m=function(t){var e=t.categorie,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(r.a)(e,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){p(t).then((function(t){return i({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,i=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeInUp",children:e.toUpperCase()}),i&&Object(u.jsxs)("div",{style:{textAlign:"center",width:"100%"},children:[Object(u.jsx)("img",{style:{width:"20%",height:"10%"},src:"https://media0.giphy.com/media/Q0MrhO9BUSxKR8RdZC/giphy.gif?cid=790b7611328848210ac55432016aa39ceb6464f3ac897345&rid=giphy.gif&ct=g",alt:"Carga"}),Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando..."})]}),0===c.length?Object(u.jsx)("h1",{style:{textAlign:"center"},children:"No hay Datos"}):Object(u.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(u.jsx)(b,Object(o.a)({},t),t.id)}))})]})},g=function(t){var e=Object(a.useState)([""]),n=Object(r.a)(e,2),c=n[0],i=n[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{style:{textAlign:"center"},children:"GIF Expert App"}),Object(u.jsx)(d,{setCategories:i}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:c.map((function(t){return Object(u.jsx)(m,{categorie:t},t)}))})]})};i.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7b4fee67.chunk.js.map