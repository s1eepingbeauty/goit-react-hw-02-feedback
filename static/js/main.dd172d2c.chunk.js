(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a.n(n),r=a(5),o=a(6),i=a(7),s=a(9),d=a(8),b=a(1),u=a(0),l=function(e){var t=e.title,a=e.children;return Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:t}),a]})},j=function(e){var t=e.message;return Object(u.jsx)("p",{children:t})},h=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,r=e.positivePercentage;return Object(u.jsxs)(u.Fragment,{children:[c>0&&Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Good: ",t]}),Object(u.jsxs)("li",{children:["Neutral: ",a]}),Object(u.jsxs)("li",{children:["Bad: ",n]}),Object(u.jsxs)("li",{children:["Total: ",c]}),Object(u.jsxs)("li",{children:["Positive feedbacks: ",r,"%"]})]}),0===c&&Object(u.jsx)(j,{message:"No Feedback given"})]})},v=a(2),f=a.n(v),k=function(e){var t=e.options,a=e.onLeaveFeedback;return t.map((function(e){return function(e){var t=e.feedback,a=e.onLeaveFeedback;return Object(u.jsx)("button",{type:"button","data-feedback":t,onClick:a,children:t},t)}({feedback:e,onLeaveFeedback:a})}))};k.propTypes={options:f.a.arrayOf(f.a.string),onLeaveFeedback:f.a.func.isRequired};var O=k,g=["good","neutral","bad"],p=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){var a=t.target.dataset.feedback;e.setState((function(e){return Object(r.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,a=e.countTotalFeedback();return Math.round(t/a*100)||0},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage();return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{title:"Please leave feedback",children:Object(u.jsx)(O,{options:g,onLeaveFeedback:this.handleFeedback})}),Object(u.jsx)(l,{title:"Statistics",children:Object(u.jsx)(h,{good:t,neutral:a,bad:n,total:c,positivePercentage:r})})]})}}]),a}(b.Component);a(17);c.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.dd172d2c.chunk.js.map