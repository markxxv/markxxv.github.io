(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return l});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(152),u=n(153),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return o.a.createElement(c.a,{location:this.props.location,title:t},o.a.createElement(u.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(o.a.Component);e.default=s;var l="1097489062"},148:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(147),u=n.n(c);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var s=n(150),l=n.n(s);n.d(e,"PageRenderer",function(){return l.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return s});var a=n(162),r=n.n(a),i=n(163),o=n.n(i);o.a.overrideThemeStyles=function(){return{h1:{fontFamily:"Georgia"},body:{fontFamily:"Georgia",fontSize:"20px",lineHeight:"1.4em"},"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var u=c.rhythm,s=c.scale},150:function(t,e,n){var a;t.exports=(a=n(151))&&a.default||a},151:function(t,e,n){"use strict";n.r(e);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(52),u=n(2),s=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},152:function(t,e,n){"use strict";n(32);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(148),u=n(149),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t="/"===n.pathname?o.a.createElement("header",null,o.a.createElement("h1",{style:Object.assign({},Object(u.b)(1.2),{marginBottom:Object(u.a)(1.5),marginTop:0})},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a))):o.a.createElement("h3",{style:{marginTop:0}},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(24),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},t,r,o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with ❤️ in Barcelona"," "))},e}(o.a.Component);e.a=s},153:function(t,e,n){"use strict";var a=n(154),r=n(0),i=n.n(r),o=n(4),c=n.n(o),u=n(164),s=n.n(u),l=n(148);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var p="1025518380"},154:function(t){t.exports={data:{site:{siteMetadata:{title:"Developer Notes",description:"--",author:"Mark Vi"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-ac7807b71f87df7d3d7d.js.map