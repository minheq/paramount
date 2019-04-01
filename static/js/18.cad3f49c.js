(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./src/components/Calendars/Month/MonthBody.tsx":function(e,t,n){var a=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n("./node_modules/date-fns/index.js"),d=o(n("./node_modules/react/index.js")),r=n("./src/theme/index.ts"),l=n("./src/components/Layout/index.ts"),i=n("./src/components/Calendars/Month/constants.ts"),c=a(n("./src/components/Calendars/Month/MonthDay.tsx")),u=function(e){var t=e.onSelect,n=e.month,a=d.useContext(r.ThemeContext);return d.createElement(l.Box,null,n.weeks.map(function(e){return d.createElement(l.Box,{flexDirection:"row",key:e.index},e.days.map(function(e){var n=e.date,o=e.isCurrentMonth,r=e.isSelected,u=e.isSelectedStart,m=e.isSelectedEnd;return o?d.createElement(l.Box,{flex:1,justifyContent:"center",alignItems:"flex-start",key:(0,s.format)(n,i.DATE_FORMAT)},d.createElement(c.default,{onSelect:t,date:n,isSelected:r,isSelectionStart:u,isSelectionEnd:m})):d.createElement(l.Box,{flex:1,justifyContent:"center",alignItems:"flex-start",key:n.toISOString(),paddingVertical:4,zIndex:-1},d.createElement(l.Box,{backgroundColor:r?a.colors.background.primary.focus:"transparent",flex:1,height:40,width:"100%"}))}))}))},m=d.memo(u,function(e,t){return e.month.selectedRange===t.month.selectedRange&&e.onSelect===t.onSelect});t.default=m;try{u.displayName="MonthBody",u.__docgenInfo={description:"",displayName:"MonthBody",props:{month:{defaultValue:null,description:"",name:"month",required:!0,type:{name:"Month"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(date: Date) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendars/Month/MonthBody.tsx#MonthBody"]={docgenInfo:u.__docgenInfo,name:"MonthBody",path:"src/components/Calendars/Month/MonthBody.tsx#MonthBody"})}catch(f){}},"./src/components/Calendars/Month/MonthCalendar.mdx":function(e,t,n){var a=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=a(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),d=a(n("./node_modules/@babel/runtime/helpers/createClass.js")),r=a(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=a(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=a(n("./node_modules/@babel/runtime/helpers/inherits.js")),c=a(n("./node_modules/react/index.js")),u=n("./node_modules/@mdx-js/tag/dist/index.js"),m=n("./node_modules/date-fns/index.js"),f=n("./node_modules/docz/dist/index.m.js"),h=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),p=n("./src/components/Layout/index.ts"),D=n("./src/components/Typography/index.ts"),M=a(n("./src/components/Calendars/Month/MonthCalendar.tsx")),S=a(n("./src/components/Calendars/Month/MultiMonthCalendar.tsx")),y=a(n("./src/components/Calendars/Month/WeekDays.tsx")),_=function(e){function t(e){var n;return(0,s.default)(this,t),(n=(0,r.default)(this,(0,l.default)(t).call(this,e))).layout=null,n}return(0,i.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=(0,o.default)(e,["components"]);return c.default.createElement(u.MDXTag,{name:"wrapper",components:t},c.default.createElement(u.MDXTag,{name:"h2",components:t,props:{id:"monthcalendar"}},"MonthCalendar"),c.default.createElement(f.Playground,{__position:0,__code:"<Spacing paddingBottom={4}>\n  <Heading size=\"xxxlarge\">{format(new Date(), 'MMMM YYYY')}</Heading>\n</Spacing>\n<WeekDays />\n<State\n  initial={{\n    selectedStartDate: null,\n    selectedEndDate: null,\n  }}\n>\n  {({ state: { selectedStartDate, selectedEndDate }, setState }) => (\n    <MonthCalendar\n      selectedStartDate={selectedStartDate}\n      selectedEndDate={selectedEndDate}\n      // MUST SEE https://github.com/facebook/react/issues/14972\n      onSelect={date => {\n        if (!selectedStartDate && !selectedEndDate) {\n          setState({\n            selectedStartDate: date,\n            selectedEndDate: null,\n          })\n        } else if (selectedStartDate && !selectedEndDate) {\n          if (isBefore(date, selectedStartDate)) {\n            setState({\n              selectedStartDate: date,\n              selectedEndDate: null,\n            })\n          } else if (!isSameDay(selectedStartDate, date)) {\n            setState({\n              selectedEndDate: date,\n            })\n          }\n        } else {\n          setState({\n            selectedStartDate: date,\n            selectedEndDate: null,\n          })\n        }\n      }}\n    />\n  )}\n</State>",__scope:{props:this?this.props:n,format:m.format,addDays:m.addDays,subDays:m.subDays,addMonths:m.addMonths,subMonths:m.subMonths,isSameDay:m.isSameDay,isBefore:m.isBefore,isAfter:m.isAfter,State:h.State,Box:p.Box,Spacing:p.Spacing,Heading:D.Heading,MonthCalendar:M.default,MultiMonthCalendar:S.default,WeekDays:y.default}},c.default.createElement(p.Spacing,{paddingBottom:4},c.default.createElement(D.Heading,{size:"xxxlarge"},(0,m.format)(new Date,"MMMM YYYY"))),c.default.createElement(y.default,null),c.default.createElement(h.State,{initial:{selectedStartDate:null,selectedEndDate:null}},function(e){var t=e.state,n=t.selectedStartDate,a=t.selectedEndDate,o=e.setState;return c.default.createElement(M.default,{selectedStartDate:n,selectedEndDate:a,onSelect:function(e){(n||a)&&n&&!a?(0,m.isBefore)(e,n)?o({selectedStartDate:e,selectedEndDate:null}):(0,m.isSameDay)(n,e)||o({selectedEndDate:e}):o({selectedStartDate:e,selectedEndDate:null})}})})),c.default.createElement(u.MDXTag,{name:"h2",components:t,props:{id:"multimonthcalendar"}},"MultiMonthCalendar"),c.default.createElement(u.MDXTag,{name:"p",components:t},"Check out this issue for idiomatic use of MultiMonthCalendar event handler ",c.default.createElement(u.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/facebook/react/issues/14972"}},"https://github.com/facebook/react/issues/14972"),"\nAlso applies to ",c.default.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"MonthCalendar")),c.default.createElement(f.Playground,{__position:1,__code:"<State\n  initial={{\n    selectedStartDate: null,\n    selectedEndDate: null,\n  }}\n>\n  {({ state: { selectedStartDate, selectedEndDate }, setState }) => (\n    <MultiMonthCalendar\n      selectedStartDate={selectedStartDate}\n      selectedEndDate={selectedEndDate}\n      startMonthDate={subMonths(new Date(), 2)}\n      endMonthDate={addMonths(new Date(), 2)}\n      // MUST SEE https://github.com/facebook/react/issues/14972\n      onSelect={date => {\n        if (!selectedStartDate && !selectedEndDate) {\n          setState({\n            selectedStartDate: date,\n            selectedEndDate: null,\n          })\n        } else if (selectedStartDate && !selectedEndDate) {\n          if (isBefore(date, selectedStartDate)) {\n            setState({\n              selectedStartDate: date,\n              selectedEndDate: null,\n            })\n          } else if (isAfter(date, selectedStartDate)) {\n            setState({\n              selectedEndDate: date,\n            })\n          }\n        } else {\n          setState({\n            selectedStartDate: date,\n            selectedEndDate: null,\n          })\n        }\n      }}\n    />\n  )}\n</State>",__scope:{props:this?this.props:n,format:m.format,addDays:m.addDays,subDays:m.subDays,addMonths:m.addMonths,subMonths:m.subMonths,isSameDay:m.isSameDay,isBefore:m.isBefore,isAfter:m.isAfter,State:h.State,Box:p.Box,Spacing:p.Spacing,Heading:D.Heading,MonthCalendar:M.default,MultiMonthCalendar:S.default,WeekDays:y.default}},c.default.createElement(h.State,{initial:{selectedStartDate:null,selectedEndDate:null}},function(e){var t=e.state,n=t.selectedStartDate,a=t.selectedEndDate,o=e.setState;return c.default.createElement(S.default,{selectedStartDate:n,selectedEndDate:a,startMonthDate:(0,m.subMonths)(new Date,2),endMonthDate:(0,m.addMonths)(new Date,2),onSelect:function(e){(n||a)&&n&&!a?(0,m.isBefore)(e,n)?o({selectedStartDate:e,selectedEndDate:null}):(0,m.isAfter)(e,n)&&o({selectedEndDate:e}):o({selectedStartDate:e,selectedEndDate:null})}})})),c.default.createElement(u.MDXTag,{name:"h3",components:t,props:{id:"props"}},"Props"),c.default.createElement(f.PropsTable,{of:M.default}))}}]),t}(c.default.Component);t.default=_},"./src/components/Calendars/Month/MonthCalendar.tsx":function(e,t,n){var a=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(n("./node_modules/@babel/runtime/helpers/slicedToArray.js")),d=a(n("./node_modules/react/index.js")),r=n("./src/components/Layout/index.ts"),l=n("./src/components/Calendars/constants.ts"),i=n("./src/components/Calendars/utils.ts"),c=o(n("./src/components/Calendars/Month/MonthBody.tsx")),u=n("./src/components/Calendars/Month/utils/getWeeksInMonth.ts"),m=function(e){var t=e.date,n=void 0===t?new Date:t,a=e.firstDayOfWeekIndex,o=void 0===a?l.DEFAULT_FIRST_DAY_OF_WEEK:a,m=e.selectedStartDate,f=void 0===m?null:m,h=e.selectedEndDate,p=void 0===h?null:h,D=e.onSelect,M=(0,i.marshalTimeRange)(f,p),S=(0,s.default)(M,2),y=S[0],_=S[1],E=(0,u.getWeeksInMonth)(n,y,_,o);return d.createElement(r.Box,{flex:1,width:"100%"},d.createElement(c.default,{onSelect:D,month:E}))},f=m;t.default=f;try{m.displayName="MonthCalendar",m.__docgenInfo={description:"",displayName:"MonthCalendar",props:{date:{defaultValue:null,description:"Date to which display its month for. @default Date",name:"date",required:!1,type:{name:"Date"}},selectedStartDate:{defaultValue:null,description:"Highlights the date or start date on the calendar",name:"selectedStartDate",required:!1,type:{name:"Date"}},selectedEndDate:{defaultValue:null,description:"Highlights the end date on the calendar. Will created a selected range",name:"selectedEndDate",required:!1,type:{name:"Date"}},firstDayOfWeekIndex:{defaultValue:null,description:"",name:"firstDayOfWeekIndex",required:!1,type:{name:"number"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(date: Date) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendars/Month/MonthCalendar.tsx#MonthCalendar"]={docgenInfo:m.__docgenInfo,name:"MonthCalendar",path:"src/components/Calendars/Month/MonthCalendar.tsx#MonthCalendar"})}catch(h){}},"./src/components/Calendars/Month/MonthDay.tsx":function(e,t,n){var a=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("./node_modules/date-fns/index.js"),s=a(n("./node_modules/react/index.js")),d=n("./node_modules/react-native-web/dist/index.js"),r=n("./src/theme/index.ts"),l=n("./src/components/Typography/index.ts"),i=n("./src/components/Calendars/Month/constants.ts"),c=function(e){var t=e.isSelected,n=e.isSelectionStart,a=e.isSelectionEnd,c=e.date,u=e.onSelect,m=void 0===u?function(){return null}:u,f=s.useContext(r.ThemeContext);return s.createElement(d.TouchableHighlight,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center",paddingVertical:4,width:"100%"},underlayColor:"transparent",onPress:function(){return m(c)}},s.createElement(d.View,{style:{alignItems:"center",backgroundColor:!t||n||a?"transparent":f.colors.background.primary.focus,flex:1,flexDirection:"row",height:i.DEFAULT_MONTH_DAY_HEIGHT-4,justifyContent:"center",position:"relative"}},n&&!a&&s.createElement(d.View,{style:{backgroundColor:f.colors.background.primary.focus,height:"100%",position:"absolute",right:0,width:"50%"}}),a&&!n&&s.createElement(d.View,{style:{backgroundColor:f.colors.background.primary.focus,height:"100%",left:0,position:"absolute",width:"50%"}}),s.createElement(d.View,{style:{alignItems:"center",backgroundColor:t?f.colors.background.primary.focus:"transparent",borderRadius:999,flexDirection:"row",height:i.DEFAULT_MONTH_DAY_HEIGHT-4,justifyContent:"center",width:i.DEFAULT_MONTH_DAY_HEIGHT-4}},s.createElement(l.Text,{color:t?"plain":"default"},(0,o.format)(c,"D")))))},u=c;t.default=u;try{c.displayName="MonthDay",c.__docgenInfo={description:"",displayName:"MonthDay",props:{date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"Date"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},isSelectionStart:{defaultValue:null,description:"",name:"isSelectionStart",required:!0,type:{name:"boolean"}},isSelectionEnd:{defaultValue:null,description:"",name:"isSelectionEnd",required:!0,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(date: Date) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendars/Month/MonthDay.tsx#MonthDay"]={docgenInfo:c.__docgenInfo,name:"MonthDay",path:"src/components/Calendars/Month/MonthDay.tsx#MonthDay"})}catch(m){}},"./src/components/Calendars/Month/MultiMonthCalendar.tsx":function(e,t,n){var a=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(n("./node_modules/@babel/runtime/helpers/slicedToArray.js")),d=n("./node_modules/date-fns/index.js"),r=a(n("./node_modules/react/index.js")),l=n("./src/components/Layout/index.ts"),i=n("./src/components/Typography/index.ts"),c=n("./src/components/Calendars/constants.ts"),u=n("./src/components/Calendars/utils.ts"),m=o(n("./src/components/Calendars/Month/MonthBody.tsx")),f=n("./src/components/Calendars/Month/utils/getWeeksInMonth.ts"),h=function(e){var t=e.firstDayOfWeekIndex,n=void 0===t?c.DEFAULT_FIRST_DAY_OF_WEEK:t,a=e.startMonthDate,o=void 0===a?new Date:a,h=e.endMonthDate,p=void 0===h?(0,d.addMonths)(new Date,1):h,D=e.selectedStartDate,M=void 0===D?null:D,S=e.selectedEndDate,y=void 0===S?null:S,_=e.onSelect,E=(0,u.marshalTimeRange)(o,p),g=(0,s.default)(E,2),C=g[0],x=g[1];if(!C||!x)throw new Error("Please pass correct startMonthDate and endMonthDate in MultiMonthCalendar");var v=(0,u.marshalTimeRange)(M,y),b=(0,s.default)(v,2),T=b[0],O=b[1],A=(0,f.getWeeksInMultiMonth)(C,x,T,O,n);return r.createElement(l.Box,{flex:1,width:"100%"},A.map(function(e){return r.createElement(l.Box,{key:e.formattedMonth},r.createElement(l.Spacing,{paddingVertical:3},r.createElement(i.Heading,{size:"xlarge"},(0,d.format)(e.month,"MMMM YYYY"))),r.createElement(m.default,{month:e,onSelect:_}))}))},p=h;t.default=p;try{h.displayName="MultiMonthCalendar",h.__docgenInfo={description:"",displayName:"MultiMonthCalendar",props:{startMonthDate:{defaultValue:null,description:"",name:"startMonthDate",required:!1,type:{name:"Date"}},endMonthDate:{defaultValue:null,description:"",name:"endMonthDate",required:!1,type:{name:"Date"}},selectedStartDate:{defaultValue:null,description:"Highlights the date or start date on the calendar",name:"selectedStartDate",required:!1,type:{name:"Date"}},selectedEndDate:{defaultValue:null,description:"Highlights the end date on the calendar. Will created a selected range",name:"selectedEndDate",required:!1,type:{name:"Date"}},firstDayOfWeekIndex:{defaultValue:null,description:"",name:"firstDayOfWeekIndex",required:!1,type:{name:"number"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(date: Date) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendars/Month/MultiMonthCalendar.tsx#MultiMonthCalendar"]={docgenInfo:h.__docgenInfo,name:"MultiMonthCalendar",path:"src/components/Calendars/Month/MultiMonthCalendar.tsx#MultiMonthCalendar"})}catch(D){}},"./src/components/Calendars/Month/WeekDays.tsx":function(e,t,n){var a=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("./node_modules/date-fns/index.js"),s=a(n("./node_modules/react/index.js")),d=n("./src/components/Layout/index.ts"),r=n("./src/components/Typography/index.ts"),l=n("./src/components/Calendars/constants.ts"),i=function(e){var t=e.firstDayOfWeekIndex,n=function(e){for(var t=[],n=(0,o.addDays)((0,o.startOfWeek)(new Date),e),a=0;a<7;a++)t.push((0,o.addDays)(n,a));return t}(void 0===t?l.DEFAULT_FIRST_DAY_OF_WEEK:t);return s.createElement(d.Box,{flex:1,flexDirection:"row"},n.map(function(e){return s.createElement(d.Spacing,{key:e.toISOString(),flex:1,justifyContent:"center",alignItems:"center",padding:1},s.createElement(r.Text,null,(0,o.format)(e,"dd")))}))},c=i;t.default=c;try{i.displayName="WeekDays",i.__docgenInfo={description:"",displayName:"WeekDays",props:{firstDayOfWeekIndex:{defaultValue:null,description:"",name:"firstDayOfWeekIndex",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendars/Month/WeekDays.tsx#WeekDays"]={docgenInfo:i.__docgenInfo,name:"WeekDays",path:"src/components/Calendars/Month/WeekDays.tsx#WeekDays"})}catch(u){}},"./src/components/Calendars/Month/constants.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_MONTH_DAY_HEIGHT=t.DATE_FORMAT=void 0;t.DATE_FORMAT="YYYY-MM-DD";t.DEFAULT_MONTH_DAY_HEIGHT=48},"./src/components/Calendars/Month/utils/chunk.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.chunk=void 0;t.chunk=function(e,t){t=Math.max(t,0);var n=null==e?0:e.length;if(!n||t<1)return[];for(var a=0,o=0,s=new Array(Math.ceil(n/t));a<n;)s[o++]=e.slice(a,a+=t);return s}},"./src/components/Calendars/Month/utils/getWeeksInMonth.ts":function(e,t,n){var a=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getWeeksInMultiMonth=t.getWeeksInMonth=t.getDaysInMonth=t.monthPageInWeeks=t.monthPageInDates=void 0;var o=a(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),s=n("./node_modules/date-fns/index.js"),d=n("./src/components/Calendars/Month/constants.ts"),r=n("./src/components/Calendars/Month/utils/chunk.ts"),l=function(e){return(0,s.eachDay)((0,s.startOfMonth)(e),(0,s.endOfMonth)(e))},i=function(e,t){var n=function(e){return(7+e)%7||7}(t),a=[],o=e;return o.getDay()!==n&&(o=(0,s.addDays)(o,-(o.getDay()+7-n)%7)),(0,s.isBefore)(o,e)&&(a=(0,s.eachDay)(o,(0,s.subDays)(e,1))),a},c=function(e,t){var n=[],a=function(e){return(e+6)%7}(t),o=e;return o.getDay()!==a&&(o=(0,s.addDays)(o,(a+7-o.getDay())%7)),(0,s.isAfter)(o,e)&&(n=(0,s.eachDay)((0,s.addDays)(e,1),o)),n},u=function(e,t){var n=l(e),a=n[0],o=n[n.length-1],s=i(a,t),d=c(o,t);return s.concat(n,d)};t.monthPageInDates=u;var m=function(e){return(0,r.chunk)(e,7)};t.monthPageInWeeks=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return m(u(e,t))};var f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n){return{date:n,isCurrentMonth:t,isSelected:e,isSelectedEnd:!1,isSelectedStart:!1}}},h=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,d=l(e),r=d[0],u=d[d.length-1],m=function(e,t,n){if(!t)return e.map(f(!1));var a=e.findIndex(function(e){return(0,s.isSameDay)(e,t)}),d=-1!==a,r=n?e.findIndex(function(e){return(0,s.isSameDay)(e,n)}):a,l=-1!==r,i=d?e.slice(0,a).map(f(!1)):[],c=e.slice(d?a:0,l?r:e.length).map(f(!0)),u=l?e.slice(r).map(f(!1)):[],m=i.concat(c,u);return m[a]=(0,o.default)({},m[a],{isSelected:!0,isSelectedStart:!0}),m[r]=(0,o.default)({},m[r],{isSelected:!0,isSelectedEnd:!0}),m}(d,t,n),h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=!(!t||!(0,s.isBefore)(t,e));return i(e,n).map(f(a,!1))}(r,t,a),p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=!(!t||!(0,s.isAfter)(t,e));return c(e,n).map(f(a,!1))}(u,n,a);return h.concat(m,p)};t.getDaysInMonth=h;var p=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=h(e,t,n,a),r="".concat(t?(0,s.format)(t,d.DATE_FORMAT):"","-").concat(n?(0,s.format)(n,d.DATE_FORMAT):"");return{formattedMonth:(0,s.format)(e,d.DATE_FORMAT),month:e,selectedRange:r,weeks:m(o).map(function(e){return{days:e,index:(0,s.getISOWeek)(e[0].date)}})}};t.getWeeksInMonth=p;t.getWeeksInMultiMonth=function(e,t,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return function(e,t){for(var n=(0,s.differenceInMonths)(t,e),a=[],o=0;o<n;o++)a.push((0,s.addMonths)(e,o));return a}(e,t).map(function(e){if(!n)return p(e,null,null,o);var t=(0,s.startOfMonth)(e),d=(0,s.endOfMonth)(e);if(!a){var r=(0,s.isWithinRange)(n,t,d);return p(e,r?n:null,null,o)}return(0,s.areRangesOverlapping)(t,d,n,a)||(0,s.isSameDay)(a,t)?p(e,n,a,o):p(e,null,null,o)})}},"./src/components/Calendars/constants.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_FIRST_DAY_OF_WEEK=t.TOTAL_MINUTES_IN_DAY=t.DAY_DATE_FORMAT=void 0;t.DAY_DATE_FORMAT="YYYY-MM-DD";t.TOTAL_MINUTES_IN_DAY=1440;t.DEFAULT_FIRST_DAY_OF_WEEK=1},"./src/components/Calendars/utils.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.marshalTimeRange=void 0;var a=n("./node_modules/date-fns/index.js");t.marshalTimeRange=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t&&e&&(0,a.isBefore)(t,e)?(console.error("Selected end date cannot be before selected start date"),[null,null]):t&&!e?(console.error("Selected end date cannot exist without selected start date"),[null,null]):[e,t]}}}]);
//# sourceMappingURL=18.51ccd3e2fae743921911.js.map