(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[10],{1201:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(15),i=a(14),l=a(16),c=a(17),o=a(0),s=a.n(o),h=a(18),d=a(34),m=(a(7),a(440)),u=a(21),p=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).componentDidMount=function(){document.addEventListener("mousedown",r.handleOtherClick,!1)},r.componentWillUnmount=function(){document.removeEventListener("mousedown",r.handleOtherClick,!1)},r.handleClose=function(e){e.preventDefault(),r.props.hideRightSidebar()},r.handleOtherClick=function(e){r.rightBarNodeRef.contains(e.target)||r.props.hideRightSidebar()},r.handleClose=r.handleClose.bind(Object(i.a)(r)),r.state={},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props.title,a=this.props.children||null;return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{style:{maxHeight:"100%",zIndex:1e4}},s.a.createElement("div",{className:"right-bar",ref:function(t){return e.rightBarNodeRef=t}},s.a.createElement("div",{className:"rightbar-title"},s.a.createElement(d.b,{to:"#",className:"right-bar-toggle float-right",onClick:this.handleClose},s.a.createElement("i",{className:"dripicons-cross noti-icon"})),s.a.createElement("h5",{className:"m-0"},t)),s.a.createElement("div",{className:"rightbar-content"},a))),s.a.createElement("div",{className:"rightbar-overlay"}))}}]),a}(o.Component);p.defaultProps={title:"Right Sidebar"},t.default=Object(h.b)(null,{hideRightSidebar:u.g})(p)}}]);
//# sourceMappingURL=10.d1bfbffb.chunk.js.map