"use strict";(self.webpackChunkginger_ui_kit=self.webpackChunkginger_ui_kit||[]).push([[52],{"./src/components/uploader/Uploader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Uploader_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),icons=__webpack_require__("./src/components/icons/index.ts"),typography=__webpack_require__("./src/components/typography/index.ts"),hooks=__webpack_require__("./src/shared/hooks/index.ts"),classNames_utils=__webpack_require__("./src/shared/utils/classNames/classNames.utils.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Uploader_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/uploader/Uploader.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Uploader_module.Z,options);let uploader_Uploader_module=Uploader_module.Z&&Uploader_module.Z.locals?Uploader_module.Z.locals:void 0;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Uploader=function(props){var _obj,className=props.className,_props_maxWidth=props.maxWidth,maxWidth=void 0===_props_maxWidth?1024:_props_maxWidth,_props_maxHeight=props.maxHeight,maxHeight=void 0===_props_maxHeight?1024:_props_maxHeight,onChange=props.onChange,_useState=_sliced_to_array((0,react.useState)(null),2),image=_useState[0],setImage=_useState[1],_useState1=_sliced_to_array((0,react.useState)("No selected file"),2),fileName=_useState1[0],setFileName=_useState1[1],uploadRef=(0,react.useRef)(null),hoverRef=(0,react.useRef)(null),isHover=(0,hooks.XI)(hoverRef),mods=(_define_property(_obj={},uploader_Uploader_module.hover,image&&isHover),_define_property(_obj,uploader_Uploader_module.show,!image),_obj);return(0,jsx_runtime.jsxs)("div",{className:(0,classNames_utils.A)(uploader_Uploader_module.uploader,{},[className]),onClick:function(){uploadRef.current&&uploadRef.current.click()},ref:hoverRef,children:[(0,jsx_runtime.jsx)("input",{type:"file",accept:".png, .jpeg, .jpg",hidden:!0,onChange:function(event){var files=event.target.files;if(files&&files.length>0){var selectedFile=files[0],maxDimensions={width:maxWidth,height:maxHeight},image=new Image;image.src=URL.createObjectURL(selectedFile),image.onload=function(){image.width>maxDimensions.width||image.height>maxDimensions.height||(setFileName(selectedFile.name),setImage(URL.createObjectURL(selectedFile)),onChange&&onChange(selectedFile))}}},ref:uploadRef}),image&&(0,jsx_runtime.jsx)("img",{className:uploader_Uploader_module.image,src:image,width:150,height:150,alt:fileName}),(0,jsx_runtime.jsxs)("div",{className:(0,classNames_utils.A)(uploader_Uploader_module.description,mods),children:[(0,jsx_runtime.jsx)(icons.XB,{}),(0,jsx_runtime.jsx)(typography.Z,{fontWeight:"medium",children:image?"Change Image":"+ Upload Image"})]})]})};try{Uploader.displayName="Uploader",Uploader.__docgenInfo={description:"",displayName:"Uploader",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(file: File) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/uploader/Uploader.component.tsx#Uploader"]={docgenInfo:Uploader.__docgenInfo,name:"Uploader",path:"src/components/uploader/Uploader.component.tsx#Uploader"})}catch(__react_docgen_typescript_loader_error){}function Uploader_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Uploader_stories_define_property(target,key,source[key])})}return target}let Uploader_stories={component:Uploader,title:"Components/Uploader",tags:["autodocs"]};var Default={args:{},render:function(args){return(0,jsx_runtime.jsx)(Uploader,_object_spread({onChange:function(){}},args))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <Uploader onChange={() => {}} {...args} />\n}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/typography/Typography.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".o1tYbbSHaCdRe6sP9aAy{font-family:var(--font-family)}.o1tYbbSHaCdRe6sP9aAy.MUL4oyNFTmkEIEwe4hUP{font-weight:var(--fw-regular)}.o1tYbbSHaCdRe6sP9aAy.BtjTBUchxKJubtce0bTc{font-weight:var(--fw-medium)}.o1tYbbSHaCdRe6sP9aAy.S8Sfeiujl2ukh5liwf15{font-weight:var(--fw-semi)}.o1tYbbSHaCdRe6sP9aAy.JriDZhSDGhsVmOoaUBjy{font-weight:var(--fw-bold)}.o1tYbbSHaCdRe6sP9aAy.ZcLZ0b9T6E6SawJr0m6x{text-align:left}.o1tYbbSHaCdRe6sP9aAy.dIRZKtgN_UDIuOsdUm3o{text-align:center}.o1tYbbSHaCdRe6sP9aAy.GZNkoMm4g9lsaYiqriBZ{text-align:right}.o1tYbbSHaCdRe6sP9aAy.S92iyP3Mfxc7T_PKMAnw{color:var(--black)}.o1tYbbSHaCdRe6sP9aAy.ovhdSzNrLgoxoOWv49h1{color:var(--error-500)}.o1tYbbSHaCdRe6sP9aAy.cSvvSPCiYsrWx2XyzVcj{color:var(--warning-500)}.o1tYbbSHaCdRe6sP9aAy.KvNsg_3KurJ_ugp5vv4o{color:var(--success-600)}.o1tYbbSHaCdRe6sP9aAy.BWsToXpyVEKej8_qJZpg{white-space:nowrap;text-overflow:ellipsis;padding:2px 0;overflow:hidden}.o1tYbbSHaCdRe6sP9aAy.CSuTcRpT1dYzHD4SR9Bi{font-size:var(--fs-body-2);line-height:var(--lh-body-2)}.o1tYbbSHaCdRe6sP9aAy.AJ5qRsQ5JhQ5dS1aSBjY{font-size:var(--fs-body-1);line-height:var(--lh-body-1)}.o1tYbbSHaCdRe6sP9aAy.iwsc4J9caXUJT1C2PctH{font-size:var(--fs-h6);line-height:var(--lh-h6)}.o1tYbbSHaCdRe6sP9aAy.wwlP3etqAvFOa_VD19Q8{font-size:var(--fs-h5);line-height:var(--lh-h5)}.o1tYbbSHaCdRe6sP9aAy.aMwf4dobkNn9qxHO5Nn0{font-size:var(--fs-h4);line-height:var(--lh-h4)}.o1tYbbSHaCdRe6sP9aAy.KLmLt1DS1WokoJQ35K6w{font-size:var(--fs-h3);line-height:var(--lh-h3)}.o1tYbbSHaCdRe6sP9aAy.vHLYrm9gRBYITia8N8dg{font-size:var(--fs-h2);line-height:var(--lh-h2)}.o1tYbbSHaCdRe6sP9aAy.miR_E7QHgUF8jAvFIlLD{font-size:var(--fs-h1);line-height:var(--lh-h1)}","",{version:3,sources:["webpack://./src/components/typography/Typography.module.scss"],names:[],mappings:"AAKA,sBACE,8BAAA,CAEA,2CACE,6BAAA,CAEF,2CACE,4BAAA,CAEF,2CACE,0BAAA,CAEF,2CACE,0BAAA,CAEF,2CACE,eAAA,CAEF,2CACE,iBAAA,CAEF,2CACE,gBAAA,CAEF,2CACE,kBAAA,CAEF,2CACE,sBAAA,CAEF,2CACE,wBAAA,CAEF,2CACE,wBAAA,CAEF,2CACE,kBAAA,CACA,sBAAA,CACA,aAAA,CACA,eAAA,CAEF,2CA9CA,0BAAA,CACA,4BAAA,CAgDA,2CAjDA,0BAAA,CACA,4BAAA,CAmDA,2CApDA,sBAAA,CACA,wBAAA,CAsDA,2CAvDA,sBAAA,CACA,wBAAA,CAyDA,2CA1DA,sBAAA,CACA,wBAAA,CA4DA,2CA7DA,sBAAA,CACA,wBAAA,CA+DA,2CAhEA,sBAAA,CACA,wBAAA,CAkEA,2CAnEA,sBAAA,CACA,wBAAA",sourcesContent:["@mixin getSize($variant) {\n  font-size: var(--fs-#{$variant});\n  line-height: var(--lh-#{$variant});\n}\n\n.typography {\n  font-family: var(--font-family);\n\n  &.regular {\n    font-weight: var(--fw-regular);\n  }\n  &.medium {\n    font-weight: var(--fw-medium);\n  }\n  &.semiBold {\n    font-weight: var(--fw-semi);\n  }\n  &.bold {\n    font-weight: var(--fw-bold);\n  }\n  &.left {\n    text-align: left;\n  }\n  &.center {\n    text-align: center;\n  }\n  &.right {\n    text-align: right;\n  }\n  &.default {\n    color: var(--black);\n  }\n  &.danger {\n    color: var(--error-500);\n  }\n  &.warning {\n    color: var(--warning-500);\n  }\n  &.success {\n    color: var(--success-600);\n  }\n  &.noWrap {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    padding: 2px 0;\n    overflow: hidden;\n  }\n  &.body2 {\n    @include getSize(body-2);\n  }\n  &.body1 {\n    @include getSize(body-1);\n  }\n  &.h6 {\n    @include getSize(h6);\n  }\n  &.h5 {\n    @include getSize(h5);\n  }\n  &.h4 {\n    @include getSize(h4);\n  }\n  &.h3 {\n    @include getSize(h3);\n  }\n  &.h2 {\n    @include getSize(h2);\n  }\n  &.h1 {\n    @include getSize(h1);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={typography:"o1tYbbSHaCdRe6sP9aAy",regular:"MUL4oyNFTmkEIEwe4hUP",medium:"BtjTBUchxKJubtce0bTc",semiBold:"S8Sfeiujl2ukh5liwf15",bold:"JriDZhSDGhsVmOoaUBjy",left:"ZcLZ0b9T6E6SawJr0m6x",center:"dIRZKtgN_UDIuOsdUm3o",right:"GZNkoMm4g9lsaYiqriBZ",default:"S92iyP3Mfxc7T_PKMAnw",danger:"ovhdSzNrLgoxoOWv49h1",warning:"cSvvSPCiYsrWx2XyzVcj",success:"KvNsg_3KurJ_ugp5vv4o",noWrap:"BWsToXpyVEKej8_qJZpg",body2:"CSuTcRpT1dYzHD4SR9Bi",body1:"AJ5qRsQ5JhQ5dS1aSBjY",h6:"iwsc4J9caXUJT1C2PctH",h5:"wwlP3etqAvFOa_VD19Q8",h4:"aMwf4dobkNn9qxHO5Nn0",h3:"KLmLt1DS1WokoJQ35K6w",h2:"vHLYrm9gRBYITia8N8dg",h1:"miR_E7QHgUF8jAvFIlLD"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/uploader/Uploader.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Vgw78D6lSSLsA2WIuLzp{height:192px;background:var(--grey-200);width:192px;cursor:pointer;border-radius:var(--border-radius-md);overflow:hidden;position:relative}.Vgw78D6lSSLsA2WIuLzp .IfSbXVGuNhWkxbjPaM3j{position:absolute;width:100%;height:100%;object-fit:contain;z-index:var(--ui-index-1)}.Vgw78D6lSSLsA2WIuLzp .I5POCFOjtHixcwDgsiPH{position:absolute;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:14px;opacity:0;z-index:var(--ui-index-2)}.Vgw78D6lSSLsA2WIuLzp .I5POCFOjtHixcwDgsiPH.poZIdzDgNXiE2kK4aRIT{opacity:1}.Vgw78D6lSSLsA2WIuLzp .I5POCFOjtHixcwDgsiPH.muEwkUPhYGrRr3huP9Wj{opacity:1;background:var(--overlay)}.Vgw78D6lSSLsA2WIuLzp .I5POCFOjtHixcwDgsiPH.muEwkUPhYGrRr3huP9Wj>*{color:var(--white)}.Vgw78D6lSSLsA2WIuLzp .I5POCFOjtHixcwDgsiPH svg{color:var(--grey-400);width:42px;height:42px}","",{version:3,sources:["webpack://./src/components/uploader/Uploader.module.scss"],names:[],mappings:"AAAA,sBAME,YAAA,CACA,0BAAA,CACA,WAAA,CACA,cAAA,CACA,qCAAA,CACA,eAAA,CAEA,iBAAA,CAEA,4CACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,kBAAA,CACA,yBAAA,CAGF,4CACE,iBAAA,CACA,UAAA,CACA,WAAA,CAEA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,QAAA,CAEA,SAAA,CACA,yBAAA,CAEA,iEACE,SAAA,CAGF,iEACE,SAAA,CACA,yBAAA,CAEA,mEACE,kBAAA,CAIJ,gDACE,qBAAA,CACA,UAAA,CACA,WAAA",sourcesContent:[".uploader {\n  //display: flex;\n  //flex-direction: column;\n  //justify-content: center;\n  //align-items: center;\n\n  height: 192px;\n  background: var(--grey-200);\n  width: 192px;\n  cursor: pointer;\n  border-radius: var(--border-radius-md);\n  overflow: hidden;\n\n  position: relative;\n\n  .image {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    z-index: var(--ui-index-1);\n  }\n\n  .description {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 14px;\n\n    opacity: 0;\n    z-index: var(--ui-index-2);\n\n    &.show {\n      opacity: 1;\n    }\n\n    &.hover {\n      opacity: 1;\n      background: var(--overlay);\n\n      & > * {\n        color: var(--white);\n      }\n    }\n\n    svg {\n      color: var(--grey-400);\n      width: 42px;\n      height: 42px;\n    }\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={uploader:"Vgw78D6lSSLsA2WIuLzp",image:"IfSbXVGuNhWkxbjPaM3j",description:"I5POCFOjtHixcwDgsiPH",show:"poZIdzDgNXiE2kK4aRIT",hover:"muEwkUPhYGrRr3huP9Wj"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/typography/Typography.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),classNames_utils=__webpack_require__("./src/shared/utils/classNames/classNames.utils.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Typography_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/typography/Typography.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Typography_module.Z,options);let typography_Typography_module=Typography_module.Z&&Typography_module.Z.locals?Typography_module.Z.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var mapSizeToTag={body1:"p",body2:"span",h6:"h6",h5:"h5",h4:"h4",h3:"h3",h2:"h2",h1:"h1"},Typography=function(props){var _props_color=props.color,_props_align=props.align,_props_variant=props.variant,variant=void 0===_props_variant?"body1":_props_variant,_props_fontWeight=props.fontWeight,_props_noWrap=props.noWrap,className=props.className,children=props.children,mods=_define_property({},typography_Typography_module.noWrap,void 0!==_props_noWrap&&_props_noWrap),additional=[typography_Typography_module[void 0===_props_color?"default":_props_color],typography_Typography_module[void 0===_props_fontWeight?"regular":_props_fontWeight],typography_Typography_module[void 0===_props_align?"left":_props_align],typography_Typography_module[variant],className],HeaderTag=mapSizeToTag[variant];return(0,jsx_runtime.jsx)(HeaderTag,{className:(0,classNames_utils.A)(typography_Typography_module.typography,mods,additional),children:children})};try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"default"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'}]}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"regular"'},{value:'"medium"'},{value:'"semiBold"'}]}},noWrap:{defaultValue:null,description:"",name:"noWrap",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Typography.component.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/components/typography/Typography.component.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/typography/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_Typography_component__WEBPACK_IMPORTED_MODULE_0__.Z});var _Typography_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/typography/Typography.component.tsx")},"./src/shared/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>useHover,dd:()=>useModal});var react=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function useModal(param){var _param_animationDelay=param.animationDelay,animationDelay=void 0===_param_animationDelay?0:_param_animationDelay,isOpen=param.isOpen,onClose=param.onClose,_useState=_sliced_to_array((0,react.useState)(!1),2),isClosing=_useState[0],setIsClosing=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),isMounted=_useState1[0],setIsMounted=_useState1[1],timerRef=(0,react.useRef)();(0,react.useEffect)(function(){isOpen&&setIsMounted(!0)},[isOpen]);var close=(0,react.useCallback)(function(){onClose&&(setIsClosing(!0),timerRef.current=setTimeout(function(){onClose(),setIsClosing(!1),setIsMounted(!1)},animationDelay))},[animationDelay,onClose]),onKeyDown=(0,react.useCallback)(function(e){"Escape"===e.key&&close()},[close]);return(0,react.useEffect)(function(){return isOpen&&window.addEventListener("keydown",onKeyDown),function(){clearTimeout(timerRef.current),window.removeEventListener("keydown",onKeyDown)}},[isOpen,onKeyDown]),{isClosing:isClosing,isMounted:isMounted,close:close}}function useEventListener(eventType,callback){var element=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,callbackRef=(0,react.useRef)(callback);(0,react.useEffect)(function(){callbackRef.current=callback},[callback]),(0,react.useEffect)(function(){if(null!=element){var handler=function(e){return callbackRef.current(e)};return element.addEventListener(eventType,handler),function(){return element.removeEventListener(eventType,handler)}}},[eventType,element])}function useHover_hook_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function useHover_hook_array_with_holes(arr){if(Array.isArray(arr))return arr}function useHover_hook_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function useHover_hook_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function useHover_hook_sliced_to_array(arr,i){return useHover_hook_array_with_holes(arr)||useHover_hook_iterable_to_array_limit(arr,i)||useHover_hook_unsupported_iterable_to_array(arr,i)||useHover_hook_non_iterable_rest()}function useHover_hook_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return useHover_hook_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useHover_hook_array_like_to_array(o,minLen)}}function useHover(elementRef){var _useState=useHover_hook_sliced_to_array((0,react.useState)(!1),2),value=_useState[0],setValue=_useState[1];return useEventListener("mouseenter",function(){setValue(!0)},elementRef.current),useEventListener("mouseleave",function(){setValue(!1)},elementRef.current),value}}}]);