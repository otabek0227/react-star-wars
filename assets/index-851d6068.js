import{r as o,m as c,j as e}from"./index-ec36c5e0.js";const r="_wrapper_l7zyy_1",_="_list__item_l7zyy_11",p="_episode_l7zyy_23",m="_colon_l7zyy_33",d="_title_l7zyy_43",t={wrapper:r,list__item:_,episode:p,colon:m,title:d};function u({personFilms:i}){const[a,n]=o.useState([]);return o.useEffect(()=>{(async()=>{const s=await c(i);n(s)})()},[i]),e.jsx("ul",{className:t.wrapper,children:a.sort((l,s)=>l.episode_id-s.episode_id).map(({title:l,episode_id:s})=>e.jsxs("li",{className:t.list__item,children:[e.jsxs("span",{className:t.episode,children:["Episode ",s]}),e.jsx("span",{className:t.colon,children:" : "}),e.jsx("span",{className:t.title,children:l})]},s))})}export{u as default};
