(this.webpackJsonpreactform=this.webpackJsonpreactform||[]).push([[0],{138:function(e,a,t){e.exports=t.p+"static/media/baristaespresso.ed3a6ee1.jpg"},139:function(e,a,t){e.exports=t.p+"static/media/baristacaffecrema.7c8ebf47.jpg"},140:function(e,a,t){e.exports=t.p+"static/media/privatkaffeeafricanblue.a89be64d.jpg"},141:function(e,a,t){e.exports=t.p+"static/media/espressomilanostyle.92de93fe.jpg"},142:function(e,a,t){e.exports=t.p+"static/media/espressosiciliastyle.6988f578.jpg"},202:function(e,a,t){e.exports=t(398)},207:function(e,a,t){},212:function(e,a,t){},213:function(e,a,t){},214:function(e,a,t){},319:function(e,a,t){},389:function(e,a,t){},398:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(3),l=t.n(c),o=(t(207),t(45)),s=t(46),i=t(52),m=t(47),u=t(53),p=t(31),d=(t(212),t(213),t(403)),y=(t(214),d.a.Text),h=function(e){return n.a.createElement("div",{className:"total-cart-container"},n.a.createElement(y,{className:"custom-title"},"Warto\u015b\u0107 koszyka: ",n.a.createElement("span",{className:"price-style"},e.cartTotal)," z\u0142"))},E=t(402),f=t(406),v=t(399),g=t(407),k=t(24),N=t(400),w=t(410),b=E.a.Column,O=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).handleAddProduct=function(){t.props.cart.length<5?(t.props.addProduct(),t.props.handleCartTotal()):t.handleWarning()},t.handleChangeAmount=function(e,a){a>=1&&a<=10&&(t.props.changeAmount(e,a),t.props.handleCartTotal())},t.handleDeleteRow=function(e){t.props.deleteRow(e),t.props.handleCartTotal()},t.handleWarning=function(){f.a.warning("Uuups! Nie mamy wi\u0119cej produkt\xf3w!")},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,null,n.a.createElement("div",{className:"products-list"},n.a.createElement(E.a,{renderEmpty:!1,pagination:!1,dataSource:this.props.cart},n.a.createElement(b,{className:"picture-column",title:"",dataIndex:"picture",key:"picture",render:function(e){return n.a.createElement("img",{alt:"kawa",src:e})}}),n.a.createElement(b,{title:"Produkt",dataIndex:"name",key:"product"}),n.a.createElement(b,{title:"Ilo\u015b\u0107",dataIndex:"amount",key:"amount",render:function(a,t){return n.a.createElement(g.a,{size:"small",min:1,max:10,defaultValue:t.amount,onChange:function(a){return e.handleChangeAmount(t,a)}})}}),n.a.createElement(b,{className:"total-price",title:"Suma",dataIndex:"totalPrice",key:"price"}),n.a.createElement(b,{className:"delete-column",title:"",key:"delete",render:function(a){return n.a.createElement(k.a,{className:"delete-row-button",onClick:function(){return e.handleDeleteRow(a)}},n.a.createElement(w.a,null))}})))),n.a.createElement(v.a,{className:"buttons-row"},n.a.createElement(N.a,{xs:24,md:16},n.a.createElement("div",{className:"handle-products-buttons"},n.a.createElement(k.a,{className:"add-product",onClick:this.handleAddProduct},"Dodaj produkt"),n.a.createElement(k.a,{className:"reset-products",onClick:this.props.handleReset},"Zresetuj koszyk"))),n.a.createElement(N.a,{xs:24,md:8},n.a.createElement(h,{cartTotal:this.props.cartTotal}))))}}]),a}(r.Component),T=Object(p.b)((function(e){return{products:e.shoppingCartReducer.products,cart:e.shoppingCartReducer.cart,cartTotal:e.shoppingCartReducer.cartTotal}}),(function(e){return{addProduct:function(){return e({type:"ADD_PRODUCT"})},changeAmount:function(a,t){return e({type:"CHANGE_AMOUNT_PRODUCT",payload:{record:a,value:t}})},handleCartTotal:function(){return e({type:"CART_TOTAL"})},deleteRow:function(a){return e({type:"REMOVE_PRODUCT",record:a})},handleReset:function(){return e({type:"CART_RESET"})}}}))(O),j=t(409),C=t(405),P=t(87),z=(t(319),j.a.Group),R=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).formRef=n.a.createRef(),t.onSubmit=function(){t.formRef.current.submit()},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.formRef.current.setFieldsValue(this.props.values),(0,this.props.addressForm)(this)}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(C.a,{initialValues:this.props.values,name:"adressForm",onFinish:this.props.onFinish,ref:this.formRef},n.a.createElement(v.a,null,n.a.createElement(N.a,{sx:24,md:12,className:"custom-col"},n.a.createElement(C.a.Item,{name:"name",rules:[{required:!0,message:"Imi\u0119 jest wymagane."},{type:"string",message:"Niepoprawny format!"}]},n.a.createElement(j.a,{placeholder:"Imi\u0119"})),n.a.createElement(C.a.Item,{name:"lastName",rules:[{required:!0,message:"Nazwisko jest wymagane."},{type:"string",message:"Niepoprawny format!"}]},n.a.createElement(j.a,{placeholder:"Nazwisko"})),n.a.createElement(C.a.Item,{name:"email",rules:[{required:!0,message:"E-mail jest wymagany."},{type:"email",message:"Niepoprawny format e-mail!"}]},n.a.createElement(j.a,{placeholder:"E-mail"})),n.a.createElement(C.a.Item,{name:"phone",rules:[{required:!0,message:"Numer telefonu jest wymagany."},{type:"regexp",pattern:new RegExp(/^[0-8]{8,12}$/g),message:"Niepoprawny format!"}]},n.a.createElement(j.a,{addonBefore:"+48",placeholder:"Numer telefonu",type:"number"})),n.a.createElement(C.a.Item,{name:"adress",rules:[{required:!0,message:"Adres jest wymagany."}]},n.a.createElement(j.a,{placeholder:"Adres"})),n.a.createElement(C.a.Item,null,n.a.createElement(z,null,n.a.createElement(v.a,{gutter:2,className:"input-group-row"},n.a.createElement(N.a,{span:12},n.a.createElement(C.a.Item,{name:"city",rules:[{required:!0,message:"Miasto jest wymagane."}]},n.a.createElement(j.a,{placeholder:"Miasto"}))),n.a.createElement(N.a,{span:12},n.a.createElement(C.a.Item,{name:"zip",rules:[{required:!0,message:"Kod pocztowy jest wymagane."}]},n.a.createElement(j.a,{placeholder:"Kod pocztowy"})))))),n.a.createElement(C.a.Item,null,n.a.createElement(P.a,{type:"checkbox",name:"invoiceNeeded",checked:this.props.invoiceNeeded,onChange:this.props.handleCheckbox},"Czy potrzebujesz faktury na firm\u0119?"))),n.a.createElement(N.a,{sx:24,md:12,className:this.props.invoiceNeeded?"visible custom-col":"hidden"},n.a.createElement(C.a.Item,{name:"companyName",rules:[{required:this.props.invoiceNeeded,message:"Nazwa firmy jest wymagana."}]},n.a.createElement(j.a,{placeholder:"Nazwa firmy"})),n.a.createElement(C.a.Item,{name:"NIP",rules:[{required:this.props.invoiceNeeded,message:"NIP jest wymagane."},{type:"regexp",pattern:new RegExp(/^[0-9]{10}$/g),message:"Niepoprawny format!"}]},n.a.createElement(j.a,{placeholder:"NIP",type:"number"})),n.a.createElement(C.a.Item,{name:"companyEmail",rules:[{required:this.props.invoiceNeeded,message:"E-mail jest wymagany."},{type:"email",message:"Niepoprawny format e-mail!"}]},n.a.createElement(j.a,{placeholder:"E-mail"})),n.a.createElement(C.a.Item,{name:"companyPhone",rules:[{required:this.props.invoiceNeeded,message:"Numer telefonu jest wymagany."},{type:"regexp",pattern:new RegExp(/^[0-8]{8,12}$/g),message:"Niepoprawny format!"}]},n.a.createElement(j.a,{addonBefore:"+48",placeholder:"Numer telefonu"})),n.a.createElement(C.a.Item,{name:"companyAdress",rules:[{required:this.props.invoiceNeeded,message:"Adres jest wymagany."}]},n.a.createElement(j.a,{placeholder:"Adres Firmy"})),n.a.createElement(C.a.Item,null,n.a.createElement(z,null,n.a.createElement(v.a,{gutter:2,className:"input-group-row"},n.a.createElement(N.a,{span:12},n.a.createElement(C.a.Item,{name:"companyCity",rules:[{required:this.props.invoiceNeeded,message:"Miasto jest wymagane."}]},n.a.createElement(j.a,{placeholder:"Miasto"}))),n.a.createElement(N.a,{span:12},n.a.createElement(C.a.Item,{name:"companyZip",rules:[{required:this.props.invoiceNeeded,message:"Kod pocztowy jest wymagany."}]},n.a.createElement(j.a,{placeholder:"Kod pocztowy"}))))))))))}}]),a}(r.Component),A=Object(p.b)((function(e){return{invoiceNeeded:e.adressFormReducer.invoiceNeeded,values:e.adressFormReducer.values}}),(function(e){return{handleCheckbox:function(a){return e({type:"FORM_CHECKBOX",event:a})},onFinish:function(a){return e({type:"ADD_FORM_VALUES",values:a})}}}))(R),x=t(111),I=t(401),_=(t(389),d.a.Text),D=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={cost:"14.99 z\u0142"},t.onChange=function(e){var a=e.target,r=a.value,n=a.name;2===a.value&&window.easyPack.mapWidget("easypack-map",(function(e){window.point=e})),t.props.setValues(n,r),t.props.handleOrderTotal(t.props.cartTotal),t.handleDeliveryCost(e)},t.getPoint=function(e){if(window.point){var a=window.point;return t.props.setPoint(a)}},t.handleDeliveryCost=function(e){var a=t.state.cost;a=0===e.target.value?"14.99 z\u0142":1===e.target.value?"9.99 z\u0142":"8.99 z\u0142",t.setState({cost:a})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.handleOrderTotal(this.props.cartTotal),window.easyPackAsyncInit=function(){window.easyPack.init({points:{types:["parcel_locker"],functions:["parcel_collect"]},map:{initialTypes:["parcel_locker"]}})},2===this.props.deliveryValue&&window.easyPack.mapWidget("easypack-map",(function(e){window.point=e}))}},{key:"render",value:function(){return n.a.createElement(v.a,{className:"custom-row"},n.a.createElement(N.a,{className:"delivery-col",xs:24,md:12},n.a.createElement(_,{className:"custom-title"},"Opcje dostawy:"),n.a.createElement(x.a.Group,{name:"deliveryValue",onChange:this.onChange,value:this.props.deliveryValue},n.a.createElement(x.a,{className:"custom-radio",value:0},"Kurier AtYourDoor ",n.a.createElement("span",{className:"price-style"},"14.99 z\u0142")),n.a.createElement(x.a,{className:"custom-radio",value:1},"Poczta Polska ",n.a.createElement("span",{className:"price-style"},"9.99 z\u0142")),n.a.createElement(x.a,{className:"custom-radio",value:2},"Paczkomaty ",n.a.createElement("span",{className:"price-style"},"8.99 z\u0142"))),this.props.paczkomat&&2===this.props.deliveryValue?n.a.createElement("div",{className:"center-div"},n.a.createElement(_,{className:"custom-text"},"Wybra\u0142e\u015b paczkomat:"," ",n.a.createElement("span",{className:"point"},this.props.paczkomat))):null,n.a.createElement("div",{className:"paczkomaty-map",onClick:this.getPoint},2===this.props.deliveryValue?n.a.createElement("div",{id:"easypack-map"}):null)),n.a.createElement(N.a,{className:"payment-col",xs:24,md:12},n.a.createElement(_,{className:"custom-title"},"Opcje p\u0142atno\u015bci:"),n.a.createElement(x.a.Group,{name:"paymentValue",onChange:this.onChange,value:this.props.paymentValue},n.a.createElement(x.a,{className:"custom-radio",value:3},"P\u0142atno\u015b\u0107 za pobraniem ",n.a.createElement("span",{className:"price-style"},"9.99 z\u0142")),n.a.createElement(x.a,{className:"custom-radio",value:4},"P\u0142atno\u015b\u0107 przelewem ",n.a.createElement("span",{className:"price-style"},"0.00 z\u0142"))),n.a.createElement("div",{className:"summary-div"},n.a.createElement("p",null,"Warto\u015b\u0107 koszyka: ",n.a.createElement("strong",null,this.props.cartTotal," z\u0142")),n.a.createElement("p",null,"Koszt dostawy: ",n.a.createElement("strong",null,this.state.cost)),n.a.createElement("p",null,"Koszt p\u0142atno\u015bci:"," ",n.a.createElement("strong",null,3===this.props.paymentValue?"9.99 z\u0142":"0.00 z\u0142")),n.a.createElement(I.a,null),n.a.createElement(_,{className:"custom-title total"},"Razem do zap\u0142aty: ",n.a.createElement("br",null),n.a.createElement("span",{className:"price-style"},this.props.orderTotal," z\u0142")))))}}]),a}(r.Component),S=Object(p.b)((function(e){return{deliveryValue:e.deliveryPaymentReducer.deliveryValue,paymentValue:e.deliveryPaymentReducer.paymentValue,paczkomat:e.deliveryPaymentReducer.paczkomat,cartTotal:e.shoppingCartReducer.cartTotal,orderTotal:e.deliveryPaymentReducer.orderTotal}}),(function(e){return{setValues:function(a,t){return e({type:"SET_DELIVERY_PAYMENT_VALUES",payload:{name:a,value:t}})},setPoint:function(a){return e({type:"SET_POINT",selectedPoint:a})},handleOrderTotal:function(a){return e({type:"ORDER_TOTAL",cartTotal:a})}}}))(D),V=t(408),F=t(404),M=t(411),q=t(412),U=V.a.Step,B=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={current:0,visible:!1},t.steps=[{title:"Koszyk",content:n.a.createElement(T,null)},{title:"Twoje dane",content:n.a.createElement(A,{addressForm:function(e){return t.child=e}})},{title:"Dostawa i p\u0142atno\u015b\u0107",content:n.a.createElement(S,null)}],t.showModal=function(){t.setState({visible:!0})},t.handleOk=function(){t.setState({visible:!1})},t.handleBack=function(){t.setState({current:0,visible:!1}),window.location.reload(!1)},t.handleCancel=function(){t.setState({visible:!1})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"next",value:function(){var e=this;if(0===this.state.current){if(!this.props.cart.length)return f.a.warning("Dodaj produkt!");this.props.handleCartTotal();var a=this.state.current+1;this.setState({current:a})}else if(1===this.state.current)this.child.formRef.current.validateFields().then((function(a){e.props.onFinish(a);var t=e.state.current+1;e.setState({current:t})})).catch((function(e){return f.a.error("Wype\u0142nij formularz!")}));else{var t=this.state.current+1;this.setState({current:t})}}},{key:"prev",value:function(){var e=this.state.current-1;this.setState({current:e})}},{key:"render",value:function(){var e=this,a=this.state.current;return n.a.createElement("div",{className:"form-container"},n.a.createElement(V.a,{className:"ant-steps-label-vertical",current:a},this.steps.map((function(e){return n.a.createElement(U,{key:e.title,title:e.title})}))),n.a.createElement("div",{className:"steps-content"},this.steps[a].content),n.a.createElement("div",{className:"steps-action"},a<this.steps.length-1&&n.a.createElement(k.a,{className:"next-button",onClick:function(){return e.next()}},"Dalej"),a===this.steps.length-1&&n.a.createElement(k.a,{className:"next-button",onClick:this.showModal},"Zam\xf3w i zap\u0142a\u0107!"),a>0&&n.a.createElement(k.a,{className:"previous-button",onClick:function(){return e.prev()}},"Powr\xf3t")),n.a.createElement(F.a,{visible:this.state.visible,title:"Dzi\u0119kujemy za zakupy!",onOk:this.handleOk,onCancel:this.handleCancel,footer:[n.a.createElement(k.a,{key:"back",className:"previous-button",onClick:this.handleBack},"Jeszcze raz! ",n.a.createElement(M.a,null)),n.a.createElement(k.a,{key:"submit",className:"previous-button",onClick:this.handleOk},"Ok!")]},n.a.createElement("p",null,"Nie martw si\u0119! Kawa zaraz dotrze! ",n.a.createElement(q.a,null))))}}]),a}(r.Component),K=Object(p.b)((function(e){return{cart:e.shoppingCartReducer.cart,cartTotal:e.shoppingCartReducer.cartTotal}}),(function(e){return{handleCartTotal:function(){return e({type:"CART_TOTAL"})},onFinish:function(a){return e({type:"ADD_FORM_VALUES",values:a})}}}))(B),L=t(81),W=t(198),G=t(25),Y=t(138),H=t.n(Y),Z=t(139),J=t.n(Z),$=t(140),X=t.n($),Q=t(141),ee=t.n(Q),ae=t(142),te=t.n(ae),re={cart:[],cartTotal:"0.00",products:[{key:0,name:"Barista Espresso 0,5kg",amount:1,price:38.99,totalPrice:38.99,picture:H.a},{key:1,name:"Barista Caffe Crema 0,5kg",amount:1,price:40.99,totalPrice:40.99,picture:J.a},{key:2,name:"Privat Kaffe African Blue 0,5kg",amount:1,price:44.99,totalPrice:44.99,picture:X.a},{key:3,name:"Espresso Milano Style 0,5kg",amount:1,price:39.99,totalPrice:39.99,picture:ee.a},{key:4,name:"Espresso Sicilia Style 0,5kg",amount:1,price:41.99,totalPrice:41.99,picture:te.a}]},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PRODUCT":var t=Math.floor(Math.random()*e.products.length),r=e.products[t];return Object(G.a)({},e,{cart:e.cart.concat(r),products:e.products.filter((function(e){return e.key!==r.key}))});case"CHANGE_AMOUNT_PRODUCT":var n=Object(W.a)(e.cart);return n.forEach((function(e){e.key===a.payload.record.key&&(e.amount=a.payload.value,e.totalPrice=(e.amount*e.price).toFixed(2),e.totalPrice=1*e.totalPrice)})),Object(G.a)({},e,{cart:n});case"CART_TOTAL":for(var c=0,l=0;l<e.cart.length;l++)c+=e.cart[l].totalPrice;return c=c.toFixed(2),Object(G.a)({},e,{cartTotal:c});case"REMOVE_PRODUCT":var o=e.cart.find((function(e){return e.key===a.record.key}));return o.amount=1,o.totalPrice=o.price,Object(G.a)({},e,{cart:e.cart.filter((function(e){return e.key!==o.key})),products:e.products.concat(o)});case"CART_RESET":return{cart:[],cartTotal:"0.00",products:[{key:0,name:"Barista Espresso 0,5kg",amount:1,price:38.99,totalPrice:38.99,picture:H.a},{key:1,name:"Barista Caffe Crema 0,5kg",amount:1,price:40.99,totalPrice:40.99,picture:J.a},{key:2,name:"Privat Kaffe African Blue 0,5kg",amount:1,price:44.99,totalPrice:44.99,picture:X.a},{key:3,name:"Espresso Milano Style 0,5kg",amount:1,price:39.99,totalPrice:39.99,picture:ee.a},{key:4,name:"Espresso Sicilia Style 0,5kg",amount:1,price:41.99,totalPrice:41.99,picture:te.a}]};default:return e}},ce={values:[{name:""},{lastName:""},{email:""},{phone:0},{adress:""},{city:""},{zip:""},{companyname:""},{NIP:""},{companyEmail:""},{companyPhone:0},{companyAdress:""},{companyCity:""},{companyZip:""}],invoiceNeeded:!1},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FORM_CHECKBOX":return Object(G.a)({},e,{invoiceNeeded:a.event.target.checked});case"ADD_FORM_VALUES":return Object(G.a)({},e,{values:a.values});default:return e}},oe=t(110),se={deliveryValue:0,paymentValue:3,orderTotal:0,paczkomat:""},ie=[{id:0,price:14.99},{id:1,price:9.99},{id:2,price:8.99},{id:3,price:9.99},{id:4,price:0}],me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_DELIVERY_PAYMENT_VALUES":return Object(G.a)({},e,Object(oe.a)({},a.payload.name,a.payload.value));case"SET_POINT":return Object(G.a)({},e,{paczkomat:a.selectedPoint.name});case"ORDER_TOTAL":var t=1*a.cartTotal+ie[e.deliveryValue].price+ie[e.paymentValue].price;return Object(G.a)({},e,{orderTotal:t.toFixed(2)});default:return e}},ue=Object(L.b)({shoppingCartReducer:ne,adressFormReducer:le,deliveryPaymentReducer:me}),pe=Object(L.c)(ue);l.a.render(n.a.createElement(p.a,{store:pe},n.a.createElement(K,null)),document.getElementById("root"))}},[[202,1,2]]]);
//# sourceMappingURL=main.8a392e1b.chunk.js.map