"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[8086],{"./node_modules/@mui/joy/Container/Container.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Container_Container});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/system/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@mui/system/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useThemeProps=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/system/esm/styled.js"),createTheme=__webpack_require__("./node_modules/@mui/system/esm/createTheme/createTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","disableGutters","fixed","maxWidth","classes"],defaultTheme=(0,createTheme.Z)(),defaultCreateStyledComponent=(0,styled.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`maxWidth${(0,capitalize.Z)(String(ownerState.maxWidth))}`],ownerState.fixed&&styles.fixed,ownerState.disableGutters&&styles.disableGutters]}}),useThemePropsDefault=inProps=>(0,useThemeProps.Z)({props:inProps,name:"MuiContainer",defaultTheme});var styles_styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),styles_useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js");const Container=function createContainer(options={}){const{createStyledComponent=defaultCreateStyledComponent,useThemeProps=useThemePropsDefault,componentName="MuiContainer"}=options,ContainerRoot=createStyledComponent((({theme,ownerState})=>(0,esm_extends.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!ownerState.disableGutters&&{paddingLeft:theme.spacing(2),paddingRight:theme.spacing(2),[theme.breakpoints.up("sm")]:{paddingLeft:theme.spacing(3),paddingRight:theme.spacing(3)}})),(({theme,ownerState})=>ownerState.fixed&&Object.keys(theme.breakpoints.values).reduce(((acc,breakpointValueKey)=>{const breakpoint=breakpointValueKey,value=theme.breakpoints.values[breakpoint];return 0!==value&&(acc[theme.breakpoints.up(breakpoint)]={maxWidth:`${value}${theme.breakpoints.unit}`}),acc}),{})),(({theme,ownerState})=>(0,esm_extends.Z)({},"xs"===ownerState.maxWidth&&{[theme.breakpoints.up("xs")]:{maxWidth:Math.max(theme.breakpoints.values.xs,444)}},ownerState.maxWidth&&"xs"!==ownerState.maxWidth&&{[theme.breakpoints.up(ownerState.maxWidth)]:{maxWidth:`${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`}}))),Container=react.forwardRef((function Container(inProps,ref){const props=useThemeProps(inProps),{className,component="div",disableGutters=!1,fixed=!1,maxWidth="lg"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{component,disableGutters,fixed,maxWidth}),classes=((ownerState,componentName)=>{const{classes,fixed,disableGutters,maxWidth}=ownerState,slots={root:["root",maxWidth&&`maxWidth${(0,capitalize.Z)(String(maxWidth))}`,fixed&&"fixed",disableGutters&&"disableGutters"]};return(0,composeClasses.Z)(slots,(slot=>(0,generateUtilityClass.Z)(componentName,slot)),classes)})(ownerState,componentName);return(0,jsx_runtime.jsx)(ContainerRoot,(0,esm_extends.Z)({as:component,ownerState,className:(0,clsx.Z)(classes.root,className),ref},other))}));return Container}({createStyledComponent:(0,styles_styled.Z)("div",{name:"JoyContainer",slot:"Root",overridesResolver:(props,styles)=>styles.root}),useThemeProps:inProps=>(0,styles_useThemeProps.Z)({props:inProps,name:"JoyContainer"})}),Container_Container=Container},"./node_modules/@mui/system/esm/styled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@mui/system/esm/createStyled.js").ZP)()},"./blocks/landing-main-benefit/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LandingMainBenefitraw_namespaceObject='import React from "react";\nimport Box from "@mui/joy/Box";\nimport Container from "@mui/joy/Container";\nimport Divider from "@mui/joy/Divider";\nimport SvgIcon from "@mui/joy/SvgIcon";\nimport Typography from "@mui/joy/Typography";\n\nfunction randomString(length: number) {\n  let result = "";\n  let characters =\n    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";\n  let charactersLength = characters.length;\n  for (let i = 0; i < length; i++)\n    result += characters.charAt(Math.floor(Math.random() * charactersLength));\n  return result;\n}\n\nfunction useCharReplace(text: string) {\n  const [index, setIndex] = React.useState(1);\n  const [randomText, setRandomText] = React.useState(\n    randomString(text.length - 1)\n  );\n  const indexRef = React.useRef(index);\n\n  React.useEffect(() => {\n    setIndex(1);\n    setRandomText(randomString(text.length - 1));\n    indexRef.current = 1;\n    const interval = window.setInterval(() => {\n      indexRef.current += 1;\n      if (indexRef.current === text.length + 1) {\n        clearInterval(interval);\n      } else {\n        setIndex(indexRef.current);\n        setRandomText(randomString(text.length - indexRef.current));\n      }\n    }, 50);\n    return () => {\n      clearInterval(interval);\n    };\n  }, [text]);\n\n  return [text.slice(0, index), randomText];\n}\n\nfunction useTextDecryption(texts: Array<string>, interval: number = 3000) {\n  const [dataIndex, setDataIndex] = React.useState(0);\n  const [text, randomText] = useCharReplace(texts[dataIndex]);\n  React.useEffect(() => {\n    setTimeout(() => {\n      setDataIndex((dataIndex) => (dataIndex + 1) % texts.length);\n    }, interval);\n  }, [dataIndex, interval]);\n  return [text, randomText];\n}\n\nexport default function LandingMainBenefit() {\n  // TODO: Replace with your data\n  const data = [\n    "encrypt access tokens",\n    "share encrypted data",\n    "encrypt credit cards",\n  ];\n  const [text, randomText] = useTextDecryption(data);\n  return (\n    <Container\n      sx={{\n        py: {\n          xs: "3.2rem",\n          md: "8rem",\n        },\n      }}\n    >\n      <Box sx={{ px: "1rem" }}>\n        <Typography\n          level="h2"\n          fontSize="clamp(1.60rem, calc(0.87rem + 2.92vw), 3.50rem)"\n          fontWeight="md"\n          lineHeight="1.2"\n          sx={{\n            mb: "2rem",\n            background:\n              "radial-gradient(45% 100% at 50% 50%, var(--joy-palette-text-primary) 64%, rgba(var(--joy-palette-neutral-mainChannel) / .45) 100%)",\n            WebkitTextFillColor: "transparent",\n            WebkitBackgroundClip: "text",\n            overflow: "hidden",\n            whiteSpace: "nowrap",\n          }}\n        >\n          Use Evervault to <br />\n          {text}\n          <Typography\n            sx={{\n              background:\n                "radial-gradient(45% 100% at 50% 50%, var(--joy-palette-text-primary) 64%, rgba(var(--joy-palette-neutral-mainChannel) / .45) 100%)",\n              WebkitTextFillColor: "transparent",\n              WebkitBackgroundClip: "text",\n              opacity: 0.25,\n            }}\n          >\n            {randomText}\n          </Typography>\n        </Typography>\n        <Divider sx={{ mt: "1.2rem", mb: "2.4rem" }} />\n        <Box\n          sx={{\n            display: "flex",\n            flexWrap: "wrap",\n            gap: "3.2rem",\n            mb: {\n              xs: "2rem",\n              md: 0,\n            },\n            "& > *": {\n              minWidth: "clamp(0px, (700px - 100%) * 999, 100%)",\n              flex: 1,\n            },\n          }}\n        >\n          <Box>\n            <Typography\n              level="title-md"\n              sx={{ mb: 0.5, alignItems: "flex-start" }}\n              startDecorator={\n                <SvgIcon>\n                  <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    width="24"\n                    height="24"\n                    viewBox="0 0 24 24"\n                    fill="none"\n                    stroke="currentColor"\n                    stroke-width="2"\n                    stroke-linecap="round"\n                    stroke-linejoin="round"\n                  >\n                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />\n                    <path d="m9 12 2 2 4-4" />\n                  </svg>\n                </SvgIcon>\n              }\n            >\n              Eliminate Data Breach Risk\n            </Typography>\n            <Typography level="body-sm">\n              Encrypting sensitive data before it touches your infrastructure\n              means you never handle sensitive data in plaintext, so when you\n              get breached you don’t need to worry about the consequences.\n            </Typography>\n          </Box>\n          <Box>\n            <Typography\n              level="title-md"\n              sx={{ mb: 0.5, alignItems: "flex-start" }}\n              startDecorator={\n                <SvgIcon>\n                  <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    width="24"\n                    height="24"\n                    viewBox="0 0 24 24"\n                    fill="none"\n                    stroke="currentColor"\n                    stroke-width="2"\n                    stroke-linecap="round"\n                    stroke-linejoin="round"\n                  >\n                    <line x1="10" x2="14" y1="2" y2="2" />\n                    <line x1="12" x2="15" y1="14" y2="11" />\n                    <circle cx="12" cy="14" r="8" />\n                  </svg>\n                </SvgIcon>\n              }\n            >\n              Streamline Compliance\n            </Typography>\n            <Typography level="body-sm">\n              By encrypting in-scope data, Evervault reduces the financial cost\n              and overhead of becoming compliant. Evervault is fully compliant\n              with frameworks like PCI DSS Level 1, HIPAA and SOC 2.\n            </Typography>\n          </Box>\n          <Box>\n            <Typography\n              level="title-md"\n              sx={{ mb: 0.5, alignItems: "flex-start" }}\n              startDecorator={\n                <SvgIcon>\n                  <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    width="24"\n                    height="24"\n                    viewBox="0 0 24 24"\n                    fill="none"\n                    stroke="currentColor"\n                    stroke-width="2"\n                    stroke-linecap="round"\n                    stroke-linejoin="round"\n                  >\n                    <path d="M22 20V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h6" />\n                    <circle cx="16" cy="19" r="2" />\n                    <path d="M16 11v-1" />\n                    <path d="M16 17v-2" />\n                  </svg>\n                </SvgIcon>\n              }\n            >\n              Sign Customers Faster\n            </Typography>\n            <Typography level="body-sm">\n              Using Evervault proves to your customers that you take data\n              security seriously. You’ll pass vendor security reviews quickly\n              and close deals with the most security-conscious customers.\n            </Typography>\n          </Box>\n        </Box>\n      </Box>\n    </Container>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Landing/Main/Benefit"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone landing-main-benefit\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"landingmainbenefit",children:"LandingMainBenefit"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LandingMainBenefitraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Modal/Modal.js"),_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/joy/ModalClose/ModalClose.js"),_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/ModalDialog/ModalDialog.js"),_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/Tooltip/Tooltip.js"),_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{size:"sm",title:"Show source code",placement:"top-start",sx:{zIndex:1e5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__.ZP,{variant:"soft",sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__.Z,{open,onClose:()=>setOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__.ZP,{level:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__.Z,{sx:{overflow:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_12__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_13__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})})]})}}},"./blocks/landing-main-benefit/src/LandingMainBenefit.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Benefit:()=>Benefit,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LandingMainBenefit_stories});var react=__webpack_require__("./node_modules/react/index.js"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/landing-main-benefit/usage.mdx"),Box=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),Container=__webpack_require__("./node_modules/@mui/joy/Container/Container.js"),Divider=__webpack_require__("./node_modules/@mui/joy/Divider/Divider.js"),SvgIcon=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function randomString(length){let result="",characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let i=0;i<length;i++)result+=characters.charAt(Math.floor(62*Math.random()));return result}function useTextDecryption(texts,interval=3e3){const[dataIndex,setDataIndex]=react.useState(0),[text,randomText]=function useCharReplace(text){const[index,setIndex]=react.useState(1),[randomText,setRandomText]=react.useState(randomString(text.length-1)),indexRef=react.useRef(index);return react.useEffect((()=>{setIndex(1),setRandomText(randomString(text.length-1)),indexRef.current=1;const interval=window.setInterval((()=>{indexRef.current+=1,indexRef.current===text.length+1?clearInterval(interval):(setIndex(indexRef.current),setRandomText(randomString(text.length-indexRef.current)))}),50);return()=>{clearInterval(interval)}}),[text]),[text.slice(0,index),randomText]}(texts[dataIndex]);return react.useEffect((()=>{setTimeout((()=>{setDataIndex((dataIndex=>(dataIndex+1)%texts.length))}),interval)}),[dataIndex,interval]),[text,randomText]}function LandingMainBenefit(){const[text,randomText]=useTextDecryption(["encrypt access tokens","share encrypted data","encrypt credit cards"]);return(0,jsx_runtime.jsx)(Container.Z,{sx:{py:{xs:"3.2rem",md:"8rem"}},children:(0,jsx_runtime.jsxs)(Box.Z,{sx:{px:"1rem"},children:[(0,jsx_runtime.jsxs)(Typography.ZP,{level:"h2",fontSize:"clamp(1.60rem, calc(0.87rem + 2.92vw), 3.50rem)",fontWeight:"md",lineHeight:"1.2",sx:{mb:"2rem",background:"radial-gradient(45% 100% at 50% 50%, var(--joy-palette-text-primary) 64%, rgba(var(--joy-palette-neutral-mainChannel) / .45) 100%)",WebkitTextFillColor:"transparent",WebkitBackgroundClip:"text",overflow:"hidden",whiteSpace:"nowrap"},children:["Use Evervault to ",(0,jsx_runtime.jsx)("br",{}),text,(0,jsx_runtime.jsx)(Typography.ZP,{sx:{background:"radial-gradient(45% 100% at 50% 50%, var(--joy-palette-text-primary) 64%, rgba(var(--joy-palette-neutral-mainChannel) / .45) 100%)",WebkitTextFillColor:"transparent",WebkitBackgroundClip:"text",opacity:.25},children:randomText})]}),(0,jsx_runtime.jsx)(Divider.Z,{sx:{mt:"1.2rem",mb:"2.4rem"}}),(0,jsx_runtime.jsxs)(Box.Z,{sx:{display:"flex",flexWrap:"wrap",gap:"3.2rem",mb:{xs:"2rem",md:0},"& > *":{minWidth:"clamp(0px, (700px - 100%) * 999, 100%)",flex:1}},children:[(0,jsx_runtime.jsxs)(Box.Z,{children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-md",sx:{mb:.5,alignItems:"flex-start"},startDecorator:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,jsx_runtime.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),(0,jsx_runtime.jsx)("path",{d:"m9 12 2 2 4-4"})]})}),children:"Eliminate Data Breach Risk"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",children:"Encrypting sensitive data before it touches your infrastructure means you never handle sensitive data in plaintext, so when you get breached you don’t need to worry about the consequences."})]}),(0,jsx_runtime.jsxs)(Box.Z,{children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-md",sx:{mb:.5,alignItems:"flex-start"},startDecorator:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,jsx_runtime.jsx)("line",{x1:"10",x2:"14",y1:"2",y2:"2"}),(0,jsx_runtime.jsx)("line",{x1:"12",x2:"15",y1:"14",y2:"11"}),(0,jsx_runtime.jsx)("circle",{cx:"12",cy:"14",r:"8"})]})}),children:"Streamline Compliance"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",children:"By encrypting in-scope data, Evervault reduces the financial cost and overhead of becoming compliant. Evervault is fully compliant with frameworks like PCI DSS Level 1, HIPAA and SOC 2."})]}),(0,jsx_runtime.jsxs)(Box.Z,{children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-md",sx:{mb:.5,alignItems:"flex-start"},startDecorator:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,jsx_runtime.jsx)("path",{d:"M22 20V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h6"}),(0,jsx_runtime.jsx)("circle",{cx:"16",cy:"19",r:"2"}),(0,jsx_runtime.jsx)("path",{d:"M16 11v-1"}),(0,jsx_runtime.jsx)("path",{d:"M16 17v-2"})]})}),children:"Sign Customers Faster"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",children:"Using Evervault proves to your customers that you take data security seriously. You’ll pass vendor security reviews quickly and close deals with the most security-conscious customers."})]})]})]})})}LandingMainBenefit.displayName="LandingMainBenefit";const LandingMainBenefit_stories={title:"Landing/Main/Benefit",component:LandingMainBenefit,parameters:{layout:"fullscreen"},decorators:[(0,storyDialog.Z)(usage.default)]},Benefit={render:()=>(0,jsx_runtime.jsx)(LandingMainBenefit,{})};Benefit.parameters={...Benefit.parameters,docs:{...Benefit.parameters?.docs,source:{originalSource:"{\n  render: () => <LandingMainBenefit />\n}",...Benefit.parameters?.docs?.source}}};const __namedExportsOrder=["Benefit"]}}]);