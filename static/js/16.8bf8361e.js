(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/components/Avatar/Avatar.mdx":function(e,a,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=n(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),r=n(t("./node_modules/@babel/runtime/helpers/createClass.js")),l=n(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),o=n(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=n(t("./node_modules/@babel/runtime/helpers/inherits.js")),d=n(t("./node_modules/react/index.js")),m=t("./node_modules/@mdx-js/tag/dist/index.js"),h=t("./node_modules/docz/dist/index.m.js"),c=n(t("./src/components/Avatar/Avatar.tsx")),p=function(e){function a(e){var t;return(0,s.default)(this,a),(t=(0,l.default)(this,(0,o.default)(a).call(this,e))).layout=null,t}return(0,u.default)(a,e),(0,r.default)(a,[{key:"render",value:function(){var e=this.props,a=e.components,t=(0,i.default)(e,["components"]);return d.default.createElement(m.MDXTag,{name:"wrapper",components:a},d.default.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"usage"}},"Usage"),d.default.createElement(m.MDXTag,{name:"h3",components:a,props:{id:"automatic-default-usage"}},"Automatic default usage"),d.default.createElement(h.Playground,{__position:0,__code:'<Avatar name="Bill Gates" />',__scope:{props:this?this.props:t,Avatar:c.default}},d.default.createElement(c.default,{name:"Bill Gates"})),d.default.createElement(m.MDXTag,{name:"h3",components:a,props:{id:"automatic-solid-usage"}},"Automatic solid usage"),d.default.createElement(h.Playground,{__position:1,__code:'<Avatar isSolid name="Eri Reis" />',__scope:{props:this?this.props:t,Avatar:c.default}},d.default.createElement(c.default,{isSolid:!0,name:"Eri Reis"})),d.default.createElement(m.MDXTag,{name:"h3",components:a,props:{id:"using-image-source"}},"Using image source"),d.default.createElement(h.Playground,{__position:2,__code:'<Avatar source="https://picsum.photos/200/200" />',__scope:{props:this?this.props:t,Avatar:c.default}},d.default.createElement(c.default,{source:"https://picsum.photos/200/200"})),d.default.createElement(m.MDXTag,{name:"h3",components:a,props:{id:"avatar-sizes"}},"Avatar sizes"),d.default.createElement(h.Playground,{__position:3,__code:'<Avatar name="Andy Grove" />\n<Avatar name="Bill Gates" size={60} />',__scope:{props:this?this.props:t,Avatar:c.default}},d.default.createElement(c.default,{name:"Andy Grove"}),d.default.createElement(c.default,{name:"Bill Gates",size:60})),d.default.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"props"}},"Props"),d.default.createElement(h.PropsTable,{of:c.default}))}}]),a}(d.default.Component);a.default=p},"./src/components/Avatar/Avatar.tsx":function(e,a,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),i=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.Avatar=a.AvatarWithoutTheme=a.globalGetInitials=void 0;var s=i(t("./node_modules/@babel/runtime/helpers/extends.js")),r=i(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=n(t("./node_modules/react/index.js")),o=t("./node_modules/react-native-web/dist/index.js"),u=t("./src/theme/index.ts"),d=t("./src/components/Layout/index.ts"),m=t("./src/components/Typography/index.ts"),h=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";return e?e.replace(/\s+/," ").split(" ").slice(0,2).map(function(e){return e&&e[0].toUpperCase()}).join(""):a};a.globalGetInitials=h;var c=function(e){var a=e.theme,t=e.source,n=e.size,i=void 0===n?40:n,u=e.name,c=e.isSolid,p=void 0!==c&&c,f=e.hashValue,v=e.getInitials,_=void 0===v?h:v,g=e.color,y=void 0===g?"automatic":g,b=e.forceShowInitials,A=void 0!==b&&b,T=e.sizeLimitOneCharacter,S=void 0===T?20:T,V=(0,r.default)(e,["theme","source","size","name","isSolid","hashValue","getInitials","color","forceShowInitials","sizeLimitOneCharacter"]),E=!t||!1,I=_(u);i<=S&&(I=I.substring(0,1));var q=a.getAvatarStyles({color:y,hashValue:f,isSolid:p,name:u,size:i,sizeLimitOneCharacter:S}),O=q.boxStyle,w=q.textStyle,z=q.imageStyle;return l.createElement(d.Box,(0,s.default)({},O,V),(E||A)&&l.createElement(m.Text,{dangerouslySetInlineStyle:{__style:w}},I),!E&&l.createElement(o.Image,{source:{uri:t},style:z}))};a.AvatarWithoutTheme=c;var p=(0,u.withTheme)(c);a.Avatar=p;var f=p;a.default=f;try{c.displayName="AvatarWithoutTheme",c.__docgenInfo={description:"",displayName:"AvatarWithoutTheme",props:{source:{defaultValue:null,description:"The source attribute of the image.\nWhen it's not available, render initials instead.",name:"source",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"The size of the avatar.",name:"size",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"The name used for the initials and title attribute.",name:"name",required:!1,type:{name:"string"}},hashValue:{defaultValue:null,description:"The value used for the hash function.\nThe name is used as the hashValue by default.\nWhen dealing with anonymous users you should use the id instead.",name:"hashValue",required:!1,type:{name:"string"}},isSolid:{defaultValue:null,description:"When true, render a solid avatar.",name:"isSolid",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"The color used for the avatar.\nWhen the value is `automatic`, use the hash function to determine the color.",name:"color",required:!1,type:{name:'"automatic" | "neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},getInitials:{defaultValue:null,description:"Function to get the initials based on the name.",name:"getInitials",required:!1,type:{name:"GetInitialsType"}},forceShowInitials:{defaultValue:null,description:"When true, force show the initials.\nThis is useful in some cases when using Gravatar and transparent pngs.",name:"forceShowInitials",required:!1,type:{name:"boolean"}},sizeLimitOneCharacter:{defaultValue:null,description:"When the size is smaller than this number, use a single initial for the avatar.",name:"sizeLimitOneCharacter",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"Theme provided by ThemeProvider.",name:"theme",required:!0,type:{name:"ITheme"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#AvatarWithoutTheme"]={docgenInfo:c.__docgenInfo,name:"AvatarWithoutTheme",path:"src/components/Avatar/Avatar.tsx#AvatarWithoutTheme"})}catch(v){}try{p.displayName="Avatar",p.__docgenInfo={description:"",displayName:"Avatar",props:{source:{defaultValue:null,description:"The source attribute of the image.\nWhen it's not available, render initials instead.",name:"source",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"The size of the avatar.",name:"size",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"The name used for the initials and title attribute.",name:"name",required:!1,type:{name:"string"}},hashValue:{defaultValue:null,description:"The value used for the hash function.\nThe name is used as the hashValue by default.\nWhen dealing with anonymous users you should use the id instead.",name:"hashValue",required:!1,type:{name:"string"}},isSolid:{defaultValue:null,description:"When true, render a solid avatar.",name:"isSolid",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"The color used for the avatar.\nWhen the value is `automatic`, use the hash function to determine the color.",name:"color",required:!1,type:{name:'"automatic" | "neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},getInitials:{defaultValue:null,description:"Function to get the initials based on the name.",name:"getInitials",required:!1,type:{name:"GetInitialsType"}},forceShowInitials:{defaultValue:null,description:"When true, force show the initials.\nThis is useful in some cases when using Gravatar and transparent pngs.",name:"forceShowInitials",required:!1,type:{name:"boolean"}},sizeLimitOneCharacter:{defaultValue:null,description:"When the size is smaller than this number, use a single initial for the avatar.",name:"sizeLimitOneCharacter",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:p.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(v){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{source:{defaultValue:null,description:"The source attribute of the image.\nWhen it's not available, render initials instead.",name:"source",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"The size of the avatar.",name:"size",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"The name used for the initials and title attribute.",name:"name",required:!1,type:{name:"string"}},hashValue:{defaultValue:null,description:"The value used for the hash function.\nThe name is used as the hashValue by default.\nWhen dealing with anonymous users you should use the id instead.",name:"hashValue",required:!1,type:{name:"string"}},isSolid:{defaultValue:null,description:"When true, render a solid avatar.",name:"isSolid",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"The color used for the avatar.\nWhen the value is `automatic`, use the hash function to determine the color.",name:"color",required:!1,type:{name:'"automatic" | "neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},getInitials:{defaultValue:null,description:"Function to get the initials based on the name.",name:"getInitials",required:!1,type:{name:"GetInitialsType"}},forceShowInitials:{defaultValue:null,description:"When true, force show the initials.\nThis is useful in some cases when using Gravatar and transparent pngs.",name:"forceShowInitials",required:!1,type:{name:"boolean"}},sizeLimitOneCharacter:{defaultValue:null,description:"When the size is smaller than this number, use a single initial for the avatar.",name:"sizeLimitOneCharacter",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Avatar/Avatar.tsx#__class"})}catch(v){}}}]);
//# sourceMappingURL=16.7230db3e8e908a91f0f3.js.map