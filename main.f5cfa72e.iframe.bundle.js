(self.webpackChunkginger_ui_kit=self.webpackChunkginger_ui_kit||[]).push([[377],{"./node_modules/@storybook/addon-interactions/dist sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/addon-interactions/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");let pipeline=x=>x(),importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;let pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];async function importFn(path){for(let i=0;i<importers.length;i++){let moduleExports=await pipeline(()=>importers[i](path));if(moduleExports)return moduleExports}}let channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);let preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:importFn,getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.js"),__webpack_require__("./.storybook/preview.ts")])})},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/global.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,':root{--black: #000;--white: #fff;--grey-100: #f2f4f7;--grey-200: #eaecf0;--grey-300: #d0d5dd;--grey-400: #98a2b3;--grey-500: #667085;--grey-600: #475467;--grey-700: #344054;--grey-800: #1d2939;--grey-900: #101828;--brand-100: #f4ebff;--brand-200: #e9d7fe;--brand-300: #ceadff;--brand-400: #b692f6;--brand-500: #9e77ed;--brand-600: #7f56d9;--brand-700: #6941c6;--brand-800: #53389e;--brand-900: #42307d;--error-100: #fee4e2;--error-200: #fecdca;--error-300: #fda29b;--error-400: #f97066;--error-500: #f04438;--error-600: #d92d20;--error-700: #b42318;--error-800: #912018;--error-900: #7a271a;--warning-100: #fef0c7;--warning-200: #fedf89;--warning-300: #fec84b;--warning-400: #fdb022;--warning-500: #f79009;--warning-600: #dc6803;--warning-700: #b54708;--warning-800: #93370d;--warning-900: #7a2e0e;--success-100: #d1fadf;--success-200: #a6f4c5;--success-300: #6ce9a6;--success-400: #32d583;--success-500: #12b76a;--success-600: #039855;--success-700: #027a48;--success-800: #05603a;--success-900: #054f31;--skeleton-bg: #d8d8d9;--skeleton-foreground: #e2e2e2;--overlay: rgba(0, 0, 0, 0.5);--ui-index--1: -1;--ui-index-1: 1;--ui-index-2: 2;--ui-index-3: 3;--ui-index-4: 4;--ui-index-5: 5;--transition: 0.35s;--font-family: "Inter";--fw-regular: 400;--fw-medium: 500;--fw-semi: 600;--fw-bold: 700;--fs-body-2: 12px;--lh-body-2: 18px;--fs-body-1: 14px;--lh-body-1: 20px;--fs-h6: 16px;--lh-h6: 24px;--fs-h5: 18px;--lh-h5: 28px;--fs-h4: 20px;--lh-h4: 30px;--fs-h3: 24px;--lh-h3: 32px;--fs-h2: 30px;--lh-h2: 38px;--fs-h1: 36px;--lh-h1: 44px;--border-radius-xs: 5px;--border-radius-sm: 8px;--border-radius-md: 12px;--border-radius-lg: 14px;--border-circul: 50%;--blur: 5px}*{padding:0;margin:0;border:0;font-family:var(--font-family)}*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}:focus,:active{outline:none}a:focus,a:active{outline:none}nav,footer,header,aside{display:block}html,body{line-height:1;font-size:var(--fs-body-1);color:var(--grey-900);-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%}input,button,textarea{font-family:inherit}input::-ms-clear{display:none}button{cursor:pointer}button::-moz-focus-inner{padding:0;border:0}a,a:visited{text-decoration:none;color:inherit;cursor:pointer}a:hover{text-decoration:none}ul li{list-style:none}img{vertical-align:top}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:400}',"",{version:3,sources:["webpack://./src/assets/styles/variables/index.scss","webpack://./src/assets/styles/variables/_colors.scss","webpack://./src/assets/styles/variables/_z-index.scss","webpack://./src/assets/styles/variables/_animation.scss","webpack://./src/assets/styles/variables/_typography.scss","webpack://./src/assets/styles/variables/_sizes.scss","webpack://./src/assets/styles/_normalize.scss"],names:[],mappings:"AAMA,MCLE,aAAA,CACA,aAAA,CAEA,mBAAA,CACA,mBAAA,CACA,mBAAA,CACA,mBAAA,CACA,mBAAA,CACA,mBAAA,CACA,mBAAA,CACA,mBAAA,CACA,mBAAA,CAEA,oBAAA,CACA,oBAAA,CACA,oBAAA,CACA,oBAAA,CACA,oBAAA,CACA,oBAAA,CACA,oBAAA,CACA,oBAAA,CACA,oBAAA,CAEA,oBAAA,CACA,oBAAA,CACA,oBAAA,CACA,oBAAA,CACA,oBAAA,CACA,oBAAA,CACA,oBAAA,CACA,oBAAA,CACA,oBAAA,CAEA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,sBAAA,CAEA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,sBAAA,CAEA,sBAAA,CACA,8BAAA,CACA,6BAAA,CCvDA,iBAAA,CACA,eAAA,CACA,eAAA,CACA,eAAA,CACA,eAAA,CACA,eAAA,CCLA,mBAAA,CCCA,sBAAA,CAEA,iBAAA,CACA,gBAAA,CACA,cAAA,CACA,cAAA,CAEA,iBAAA,CACA,iBAAA,CAEA,iBAAA,CACA,iBAAA,CAEA,aAAA,CACA,aAAA,CAEA,aAAA,CACA,aAAA,CAEA,aAAA,CACA,aAAA,CAEA,aAAA,CACA,aAAA,CAEA,aAAA,CACA,aAAA,CAEA,aAAA,CACA,aAAA,CC9BA,uBAAA,CACA,uBAAA,CACA,wBAAA,CACA,wBAAA,CACA,oBAAA,CAEA,WAAA,CCPF,EACE,SAAA,CACA,QAAA,CACA,QAAA,CACA,8BAAA,CAGF,mBAGE,0BAAA,CACA,6BAAA,CACA,qBAAA,CAEF,eAEE,YAAA,CAEF,iBAEE,YAAA,CAGF,wBAIE,aAAA,CAGF,UAEE,aAAA,CACA,0BAAA,CACA,qBAAA,CACA,yBAAA,CACA,0BAAA,CACA,6BAAA,CAGF,sBAGE,mBAAA,CAGF,iBACE,YAAA,CAGF,OACE,cAAA,CAGF,yBACE,SAAA,CACA,QAAA,CAGF,YAEE,oBAAA,CACA,aAAA,CACA,cAAA,CAGF,QACE,oBAAA,CAGF,MACE,eAAA,CAGF,IACE,kBAAA,CAGF,kBAME,iBAAA,CACA,eAAA",sourcesContent:["@use './colors';\n@use './z-index';\n@use './animation';\n@use './typography';\n@use './sizes';\n\n:root {\n  @include colors.colors;\n  @include z-index.zIndex;\n  @include animation.transition;\n  @include typography.typography;\n  @include sizes.sizes;\n}\n","@mixin colors {\n  --black: #000;\n  --white: #fff;\n\n  --grey-100: #f2f4f7;\n  --grey-200: #eaecf0;\n  --grey-300: #d0d5dd;\n  --grey-400: #98a2b3;\n  --grey-500: #667085;\n  --grey-600: #475467;\n  --grey-700: #344054;\n  --grey-800: #1d2939;\n  --grey-900: #101828;\n\n  --brand-100: #f4ebff;\n  --brand-200: #e9d7fe;\n  --brand-300: #ceadff;\n  --brand-400: #b692f6;\n  --brand-500: #9e77ed;\n  --brand-600: #7f56d9;\n  --brand-700: #6941c6;\n  --brand-800: #53389e;\n  --brand-900: #42307d;\n\n  --error-100: #fee4e2;\n  --error-200: #fecdca;\n  --error-300: #fda29b;\n  --error-400: #f97066;\n  --error-500: #f04438;\n  --error-600: #d92d20;\n  --error-700: #b42318;\n  --error-800: #912018;\n  --error-900: #7a271a;\n\n  --warning-100: #fef0c7;\n  --warning-200: #fedf89;\n  --warning-300: #fec84b;\n  --warning-400: #fdb022;\n  --warning-500: #f79009;\n  --warning-600: #dc6803;\n  --warning-700: #b54708;\n  --warning-800: #93370d;\n  --warning-900: #7a2e0e;\n\n  --success-100: #d1fadf;\n  --success-200: #a6f4c5;\n  --success-300: #6ce9a6;\n  --success-400: #32d583;\n  --success-500: #12b76a;\n  --success-600: #039855;\n  --success-700: #027a48;\n  --success-800: #05603a;\n  --success-900: #054f31;\n\n  --skeleton-bg: #d8d8d9;\n  --skeleton-foreground: #e2e2e2;\n  --overlay: rgba(0, 0, 0, 0.5);\n}\n","@mixin zIndex {\n  --ui-index--1: -1;\n  --ui-index-1: 1;\n  --ui-index-2: 2;\n  --ui-index-3: 3;\n  --ui-index-4: 4;\n  --ui-index-5: 5;\n}\n","@mixin transition {\n  --transition: 0.35s;\n}\n","@mixin typography {\n  //TODO: add default font\n  --font-family: 'Inter';\n\n  --fw-regular: 400;\n  --fw-medium: 500;\n  --fw-semi: 600;\n  --fw-bold: 700;\n\n  --fs-body-2: 12px;\n  --lh-body-2: 18px;\n\n  --fs-body-1: 14px;\n  --lh-body-1: 20px;\n\n  --fs-h6: 16px;\n  --lh-h6: 24px;\n\n  --fs-h5: 18px;\n  --lh-h5: 28px;\n\n  --fs-h4: 20px;\n  --lh-h4: 30px;\n\n  --fs-h3: 24px;\n  --lh-h3: 32px;\n\n  --fs-h2: 30px;\n  --lh-h2: 38px;\n\n  --fs-h1: 36px;\n  --lh-h1: 44px;\n}\n","@mixin sizes {\n  --border-radius-xs: 5px;\n  --border-radius-sm: 8px;\n  --border-radius-md: 12px;\n  --border-radius-lg: 14px;\n  --border-circul: 50%;\n\n  --blur: 5px;\n}\n","* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  font-family: var(--font-family);\n}\n\n*,\n*:before,\n*:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n:focus,\n:active {\n  outline: none;\n}\na:focus,\na:active {\n  outline: none;\n}\n\nnav,\nfooter,\nheader,\naside {\n  display: block;\n}\n\nhtml,\nbody {\n  line-height: 1;\n  font-size: var(--fs-body-1);\n  color: var(--grey-900);\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\ninput,\nbutton,\ntextarea {\n  font-family: inherit;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\na,\na:visited {\n  text-decoration: none;\n  color: inherit;\n  cursor: pointer;\n}\n\na:hover {\n  text-decoration: none;\n}\n\nul li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: 400;\n}\n"],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),global=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/global.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(global.Z,options),global.Z&&global.Z.locals&&global.Z.locals;let _storybook_preview={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}}},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/accordion/Accordion.stories":["./src/components/accordion/Accordion.stories.tsx",538,437],"./components/accordion/Accordion.stories.tsx":["./src/components/accordion/Accordion.stories.tsx",538,437],"./components/badge/Badge.stories":["./src/components/badge/Badge.stories.tsx",538,339],"./components/badge/Badge.stories.tsx":["./src/components/badge/Badge.stories.tsx",538,339],"./components/button/Button.stories":["./src/components/button/Button.stories.tsx",538,389],"./components/button/Button.stories.tsx":["./src/components/button/Button.stories.tsx",538,389],"./components/checkbox/Checkbox.stories":["./src/components/checkbox/Checkbox.stories.tsx",511],"./components/checkbox/Checkbox.stories.tsx":["./src/components/checkbox/Checkbox.stories.tsx",511],"./components/divider/Divider.stories":["./src/components/divider/Divider.stories.tsx",538,323],"./components/divider/Divider.stories.tsx":["./src/components/divider/Divider.stories.tsx",538,323],"./components/drawer/Drawer.stories":["./src/components/drawer/Drawer.stories.tsx",986,528],"./components/drawer/Drawer.stories.tsx":["./src/components/drawer/Drawer.stories.tsx",986,528],"./components/image/Image.stories":["./src/components/image/Image.stories.tsx",857],"./components/image/Image.stories.tsx":["./src/components/image/Image.stories.tsx",857],"./components/modal/Modal.stories":["./src/components/modal/Modal.stories.tsx",986,707],"./components/modal/Modal.stories.tsx":["./src/components/modal/Modal.stories.tsx",986,707],"./components/overlay/Overlay.stories":["./src/components/overlay/Overlay.stories.tsx",565],"./components/overlay/Overlay.stories.tsx":["./src/components/overlay/Overlay.stories.tsx",565],"./components/radio-button/RadioButton.stories":["./src/components/radio-button/RadioButton.stories.tsx",396],"./components/radio-button/RadioButton.stories.tsx":["./src/components/radio-button/RadioButton.stories.tsx",396],"./components/skeleton/Skeleton.stories":["./src/components/skeleton/Skeleton.stories.tsx",135],"./components/skeleton/Skeleton.stories.tsx":["./src/components/skeleton/Skeleton.stories.tsx",135],"./components/slider/Slider.stories":["./src/components/slider/Slider.stories.tsx",469],"./components/slider/Slider.stories.tsx":["./src/components/slider/Slider.stories.tsx",469],"./components/spinner/Spinner.stories":["./src/components/spinner/Spinner.stories.tsx",879],"./components/spinner/Spinner.stories.tsx":["./src/components/spinner/Spinner.stories.tsx",879],"./components/stepper/Stepper.stories":["./src/components/stepper/Stepper.stories.tsx",538,142],"./components/stepper/Stepper.stories.tsx":["./src/components/stepper/Stepper.stories.tsx",538,142],"./components/tabs/Tabs.stories":["./src/components/tabs/Tabs.stories.tsx",931],"./components/tabs/Tabs.stories.tsx":["./src/components/tabs/Tabs.stories.tsx",931],"./components/text-aria/TextArea.stories":["./src/components/text-aria/TextArea.stories.tsx",179],"./components/text-aria/TextArea.stories.tsx":["./src/components/text-aria/TextArea.stories.tsx",179],"./components/text-field/TextField.stories":["./src/components/text-field/TextField.stories.tsx",99],"./components/text-field/TextField.stories.tsx":["./src/components/text-field/TextField.stories.tsx",99],"./components/typography/Typography.stories":["./src/components/typography/Typography.stories.tsx",460],"./components/typography/Typography.stories.tsx":["./src/components/typography/Typography.stories.tsx",460],"./components/uploader/Uploader.stories":["./src/components/uploader/Uploader.stories.tsx",538,52],"./components/uploader/Uploader.stories.tsx":["./src/components/uploader/Uploader.stories.tsx",538,52]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then(()=>{var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e});var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(()=>__webpack_require__(id))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[137],()=>__webpack_exec__("./storybook-config-entry.js")),__webpack_require__.O()}]);