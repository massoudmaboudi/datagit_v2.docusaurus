(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{88:function(t,n,l){"use strict";l.r(n),l.d(n,"frontMatter",(function(){return i})),l.d(n,"metadata",(function(){return b})),l.d(n,"toc",(function(){return c})),l.d(n,"default",(function(){return r}));var o=l(3),p=l(7),e=(l(0),l(125)),i={id:"introduction",title:"\u067e\u0627\u06cc\u062a\u0648\u0646",sidebar_label:"\u0645\u0639\u0631\u0641\u06cc \u067e\u0627\u06cc\u062a\u0648\u0646",hide_title:!1,hide_table_of_contents:!1,description:"\u0622\u0645\u0648\u0632\u0634 \u067e\u0627\u06cc\u062a\u0648\u0646|\u062f\u06cc\u062a\u0627\u06af\u06cc\u062a",keywords:["\u0622\u0645\u0648\u0632\u0634 \u0645\u0642\u062f\u0645\u0627\u062a\u06cc \u067e\u0627\u062a\u06cc\u0648\u0646","\u0622\u0645\u0648\u0632\u0634 \u067e\u0627\u06cc\u062a\u0648\u0646"],image:"img/python/python-logo.svg"},b={unversionedId:"python/matplotlib/introduction",id:"python/matplotlib/introduction",isDocsHomePage:!1,title:"\u067e\u0627\u06cc\u062a\u0648\u0646",description:"\u0622\u0645\u0648\u0632\u0634 \u067e\u0627\u06cc\u062a\u0648\u0646|\u062f\u06cc\u062a\u0627\u06af\u06cc\u062a",source:"@site/docs/python/matplotlib/introduction.md",slug:"/python/matplotlib/introduction",permalink:"/docs/python/matplotlib/introduction",version:"current",sidebar_label:"\u0645\u0639\u0631\u0641\u06cc \u067e\u0627\u06cc\u062a\u0648\u0646"},c=[],a={toc:c};function r(t){var n=t.components,l=Object(p.a)(t,["components"]);return Object(e.b)("wrapper",Object(o.a)({},a,l,{components:n,mdxType:"MDXLayout"}),Object(e.b)("p",null,"\u0645\u0642\u062f\u0645\u0647\n\u0628\u0647 \u0622\u0645\u0648\u0632\u0634 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 Matplotlib \u062e\u0648\u0634 \u0627\u0648\u0645\u062f\u06cc\u062f. \u062a\u0648\u06cc \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u0633\u0639\u06cc \u0645\u06cc\u06a9\u0646\u06cc\u0645 \u06a9\u0647 \u0628\u06cc\u0634\u062a\u0631 \u0642\u0633\u0645\u062a \u0647\u0627\u06cc \u0627\u0635\u0644\u06cc \u0627\u06cc\u0646 \u06a9\u062a\u0627\u0628\u062e\u0648\u0646\u0647 \u0631\u0648 \u062a\u0648\u0636\u06cc\u062d \u0628\u062f\u06cc\u0645 \u062a\u0627 \u0634\u0627\u06cc\u062f \u0628\u0639\u062f\u0627 \u0628\u062e\u0648\u0627\u06cc\u0645 \u0627\u0632\u0634 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645. \u0627\u06cc\u0646 \u06a9\u062a\u0627\u0628\u062e\u0648\u0646\u0647 \u0642\u0627\u0628\u0644\u06cc\u062a \u0627\u06cc\u0646 \u0631\u0648 \u062f\u0627\u0631\u0647 \u062a\u0627 \u062a\u0642\u0631\u06cc\u0628\u0627 \u062a\u0645\u0627\u0645 \u0646\u0645\u0648\u062f\u0627\u0631\u0647\u0627\u06cc \u0645\u0631\u0633\u0648\u0645 \u0645\u062b\u0644 line graphs, scatter plots, bar charts, pie charts, stack plots, 3D graphs \u0648 geographic map \u0631\u0648 \u0631\u0633\u0645 \u06a9\u0646\u0647. \u0627\u06cc\u0646 \u0631\u0648 \u0628\u0627\u06cc\u062f \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u0645 \u06a9\u0647 \u062a\u0648\u06cc \u0627\u06cc\u0646 \u0622\u0645\u0648\u0632\u0634 \u0627\u0632 \u0627\u0633\u0645 \u0627\u0646\u06af\u0644\u06cc\u0633\u06cc \u0647\u0631 \u0646\u0645\u0648\u062f\u0627\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u06a9\u0646\u0645 \u0686\u0631\u0627 \u06a9\u0647 \u0628\u0639\u062f\u0647\u0627 \u0645\u062a\u0648\u062c\u0647 \u0645\u06cc\u0634\u06cc\u062f \u06a9\u0647 \u0647\u0631 \u0645\u062a\u0646\u06cc \u0628\u062e\u0648\u0627\u06cc\u062f \u0628\u062e\u0648\u0646\u06cc\u062f\u060c \u0628\u0627 \u062f\u0648\u0646\u0633\u062a\u0646 \u0646\u0648\u0639 \u0627\u0646\u06af\u0644\u06cc\u0633\u06cc \u0646\u0645\u0648\u062f\u0627\u0631 \u062e\u06cc\u0644\u06cc \u0631\u0627\u062d\u062a \u062a\u0631 \u0628\u0647 \u0645\u0648\u0636\u0648\u0639\u0634 \u067e\u06cc \u0645\u06cc\u0628\u0631\u06cc\u062f."),Object(e.b)("p",null,"\u0642\u0628\u0644 \u0627\u0632 \u0634\u0631\u0648\u0639 \u0628\u0627\u06cc\u062f \u0628\u06af\u0645 \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0634\u0631\u0648\u0639 \u0627\u06cc\u0646 \u062f\u0648\u0631\u0647 \u0628\u0627\u06cc\u062f \u067e\u06cc\u0634 \u0632\u0645\u06cc\u0646\u0647 \u0627\u06cc \u0646\u0633\u0628\u062a \u0628\u0647 \u06a9\u0627\u0631\u06a9\u0631\u062f \u0632\u0628\u0627\u0646 \u067e\u0627\u06cc\u062a\u0648\u0646 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f. \u067e\u0633 \u0628\u062f \u0646\u06cc\u0633\u062a \u06a9\u0647 \u062f\u0648\u0631\u0647 \u0622\u0645\u0648\u0632\u0634 \u0645\u0642\u062f\u0645\u0627\u062a\u06cc \u067e\u0627\u06cc\u062a\u0648\u0646 \u0631\u0648 \u0628\u062e\u0648\u0646\u06cc\u062f."),Object(e.b)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u0628\u062a\u0648\u0646\u06cc\u0645 \u0627\u0632 \u0627\u06cc\u0646 \u067e\u06a9\u06cc\u062c \u06cc\u0627 \u06a9\u062a\u0627\u0628\u062e\u0648\u0646\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u060c \u0628\u0627\u06cc\u062f \u062f\u0631 \u0642\u062f\u0645 \u0627\u0648\u0644 \u0627\u0648\u0646 \u0631\u0648 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u0645. \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 pip \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u0634\u0647. \u067e\u0633 \u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u06a9\u0646\u0645 \u062f\u0631\u0633 \u0646\u0635\u0628 \u067e\u06a9\u06cc\u062c \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 pip \u062f\u0631 \u067e\u0627\u06cc\u062a\u0648\u0646 \u0631\u0648 \u0628\u062e\u0648\u0646\u06cc\u062f. \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0628\u0631\u0627\u06cc \u0646\u0635\u0628 \u0627\u06cc\u0646 \u06a9\u062a\u0627\u0628\u062e\u0648\u0646\u0647 \u0647\u0633\u062a\u0634:"),Object(e.b)("p",null,"$pip install matplotlib"),Object(e.b)("p",null,"\u0628\u0627\u06cc\u062f \u0628\u06af\u0645 \u06a9\u0647 \u062a\u0648\u06cc \u0627\u06cc\u0646 \u0622\u0645\u0648\u0632\u0634 \u0627\u0632 \u0645\u062d\u06cc\u0637 \u0627\u0635\u0644\u06cc \u067e\u0627\u06cc\u062a\u0648\u0646 \u06cc\u0639\u0646\u06cc shell \u06cc\u0627 \u06a9\u0646\u0633\u0648\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u06a9\u0646\u06cc\u0645. \u0627\u0644\u0628\u062a\u0647 \u062a\u0631\u062c\u06cc\u062d \u0645\u0646 \u06a9\u0646\u0633\u0648\u0644 \u0647\u0633\u062a\u0634."),Object(e.b)("p",null,"\u0628\u0631\u0627\u06cc \u0634\u0631\u0648\u0639 \u0628\u0627\u06cc\u062f \u0627\u0632 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0628\u0631\u0627\u06cc \u0641\u0631\u0627\u062e\u0648\u0646\u06cc Matplotlib \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),Object(e.b)("pre",null,Object(e.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),"import matplotlib.pyplot as plt\n")),Object(e.b)("p",null,"\u062a\u0648\u06cc \u06a9\u062f \u0628\u0627\u0644\u0627 \u0627\u0648\u0645\u062f\u06cc\u0645 pyplot \u0631\u0648 \u0641\u0631\u0627\u062e\u0648\u0646\u06cc \u06a9\u0631\u062f\u06cc\u0645. \u062a\u0648\u06cc \u0627\u06cc\u0646 \u062f\u0648\u0631\u0647 \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u062a\u0627\u0628\u0639 \u06a9\u0627\u0631 \u0645\u06cc\u06a9\u0646\u06cc\u0645. \u062f\u0642\u062a \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u0627\u0633\u0645\u0634 \u0631\u0648 plt \u06af\u0630\u0627\u0634\u062a\u06cc\u0645. \u0627\u06cc\u0646 \u0627\u0633\u0645 \u062a\u0642\u0631\u06cc\u0628\u0627 \u0628\u06cc\u0646 \u0647\u0645\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06cc\u0633\u0627\u06cc \u067e\u0627\u06cc\u062a\u0648\u0646 \u0645\u0631\u0633\u0648\u0645 \u0647\u0633\u062a."),Object(e.b)("p",null,"\u06a9\u062f \u0632\u06cc\u0631 \u0627\u0648\u0644\u06cc\u0646 \u0642\u062f\u0645 \u0634\u0645\u0627 \u0628\u0631\u0627\u06cc \u0634\u0631\u0648\u0639 \u06a9\u0627\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0627\u0698\u0648\u0644 \u0647\u0633\u062a\u0634:"),Object(e.b)("p",null,"plt.plot(","[1,6,3]",",","[5,7,4]",")"),Object(e.b)("p",null,"\u062a\u0648\u06cc \u06a9\u062f \u0628\u0627\u0644\u0627 \u0645\u0627 \u0627\u0648\u0645\u062f\u06cc\u0645 \u062a\u0627\u0628\u0639 ()plot \u0631\u0648 \u0641\u0631\u0627\u062e\u0648\u0646\u06cc \u06a9\u0631\u062f\u06cc\u0645. \u0627\u06cc\u0646 \u062a\u0627\u0628\u0639 \u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0632\u06cc\u0627\u062f\u06cc \u0645\u06cc\u06af\u06cc\u0631\u0647 \u06a9\u0647 \u0631\u0627\u062c\u0639 \u0628\u0647 \u0627\u0648\u0646\u0647\u0627 \u0635\u062d\u0628\u062a \u0645\u06cc\u06a9\u0646\u06cc\u0645. \u0627\u0645\u0627 \u0627\u06cc\u0646\u062c\u0627 \u0635\u0631\u0641\u0627 \u0628\u0647 x \u0648 y \u0628\u0633\u0646\u062f\u0647 \u0645\u06cc\u06a9\u0646\u06cc\u0645. \u062a\u0648\u06cc \u0627\u06cc\u0646 \u062a\u0627\u0628\u0639\u060c \u0645\u0627 \u0627\u0648\u0645\u062f\u06cc\u0645 \u062f\u0648 \u062a\u0627 \u0644\u06cc\u0633\u062a \u0628\u0647\u0634 \u062f\u0627\u062f\u06cc\u0645 \u06a9\u0647 \u0645\u062e\u062a\u0635\u0627\u062a \u0646\u0642\u0627\u0637 x \u0648 y \u0631\u0648 \u0646\u0634\u0648\u0646 \u0645\u06cc\u062f\u0647. \u0646\u0642\u0627\u0637 \u0628\u0647 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u0647\u0633\u062a\u0646:"),Object(e.b)("p",null,"(1,5) - (6,7) - (3,4)"),Object(e.b)("p",null,"\u0627\u06cc\u0646 \u062a\u0627\u0628\u0639 \u0627\u0648\u0645\u062f \u06af\u0631\u0627\u0641\u06cc \u06a9\u0647 \u0645\u0627 \u062e\u0648\u0627\u0633\u062a\u06cc\u0645 \u0631\u0648 \u06a9\u0634\u06cc\u062f\u060c \u0627\u0645\u0627 \u0646\u0634\u0648\u0646\u0634 \u0646\u0645\u06cc\u062f\u0647! \u0627\u06af\u0631 \u0628\u062e\u0648\u0627\u06cc\u0645 \u0646\u0634\u0648\u0646 \u0628\u062f\u0647 \u0628\u0627\u06cc\u062f \u0627\u0632 \u062a\u0627\u0628\u0639 ()show \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),Object(e.b)("p",null,"plt.show()\n\u062a\u0648\u06cc \u0627\u06cc\u0646 \u0635\u0641\u062d\u0647 \u0627\u06cc \u06a9\u0647 \u0638\u0627\u0647\u0631 \u0634\u062f\u0647 \u0645\u06cc\u062a\u0648\u0646\u06cc\u062f \u06a9\u0627\u0631\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641\u06cc \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u062a\u0648\u06cc \u0627\u062f\u0627\u0645\u0647 \u0631\u0627\u062c\u0639 \u0628\u0647 \u0627\u0648\u0646\u0627 \u0635\u062d\u0628\u062a \u0645\u06cc\u06a9\u0646\u06cc\u0645 \u0627\u0645\u0627 \u062f\u0642\u062a \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u06af\u0648\u0634\u0647 \u067e\u0627\u06cc\u06cc\u0646-\u0686\u067e\u060c \u06cc\u0647 \u0633\u0631\u06cc \u062f\u06a9\u0645\u0647 \u062f\u0627\u0631\u06cc\u0645 \u06a9\u0647 \u06a9\u0627\u0631\u0627\u06cc \u062c\u0627\u0644\u0628\u06cc \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u062f\u0646."),Object(e.b)("p",null,"\u062f\u06a9\u0645\u0647 \u0634\u0645\u0627\u0631\u0647 1 \u0632\u0645\u0627\u0646\u06cc \u06a9\u0627\u0631\u0628\u0631\u062f \u062f\u0627\u0631\u0647 \u06a9\u0647 \u0634\u0645\u0627 \u06af\u0631\u0627\u0641 \u062e\u0648\u062f\u062a\u0648\u0646 \u0631\u0648 \u062f\u0633\u062a\u06a9\u0627\u0631\u06cc \u06a9\u0631\u062f\u06cc\u0646 \u0648 \u062d\u0627\u0644\u0627 \u0645\u06cc\u062e\u0648\u0627\u06cc\u0646 \u0628\u0647 \u062d\u0627\u0644\u062a \u0627\u0648\u0644\u06cc\u0647 \u0628\u0631\u06af\u0631\u062f\u0648\u0646\u06cc\u0646 \u06af\u0631\u0627\u0641 \u0631\u0648\n\u062f\u06a9\u0645\u0647 \u0634\u0645\u0627\u0631\u0647 2 \u0648 3 \u0647\u0645 \u0628\u0647 \u0634\u0645\u0627 \u06a9\u0645\u06a9 \u0645\u06cc\u06a9\u0646\u0646 \u0628\u0647 \u062a\u0631\u062a\u06cc\u0628 \u0628\u0647 \u06a9\u0627\u0631\u0647\u0627\u06cc \u0642\u0628\u0644\u06cc \u0648 \u0628\u0639\u062f\u06cc \u0628\u0631\u06af\u0631\u062f\u06cc\u0646! \u0627\u06af\u0631 \u0628\u0627 \u0645\u0631\u0648\u0631\u06af\u0631 \u06a9\u0627\u0645\u067e\u06cc\u0648\u062a\u0631 \u06a9\u0627\u0631 \u06a9\u0631\u062f\u0647 \u0628\u0627\u0634\u06cc\u0646 \u0645\u062a\u0648\u062c\u0647 \u0645\u0646\u0638\u0648\u0631\u0645 \u0645\u06cc\u0634\u06cc\u0646 :).\n\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062f\u06a9\u0645\u0647 4 \u0647\u0645 \u0645\u06cc\u062a\u0648\u0646\u06cc\u062f \u06af\u0631\u0627\u0641 \u0631\u0648 \u0628\u0647 \u0642\u0633\u0645\u062a \u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0628\u0628\u0631\u06cc\u062f \u0648 \u0627\u0648\u0646 \u0631\u0648 \u062d\u0631\u06a9\u062a \u0628\u062f\u06cc\u0646.\n\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062f\u06a9\u0645\u0647 5 \u0645\u06cc\u062a\u0648\u0646\u06cc\u062f \u0646\u0645\u0648\u062f\u0627\u0631 \u0631\u0648 \u0632\u0648\u0645 \u06a9\u0646\u06cc\u062f. \u0627\u06af\u0631 \u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0686\u067e \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0631\u0648 \u0627\u0646\u062c\u0627\u0645 \u0628\u062f\u06cc\u0646\u060c \u0632\u0648\u0645 \u0645\u06cc\u06a9\u0646\u06cc\u062f \u0648 \u0646\u0632\u062f\u06cc\u06a9 \u062a\u0631 \u0645\u06cc\u0634\u06cc\u062f. \u0627\u06af\u0631 \u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0631\u0627\u0633\u062a \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0631\u0648 \u06a9\u0646\u06cc\u062f\u060c \u0627\u0632 \u0646\u0645\u0648\u062f\u0627\u0631 \u062f\u0648\u0631 \u0645\u06cc\u0634\u06cc\u062f \u0648 \u06a9\u0645\u062a\u0631 \u0632\u0648\u0645 \u0645\u06cc \u06a9\u0646\u06cc\u062f.\n\u0631\u0627\u062c\u0639 \u0628\u0647 \u06af\u0632\u06cc\u0646\u0647 6 \u062a\u0648\u0636\u06cc\u062d\u06cc \u0646\u0645\u06cc\u062f\u0645\u060c \u0631\u0648\u0634 \u06a9\u0646\u06cc\u062f \u0648 \u062e\u0648\u062f\u062a\u0648\u0646 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f \u0645\u062a\u0648\u062c\u0647 \u0634\u06cc\u062f\u060c \u062c\u0627\u0644\u0628 \u0646\u06cc\u0633\u062a\u061f\n\u062f\u06a9\u0645\u0647 \u0634\u0645\u0627\u0631\u0647 7 \u0647\u0645 \u0628\u0647 \u0634\u0645\u0627 \u0627\u062c\u0627\u0632\u0647 \u0645\u06cc\u062f\u0647 \u06a9\u0647 \u06af\u0631\u0627\u0641 \u062e\u0648\u062f\u062a\u0648\u0646 \u0631\u0648 \u0628\u0647 \u0641\u0631\u0645\u062a \u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0630\u062e\u06cc\u0631\u0647 \u06a9\u0646\u06cc\u062f.\n\u0627\u0644\u0628\u062a\u0647 \u0628\u0627\u06cc\u062f \u062f\u0642\u062a \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u0627\u06cc\u0646 \u0622\u0645\u0648\u0632\u0634 \u0635\u0631\u0641\u0627 \u0628\u0647 \u0645\u0639\u0631\u0641\u06cc \u0627\u06cc\u0646 \u06a9\u062a\u0627\u0628\u062e\u0648\u0646\u0647 \u0645\u06cc \u067e\u0631\u062f\u0627\u0632\u0647 \u0648 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u06a9\u0627\u0631\u06cc \u06a9\u0647 \u0634\u0645\u0627 \u0645\u06cc\u062e\u0648\u0627\u06cc\u0646 \u0627\u0646\u062c\u0627\u0645 \u0628\u0634\u0647 \u0631\u0648 \u0627\u0646\u062c\u0627\u0645 \u0628\u062f\u06cc\u0646\u060c \u0628\u0627\u06cc\u062f \u0637\u0628\u0642 \u0646\u06cc\u0627\u0632 \u062e\u0648\u062f\u062a\u0648\u0646 \u062a\u0648\u06cc \u0627\u06cc\u0646 \u0633\u0627\u06cc\u062a \u06cc\u0627 \u0633\u0627\u06cc\u062a \u0647\u0627\u06cc \u0645\u0634\u0627\u0628\u0647 \u062c\u0633\u062a\u062c\u0648 \u06a9\u0646\u06cc\u062f. \u0648\u0644\u06cc \u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u0646 \u0627\u06cc\u0646\u06a9\u0647 \u0627\u0632 \u0627\u0644\u0627\u0646 \u0628\u0647 \u062e\u0648\u0646\u062f\u0646 \u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0627\u0635\u0644\u06cc \u062a\u0648\u0627\u0628\u0639 \u0648 \u06a9\u062a\u0627\u0628\u062e\u0648\u0646\u0647 \u0647\u0627 \u0639\u0627\u062f\u062a \u06a9\u0646\u06cc\u062f \u062a\u0627 \u0628\u062a\u0648\u0646\u06cc\u062f \u0627\u0632 \u062a\u0645\u0627\u0645 \u0642\u0627\u0628\u0644\u06cc\u062a \u0647\u0627\u06cc \u0627\u0648\u0646 \u06a9\u062a\u0627\u0628\u062e\u0648\u0646\u0647 \u06cc\u0627 ... \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f. \u0628\u0631\u0627\u06cc \u0647\u0645\u06cc\u0646 \u0647\u0645 \u0645\u06cc\u062a\u0648\u0646\u06cc\u062f \u062f\u0627\u06a9\u06cc\u0648\u0645\u0646\u062a Matplotlib \u0631\u0648 \u0627\u0632 \u0627\u06cc\u0646 \u0644\u06cc\u0646\u06a9 \u0648 \u0622\u0645\u0648\u0632\u0634 \u0647\u0627\u06cc \u0627\u0635\u0644\u06cc \u062e\u0648\u062f\u0634 \u0631\u0648 \u0627\u0632 \u0627\u06cc\u0646 \u0644\u06cc\u0646\u06a9 \u062f\u0646\u0628\u0627\u0644 \u06a9\u0646\u06cc\u062f."))}r.isMDXComponent=!0}}]);