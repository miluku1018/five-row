(this["webpackJsonpfive-row"]=this["webpackJsonpfive-row"]||[]).push([[0],{23:function(n,r,t){"use strict";t.r(r);var e=t(2),a=t(1),i=t(0),c=t.n(i),o=t(11),u=t.n(o),b=t(15),p=t(4),s=t(3);function x(){var n=Object(e.a)(['\n  content: "";\n  background-color: #fcfcfc;\n  width: 20px;\n  height: 20px;\n  border: 0;\n  margin: 2px auto 0;\n  border-radius: 50%;\n  box-shadow: inset 0 -2px 2px 0 rgba(0, 0, 0, 0.2),\n    inset 2px 0 2px 0 rgba(0, 0, 0, 0.2), inset -2px 0 2px 0 rgba(0, 0, 0, 0.2),\n    inset 0 -2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0px #272a27;\n']);return x=function(){return n},n}function f(){var n=Object(e.a)(['\n  content: "";\n  background-color: #ffb0be;\n  width: 20px;\n  height: 20px;\n  border: 0;\n  margin: 2px auto 0;\n  border-radius: 50%;\n  justify-content: center;\n  box-shadow: inset 0 -2px 2px rgba(0, 0, 0, 0.2),\n    inset 2px 0 2px rgba(0, 0, 0, 0.2), inset -2px 0 2px rgba(0, 0, 0, 0.2),\n    inset 0 -2px 2px rgba(0, 0, 0, 0.2), 0 2px 2px 0px #272a27;\n']);return f=function(){return n},n}function d(){var n=Object(e.a)(["\n  display: table;\n  float: left;\n  margin: 0;\n  width: 25px;\n  height: 25px;\n  background: linear-gradient(\n      to bottom,\n      transparent 48%,\n      #999 48%,\n      #999 52%,\n      transparent 52%\n    ),\n    linear-gradient(\n      to right,\n      transparent 48%,\n      #999 48%,\n      #999 52%,\n      transparent 52%\n    );\n  cursor: pointer;\n  &:hover {\n    background: radial-gradient(\n      circle closest-side at center,\n      #ffc93c,\n      rgba(0, 0, 0, 0)\n    );\n  }\n  &:active {\n    transform: scale(0.98, 0.98);\n  }\n"]);return d=function(){return n},n}var j=s.b.div(d()),l=s.b.div(f()),O=s.b.div(x());function g(n){var r,t=n.value,e=n.onClick;return t&&(r="pink"===t?Object(a.jsx)(l,{}):Object(a.jsx)(O,{})),Object(a.jsx)(j,{onClick:e,children:r})}function v(){var n=Object(e.a)([""]);return v=function(){return n},n}function h(){var n=Object(e.a)(["\n  margin: 30px auto;\n  height: 475px;\n  width: 475px;\n  background-color: #eee;\n  box-shadow: inset 0 -3px 3px 0 rgba(0, 0, 0, 0.2),\n    inset 3px 0 3px 0 rgba(0, 0, 0, 0.2), inset -3px 0 3px 0 rgba(0, 0, 0, 0.2),\n    inset 0 -3px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0px #272a27;\n  border-radius: 5px;\n"]);return h=function(){return n},n}var k=s.b.div(h()),w=s.b.div(v());function m(n){var r=n.squares,t=n.onClick;return Object(a.jsx)(k,{children:r.map((function(n,r){return Object(a.jsx)(w,{children:n.map((function(n,e){return Object(a.jsx)(g,{value:n,onClick:function(){return t(e,r)}},e)}))},r)}))})}function y(){var n=Object(e.a)(["\n  color: #433e3e;\n  font-size: 20px;\n"]);return y=function(){return n},n}function C(){var n=Object(e.a)(["\n  display: block;\n  margin-left: 10px;\n  background-color: saddlebrown;\n  border-radius: 5px;\n  border: 1px solid transparent;\n  color: #ffffff;\n  margin: 15px auto;\n  padding: 5px 10px;\n  cursor: pointer;\n"]);return C=function(){return n},n}function S(){var n=Object(e.a)(["\n  font-size: 40px;\n  color: #ffffff;\n"]);return S=function(){return n},n}function q(){var n=Object(e.a)(["\n  margin: 5px;\n"]);return q=function(){return n},n}function z(){var n=Object(e.a)(["\n  color: darkgreen;\n"]);return z=function(){return n},n}function A(){var n=Object(e.a)(["\n  width: 600px;\n  margin: 0 auto;\n  text-align: center;\n"]);return A=function(){return n},n}var J=s.b.div(A()),W=s.b.h1(z()),B=s.b.div(q()),E=s.b.div(S()),F=s.b.button(C()),I=s.b.div(y()),D=function(n){var r=n.pinkOrWhite,t=n.winner;return Object(a.jsxs)("div",{children:[Object(a.jsx)(W,{children:"\u7c21\u6613\u4e94\u5b50\u68cb"}),t&&Object(a.jsxs)(B,{children:[Object(a.jsx)(F,{onClick:function(){return window.location.reload()},children:"\u518d\u73a9\u4e00\u6b21"}),Object(a.jsxs)(E,{children:["\u8d0f\u5bb6\uff1a","pink"===t?"\u7c89\u7d05\u68cb":"\u767d\u68cb"]})]}),Object(a.jsx)(I,{children:"pink"===r?"\u7c89\u7d05\u68cb":"\u767d\u68cb"})]})};function G(){var n=Object(i.useState)(Array(19).fill(Array(19).fill(null))),r=Object(p.a)(n,2),t=r[0],e=r[1],c=Object(i.useState)(0),o=Object(p.a)(c,2),u=o[0],s=o[1],x=Object(i.useState)(!0),f=Object(p.a)(x,2),d=f[0],j=f[1],l=Object(i.useState)(null),O=Object(p.a)(l,2),g=O[0],v=O[1],h=Object(i.useState)(null),k=Object(p.a)(h,2),w=k[0],y=k[1],C=d?"pink":"white",S=function(n,r,t){if(null!==r&&null!==t){var e,a=n[t][r],i=function(r,t,e,a,i){for(var c=0,o=t,u=e;c<5&&(u+=i,!((o+=a)<0||o>=19||u<0||u>=19||n[u][o]!==r));)c++;return c};return(i(a,r,t,1,0)+i(a,r,t,-1,0)>=4||i(a,r,t,0,1)+i(a,r,t,0,-1)>=4||i(a,r,t,1,1)+i(a,r,t,-1,-1)>=4||i(a,r,t,-1,1)+i(a,r,t,1,-1)>=4)&&(e=a),e}}(t,g,w);return Object(a.jsxs)(J,{children:[Object(a.jsx)(D,{pinkOrWhite:C,winner:S}),Object(a.jsx)(m,{squares:t,onClick:function(n,r){v(n),y(r);var a=Object(b.a)(t);S||a[r][n]||(e(a.map((function(t,e){return e!==r?t:t.map((function(r,t){return t!==n?r:C}))}))),s(u+1),j(!d))}})]})}function H(){var n=Object(e.a)(["\n  body {\n    background-color: #e7a5af;\n  }\n"]);return H=function(){return n},n}var K=Object(s.a)(H());u.a.render(Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(K,{}),Object(a.jsx)(G,{})]}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.c9207b73.chunk.js.map