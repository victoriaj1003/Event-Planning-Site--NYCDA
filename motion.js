[/code]javascript:x=0;e=document.body;e.style.position="absolute";function rt(){e.style.top=100-(50*Math.cos(x*Math.PI/180))+"px";e.style.left=100+(50*Math.sin(x*Math.PI/180))+"px";x+=5};setInterval("rt()",50);void(0);[/code] 
Code:
javascript:x=0;e=document.body;e.style.position="absolute";function rt(){e.style.top=100-(500*Math.cos(x*Math.PI/180))+"px";e.style.left=150+(50*Math.sin(x*Math.PI/180))+"px";x+=5};setInterval("rt()",50);void(0);

Code:
javascript:x=0;e=document.body;e.style.position="absolute";function rt(){e.style.top=1-(50*Math.cos(x*Math.PI/1000))+"px";e.style.left=100+(500*Math.sin(x*Math.PI/180))+"px";x+=5};setInterval("rt()",50);void(0);

Code:
javascript:R=0; x1=.1; y1=.05; x2=.25; y2=.24; x3=1.6; y3=.24; x4=300; y4=200; x5=300; y5=200; DI=document.images; DIL=DI.length; function A(){for(i=0; i-DIL; i++){DIS=DI[ i ].style; DIS.position='absolute'; DIS.left=Math.sin(R*x1+i*x2+x3)*x4+x5; DIS.top=Math.cos(R*y1+i*y2+y3)*y4+y5}R++}setInterval('A()',5); void(0);

