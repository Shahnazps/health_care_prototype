(this.webpackJsonphealth_centre=this.webpackJsonphealth_centre||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"id":"MED12345","name":"Crocin 650","mfgBy":"GSK","image":"/Crocin650.jpg","description":"Crocin Tablets is known as a mild analgesic that is used to treat mild fever and is a common pain reliever. It is often given to patients who suffer from cancer or have undergone surgery, to help them cope up with the pain.","ingredients":[{"name":"Paracetamol","conc":"650mg"}],"batchDetails":[{"id":"BATCH1","mfgDate":"09/2018","expiryDate":"10/2020","instock":"true","qty":"10"},{"id":"BATCH2","mfgDate":"10/2018","expiryDate":"11/2020","instock":"false","qty":"20"},{"id":"BATCH3","mfgDate":"10/2018","expiryDate":"12/2020","instock":"true","qty":"10"}],"cost":"30.00","uses":["Fever","Muscle Pain"],"safety_instructions":"Store in a cool dry place away from direct sunlight. Seek medical advice if the patient is suffering from liver or kidney problems. Keep out of reach of the children"},{"id":"MED82789","name":"Alerid 10 MG","mfgBy":"Cipla","image":"/Alerid10.jpg","description":"Alerid 10 MG Tablet is a very effective and potent medication to treat allergic symptoms associated with Rhinitis and Utricaria. Allergies such as runny nose, watery eyes, sneezing, skin itching and hives can be effectively treated with this medicine.","ingredients":[{"name":"Cetirizine","conc":"10mg"}],"batchDetails":[{"id":"BATCH1","mfgDate":"09/2018","expiryDate":"10/2020","instock":"true","qty":"10"},{"id":"BATCH2","mfgDate":"10/2018","expiryDate":"11/2020","instock":"false","qty":"20"},{"id":"BATCH3","mfgDate":"10/2018","expiryDate":"12/2020","instock":"true","qty":"10"}],"cost":"18.00","uses":["Allergies"],"side_effects":["Headache","Sleepiness"],"safety_instructions":"Store in a cool dry place away from direct sunlight. Seek medical advice if the patient is suffering from liver or kidney problems. Keep out of reach of the children"}]')},24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(21),r=a.n(c),l=a(12),s=a(10);a(29),a(16),a(30);var o=function(){return i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row"},i.a.createElement(l.b,{to:"/medicines/"},"Jump to medicines")))},m=a(5),d=a(6),u=a(8),p=a(7),h=a(9),f=a(14),g=(a(36),function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"filter",style:{marginTop:"10%"}},i.a.createElement("h4",{className:"filter_heading"},"Filters"),i.a.createElement("hr",null),i.a.createElement("div",null,"Uses"),i.a.createElement("hr",null),i.a.createElement("div",null,"Company"),i.a.createElement("hr",null),i.a.createElement("div",null,"Salt"),i.a.createElement("hr",null),i.a.createElement("div",null,"Cost"),i.a.createElement("hr",null))}}]),t}(n.Component)),E=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.data;console.log(e);var t=e.map((function(e){return i.a.createElement("li",{key:e.id,className:"medicine"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-2"},i.a.createElement("img",{className:"medicine_image",src:e.image,alt:e.name})),i.a.createElement("div",{className:"col-lg-10"},i.a.createElement("p",{className:"medicine_name"},e.name),i.a.createElement("p",{className:"medicine_description"},e.description,"\xa0",i.a.createElement(l.b,{to:"/medicines/"+e.id},"See more \xbb")))))})),a=i.a.createElement("div",null,i.a.createElement("h2",{className:"medicines_heading"},"Medicines"),i.a.createElement("ul",{className:"medicines_list"},t));return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-9"},a),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(g,null))))}}]),t}(n.Component),v=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement(E,{data:f})}}]),t}(n.Component),y=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.match.params.id,t=f.filter((function(t){return t.id===e}))[0];return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-2"},i.a.createElement("img",{className:"medicine_image",src:t.image,alt:t.name})),i.a.createElement("div",{className:"col-lg-10"},i.a.createElement("p",{className:"medicine_name"},t.name),i.a.createElement("p",{className:"medicine_description"},t.description),i.a.createElement("p",null,i.a.createElement("b",null,"Cost:"),"\xa0\u20b9 ",t.cost),i.a.createElement("p",{className:"medicine_safety_instructions"},i.a.createElement("b",null,"Safety Instructions: "),t.safety_instructions))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=i.a.createElement(l.a,null,i.a.createElement("div",null,i.a.createElement(s.a,{exact:!0,path:"/",component:o}),i.a.createElement(s.a,{exact:!0,path:"/medicines/",component:v}),i.a.createElement(s.a,{exact:!0,path:"/medicines/:id",component:y})));r.a.render(b,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.6aae6ea6.chunk.js.map