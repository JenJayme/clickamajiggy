(this.webpackJsonpclickamajiggy=this.webpackJsonpclickamajiggy||[]).push([[0],{22:function(a,e,t){a.exports=t(34)},27:function(a,e,t){},28:function(a,e,t){a.exports=t.p+"static/media/logo.5d5d9eef.svg"},29:function(a,e,t){},34:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),l=t(5),i=t.n(l),c=(t(27),t(17)),s=(t(28),t(29),t(16));var o=function(){return console.log("Engaging navbar index.js..."),r.a.createElement("div",null,r.a.createElement(s.a,{className:"navbar",bg:"purple",expand:"lg"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",{className:"brand"},"Clickamajiggy")),r.a.createElement("div",{className:"col"},r.a.createElement("h4",{className:"center"},"Click an image to begin")),r.a.createElement("div",{className:"col"},r.a.createElement("h3",{className:"right"},"Score: 0 | Top Score: 0"))))},m=t(14),g=t(15),u=t(6),p=t(20),d=t(18),h=r.a.createContext({name:"",artURL:""}),j=[{name:"Clocks",artURL:"/art/clocks-ru.jpg"},{name:"Flaming June",artURL:"/art/flaming-june-ru.jpg"},{name:"The Kiss",artURL:"/art/kiss-ru.jpg"},{name:"Lilies",artURL:"/art/lilies-ru.jpg"},{name:"Ceci N'Est Pas Une Pipe",artURL:"/art/magritte1-ru.jpg"},{name:"Daybreak",artURL:"/art/maxfield-ru.jpg"},{name:"Maxfield Parrish 2",artURL:"/art/maxfield2-ru.jpg"},{name:"Mother and Child",artURL:"/art/mother-child-ru.jpg"},{name:"Nighthawks",artURL:"/art/nighthawks-ru.jpg"},{name:"The Scream",artURL:"/art/scream-ru.jpg"},{name:"The Lady of Shalott",artURL:"/art/shallott-ru.jpg"},{name:"Room Full of Sistahs",artURL:"/art/sistahs-ru.jpg"},{name:"Sugarshack",artURL:"/art/sugarshack-ru.jpg"},{name:"Sunflowers",artURL:"/art/sunflowers-ru.jpg"},{name:"Wave",artURL:"/art/wave-ru.jpg"},{name:"Ecstasy",artURL:"/art/ecstasy-ru.jpg"}],k=function(a){Object(p.a)(t,a);var e=Object(d.a)(t);function t(a){var n;return Object(m.a)(this,t),(n=e.call(this,a)).state={paintings:j,selection:null},n.randomizePaintings=n.randomizePaintings.bind(Object(u.a)(n)),n.handleClick=n.handleClick.bind(Object(u.a)(n)),n}return Object(g.a)(t,[{key:"handleClick",value:function(a){var e=a.target.dataset.painting;this.paintingName===this.state.selection?(console.log("double click alert"),alert("Wrong!")):this.setState({selection:e}),this.randomizePaintings()}},{key:"randomizePaintings",value:function(){this.setState({paintings:j.sort((function(a,e){return.5-Math.random()}))})}},{key:"render",value:function(){console.log("Engaging ArtBlock component in card index.js...");for(var a=this.state.paintings,e=[],t=0;t<a.length;t++)e.push(r.a.createElement("img",{key:a[t].name,className:"artBlock",src:"/clickamajiggy"+a[t].artURL,"data-painting":a[t].name,alt:j[t].name,onClick:this.handleClick}));return r.a.createElement("div",{className:"background"},e)}}]),t}(r.a.Component),E=t(37);var v=function(){console.log("Engaging app.js...");var a=Object(n.useState)({name:"",artURL:""}),e=Object(c.a)(a,2);return e[0],e[1],r.a.createElement("div",{className:"App"},r.a.createElement(o,null),r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Click on an image to earn points, but don't click on any more than once!")),r.a.createElement(E.a,null,r.a.createElement(h.Provider,null,r.a.createElement("div",null,r.a.createElement(k,null))),r.a.createElement("p",null)),r.a.createElement("div",{className:"footer"}))};t(33);i.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8fce9c47.chunk.js.map