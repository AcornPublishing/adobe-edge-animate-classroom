
(function($,Edge,compId){var _=null,y=true,n=false,or='-webkit-transform-origin',x2='3.0.0.322',x55='25px',x50='Courier, Courier New, monospace',e52='${_paper}',cl='clip',e26='${_title}',x66='12px',a='Base State',x14='hidden',s='style',e24='${_ribbon2}',i='none',x27='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',e39='${_frontroll}',x47='96',x51='review2',e20='${_rolloftape2}',lf='left',e23='${_rolloftape}',x54='paperCopy',e74='${_TextCopy2}',e73='${_paperCopy2}',x6='rgba(255,246,0,1.00)',bg='background-color',x11='@@0@@% @@1@@%',x31='auto',om='-ms-transform-origin',x72='review3',e37='${_backroll}',zx='scaleX',fs='font-size',tp='top',x40='400',ov='overflow',e13='${_Stage}',x70='TextCopy2',x10='stage',x69='69px',e16='${_review3}',t='transform',e18='${_rookie}',x15='rgba(0,0,0,0.60)',c='color',x3='rgba(0,0,0,0)',x67='37px',x68='231px',e21='${_detective}',g='image',r='deg',x41='171px',x12='rgba(255,255,255,1.00)',x57='TextCopy',x63='256px',x36='rolloftape',e17='${_review2}',x62='Courier, \'Courier New\', monospace',e19='${_review1}',e61='${_TextCopy}',oz='-moz-transform-origin',e60='${_paperCopy}',x='text',m='rect',x29='0px',e22='${_ribbon}',h='height',x1='3.0.0',qiq='easeInQuad',x45='46px',dt='Default Timeline',x33='frontroll',e53='${_Text}',x59='review1',p='px',on='msTransformOrigin',x42='paper',xc='rgba(0,0,0,1)',oo='-o-transform-origin',qob='easeOutBounce',qoc='easeOutCubic',x34='98px',x46='349px',x56='38px',x44='26px',l='normal',x65='paperCopy2',e38='${symbolSelector}',rz='rotateZ',x48='Text',e25='${_forensics}',w='width',ql='linear',x28='backroll',x30='196px',ff='font-family',zy='scaleY',x64='120px';var im='images/';var g9='rookie.png',g4='background.jpg',g7='detective.png',g5='title.jpg',g43='paper2.png',g8='forensics.png',g35='frontroll_revised.png',g32='backroll.png';var s58="\"The characters are richly-drawn and the stories gripping.\" - Hollywood Post",s49="\"Police Line: DNC is the best new cop drama since Hill Street Blues...\" - LA Sentinel",s71="\"This season\'s best...!\" - TV Daily";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:'background',t:g,r:['0','0','1000px','650px','auto','auto'],f:[x3,im+g4,'0px','0px']},{id:'title',t:g,r:['0px','20px','1000px','83px','auto','auto'],f:[x3,im+g5,'0px','0px'],boxShadow:["",3,3,3,0,"rgba(0,0,0,0.60)"]},{id:'ribbon',t:m,r:['-274px','605px','200px','90px','auto','auto'],f:[x6],s:[0,"rgb(0, 0, 0)",i],tf:[[],['-23']]},{id:'rolloftape',t:m,r:['-174px','413px','auto','auto','auto','auto'],tf:[[],['-23'],[],['1','0.8']]},{id:'ribbon2',t:m,r:['842px','496px','200px','90px','auto','auto'],f:[x6],s:[0,"rgb(0, 0, 0)",i],tf:[[],['6']]},{id:'rolloftape2',t:m,r:['775px','318px','auto','auto','auto','auto'],tf:[[],[],[],['-1','0.8']]},{id:'detective',t:g,r:['661px','647px','334px','592px','auto','auto'],f:[x3,im+g7,'0px','0px']},{id:'forensics',t:g,r:['28px','647px','392px','432px','auto','auto'],f:[x3,im+g8,'0px','0px']},{id:'rookie',t:g,r:['386px','647px','384px','584px','auto','auto'],f:[x3,im+g9,'0px','0px']},{id:'review1',t:m,r:['312px','359px','auto','auto','auto','auto']},{id:'review2',t:m,r:['474px','462px','auto','auto','auto','auto']},{id:'review3',t:m,r:['739px','381px','auto','auto','auto','auto']}],sI:[{id:'rolloftape',sN:'rolloftape',a:{}},{id:'rolloftape2',sN:'rolloftape',a:{}},{id:'review2',sN:'review2',a:{}},{id:'review1',sN:'review1',a:{}},{id:'review3',sN:'review3',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:6500,a:y,tt:[{id:"eid48",tr:[function(e,d){this.eSA(e,d);},['stop','${_rolloftape2}',[]],""],p:0},{id:"eid49",tr:[function(e,d){this.eSA(e,d);},['play','${_rolloftape2}',[]],""],p:2000}]}}},"rolloftape":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x28,t:g,r:[x29,x29,x30,x30,x31,x31],f:[x3,im+g32,x29,x29]},{id:x33,t:g,r:[x29,x34,x30,x30,x31,x31],f:[x3,im+g35,x29,x29]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:y,tt:[]}}},"review2":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x29,x29,x40,x41,x31,x31],tf:[],id:x42,o:1,t:g,f:[x3,im+g43]},{r:[x44,x45,x46,x47,x31,x31],tf:[],id:x48,text:s49,n:[x50,18,xc,l,i,''],t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"review1":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x29,x29,x40,x41,x31,x31],tf:[],id:x54,o:1,t:g,f:[x3,im+g43]},{r:[x55,x56,x46,x47,x31,x31],tf:[],id:x57,text:s58,n:[x50,18,xc,l,i,''],t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"review3":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x29,p,x63,x64,x31,x31],tf:[],id:x65,o:1,t:g,f:[x3,im+g43]},{r:[x66,x67,x68,x69,x31,x31],tf:[],id:x70,text:s71,n:[x50,18,xc,l,i,''],t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}}};var S1=symbols[x10];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e13).P(bg,x12,c).P(ov,x14).P(h,650).P(w,1000);A1.A(e16).P(tp,382).P(lf,1016).T(5.5,739,1,qob);A1.A(e17).P(tp,462).P(lf,1016).T(5.5,474,1,qob);A1.A(e18).P(lf,386).P(tp,647).T(3,66,1,qoc);A1.A(e19).P(tp,359).P(lf,1010).T(5.5,312,1,qob);A1.A(e20).P(zx,-1,t,_,"").P(zy,0.8,t).P(lf,775,_,_,p).T(2,-196,1,qiq).P(tp,318).T(2,212,1);A1.A(e21).P(lf,661).P(tp,647).T(3,59,1,qoc);A1.A(e22).P(rz,-23,t,_,r).P(h,90,_,_,p).P(tp,605).T(0,342,2,ql).P(lf,-274).T(0,-328,2).P(w,200).T(0,1550,2);A1.A(e23).P(or,[0.03,80.86],_,x11).P(oz,[0.03,80.86],_,x11).P(om,[0.03,80.86],_,x11).P(on,[0.03,80.86],_,x11).P(oo,[0.03,80.86],_,x11).P(zy,0.8,t,_,"").P(rz,-23,t,_,r).P(tp,413,_,_,p).T(0,-110,2,ql).P(lf,-174).T(0,1061,2);A1.A(e24).P(rz,6,t,_,r).P(h,90,_,_,p).P(tp,496).T(2,447,1,qiq).P(lf,842).T(2,-96,1).P(w,200).T(2,1141,1);A1.A(e25).P(lf,28).P(tp,647).T(3,220,1,qoc);A1.A(e26).P("boxShadow.color",x15,"subproperty").P(lf,0).P(tp,20).P("boxShadow.offsetH",3,"subproperty").P(zy,1,t,_,"").T(5,1.1,0.5,ql).P(zx,1,t).T(5,1.1,0.5).P("boxShadow.offsetV",3,"subproperty",_,p).T(5,25,0.5).P(cl,[0,0,83,0],_,x27).T(4,[0,1000,83,0],1).T(5,[0,1000,150.307861328125,0],0.5).P("boxShadow.blur",3,"subproperty").T(5,14,0.5);var S2=symbols[x36];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e37).P(lf,0).P(tp,0);A2.A(e38).P(h,294).P(w,196);A2.A(e39).P(tp,98).P(lf,0).P(rz,0,t,_,r).T(0,360,1,ql);var S3=symbols[x51];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e52).P(tp,0).P(lf,0).P(h,171);A3.A(e53).P(tp,46).P(fs,18).P(ff,x50).P(lf,26).P(w,349);A3.A(e38).P(h,171).P(w,400);var S4=symbols[x59];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e60).P(tp,0).P(lf,0).P(h,171);A4.A(e61).P(tp,38).P(w,349).P(ff,x62).P(lf,25).P(fs,18);A4.A(e38).P(h,171).P(w,400);var S5=symbols[x72];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e73).P(tp,3).P(h,120).P(lf,0).P(w,256);A5.A(e74).P(tp,37).P(w,231).P(h,69).P(ff,x62).P(lf,12).P(fs,18);A5.A(e38).P(h,125).P(w,256);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-38724590");