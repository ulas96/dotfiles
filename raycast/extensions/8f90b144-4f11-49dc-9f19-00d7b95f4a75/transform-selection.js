"use strict";var F=Object.create;var P=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var U=Object.getOwnPropertyNames;var z=Object.getPrototypeOf,q=Object.prototype.hasOwnProperty;var j=(t,i)=>{for(var n in i)P(t,n,{get:i[n],enumerable:!0})},J=(t,i,n,r)=>{if(i&&typeof i=="object"||typeof i=="function")for(let l of U(i))!q.call(t,l)&&l!==n&&P(t,l,{get:()=>i[l],enumerable:!(r=G(i,l))||r.enumerable});return t};var S=(t,i,n)=>(n=t!=null?F(z(t)):{},J(i||!t||!t.__esModule?P(n,"default",{value:t,enumerable:!0}):n,t)),W=t=>J(P({},"__esModule",{value:!0}),t);var te={};j(te,{default:()=>H});module.exports=W(te);var e=require("@raycast/api"),p=require("react");var _=require("child_process"),M=require("util"),O=require("@raycast/api"),R=S(require("path")),w=S(require("fs")),b=S(require("os")),Q=(0,M.promisify)(_.exec);async function D(){let t=(0,O.getPreferenceValues)();if(t.claudeCodePath)try{return await w.default.promises.access(t.claudeCodePath,w.default.constants.X_OK),t.claudeCodePath}catch{}let i=["/opt/homebrew/bin/claude","/usr/local/bin/claude",R.default.join(b.default.homedir(),".npm-global/bin/claude"),R.default.join(b.default.homedir(),".local/bin/claude")];for(let n of i)try{return await w.default.promises.access(n,w.default.constants.X_OK),n}catch{continue}try{let{stdout:n}=await Q("which claude"),r=n.trim();if(r)return r}catch{}return null}async function K(t,i={}){let n=await D();if(!n)throw new Error("Claude CLI not found. Please install Claude Code: npm install -g @anthropic-ai/claude-code");let r=(0,O.getPreferenceValues)(),l=i.model||r.defaultModel||"sonnet",s=t;i.context&&(s=`Context:
${i.context}

Question/Task:
${t}`);let d=["-p",s,"--output-format","stream-json","--verbose","--model",l];i.sessionId&&d.push("-r",i.sessionId);let f={...process.env,PATH:`${process.env.PATH}:/usr/local/bin:/opt/homebrew/bin`,HOME:b.default.homedir()};return r.anthropicApiKey&&(f.ANTHROPIC_API_KEY=r.anthropicApiKey),r.oauthToken&&(f.CLAUDE_CODE_OAUTH_TOKEN=r.oauthToken),new Promise((h,y)=>{let g=(0,_.spawn)(n,d,{cwd:i.cwd||b.default.homedir(),env:f,stdio:["ignore","pipe","pipe"]}),a="",m="",T=setTimeout(()=>{g.kill(),y(new Error("Claude CLI timed out after 2 minutes"))},12e4);g.stdout.on("data",u=>{a+=u.toString()}),g.stderr.on("data",u=>{m+=u.toString()}),g.on("close",u=>{if(clearTimeout(T),u!==0&&!a){y(new Error(m||`Claude CLI exited with code ${u}`));return}try{let L=a.trim().split(`
`).filter(Boolean),A="",k="",v,E,C,I=!1;for(let $ of L)try{let c=JSON.parse($);if(I=!0,c.type==="result")v=c.session_id,E=c.total_cost_usd,C=c.usage,c.result&&(k=c.result);else if(c.type==="assistant"&&c.message?.content)for(let N of c.message.content)N.type==="text"&&(A+=N.text);else c.result&&(k=c.result,v=c.session_id,E=c.total_cost_usd,C=c.usage)}catch{A+=$}let x=A||k;(!x&&I&&C?.output_tokens&&C.output_tokens>0||!x&&!I)&&(x=a),h({result:x||"",session_id:v,total_cost_usd:E,usage:C})}catch{h({result:a||m,is_error:!!m&&!a})}}),g.on("error",u=>{clearTimeout(T),y(u)})})}async function Y(){return await D()!==null}async function B(){let t=await Y();if(!t){let{showToast:i,Toast:n}=await import("@raycast/api");await i({style:n.Style.Failure,title:"Claude Code not installed",message:"Install: npm install -g @anthropic-ai/claude-code"})}return t}var o=require("react/jsx-runtime"),X=[{id:"explain",title:"Explain Code",description:"Explain what this code does and why",icon:e.Icon.QuestionMark,prompt:`Explain this code concisely:

\`\`\`
{{code}}
\`\`\`

Cover:
1. What it does (high-level purpose)
2. How it works (key logic)
3. Any notable patterns or techniques used

Keep it brief but informative.`,outputAction:"detail",tintColor:e.Color.Blue},{id:"explain-regex",title:"Explain Regex",description:"Explain this regex pattern in plain English",icon:e.Icon.MagnifyingGlass,prompt:`Explain this regex pattern in plain English:

\`\`\`
{{code}}
\`\`\`

Include:
1. What it matches (with examples)
2. Breakdown of each component
3. Edge cases or limitations

Use simple language.`,outputAction:"detail",tintColor:e.Color.Purple},{id:"find-bugs",title:"Find Bugs",description:"Identify bugs and potential issues",icon:e.Icon.Bug,prompt:`Analyze this code for bugs and potential issues:

\`\`\`
{{code}}
\`\`\`

Look for:
- Logic errors
- Edge cases not handled
- Potential null/undefined issues
- Off-by-one errors
- Race conditions
- Security vulnerabilities

For each issue, explain the problem and suggest a fix.`,outputAction:"detail",tintColor:e.Color.Red},{id:"convert-language",title:"Convert to Language",description:"Convert code to another programming language",icon:e.Icon.Switch,prompt:`Convert this code to {{language}}:

\`\`\`
{{code}}
\`\`\`

Preserve the logic and use idiomatic patterns for the target language.
Return only the converted code without explanation.`,outputAction:"copy",requiresVariable:"language",tintColor:e.Color.Green},{id:"add-types",title:"Add TypeScript Types",description:"Add TypeScript types to JavaScript code",icon:e.Icon.Code,prompt:`Add TypeScript types to this JavaScript code:

\`\`\`
{{code}}
\`\`\`

Guidelines:
- Use specific types, avoid 'any'
- Add interfaces for object shapes
- Use generics where appropriate
- Add JSDoc comments for complex types

Return only the typed code.`,outputAction:"copy",tintColor:e.Color.Blue},{id:"optimize",title:"Optimize Code",description:"Optimize for performance",icon:e.Icon.Bolt,prompt:`Optimize this code for performance:

\`\`\`
{{code}}
\`\`\`

Consider:
- Time complexity improvements
- Memory usage reduction
- Unnecessary operations
- Caching opportunities

Show the optimized code and explain what changed.`,outputAction:"detail",tintColor:e.Color.Yellow},{id:"add-comments",title:"Add Comments",description:"Add helpful comments to code",icon:e.Icon.Bookmark,prompt:`Add helpful comments to this code:

\`\`\`
{{code}}
\`\`\`

Guidelines:
- Explain the "why", not the "what"
- Document non-obvious logic
- Add JSDoc for functions
- Keep comments concise

Return only the commented code.`,outputAction:"copy",tintColor:e.Color.Orange},{id:"simplify",title:"Simplify Code",description:"Simplify and clean up code",icon:e.Icon.Eraser,prompt:`Simplify this code:

\`\`\`
{{code}}
\`\`\`

Goals:
- Reduce complexity
- Improve readability
- Remove redundancy
- Use modern syntax where beneficial

Preserve all functionality. Return only the simplified code.`,outputAction:"copy",tintColor:e.Color.Magenta},{id:"write-tests",title:"Write Tests",description:"Generate unit tests for this code",icon:e.Icon.CheckCircle,prompt:`Write comprehensive unit tests for this code:

\`\`\`
{{code}}
\`\`\`

Include tests for:
- Happy path scenarios
- Edge cases
- Error conditions
- Boundary values

Use Jest/Vitest syntax. Make tests clear and well-organized.`,outputAction:"detail",tintColor:e.Color.Green},{id:"generate-types",title:"Generate Types from JSON",description:"Generate TypeScript types from JSON data",icon:e.Icon.Document,prompt:`Generate TypeScript types/interfaces from this JSON:

\`\`\`json
{{code}}
\`\`\`

Guidelines:
- Use interfaces for objects
- Make optional fields explicit with ?
- Use appropriate primitive types
- Add helpful comments for unclear fields

Return only the type definitions.`,outputAction:"copy",tintColor:e.Color.Blue}];function H(){let[t,i]=(0,p.useState)(!0),[n,r]=(0,p.useState)(null);if((0,p.useEffect)(()=>{async function s(){try{let d=await(0,e.getSelectedText)();r(d.trim()||null)}catch{r(null)}i(!1)}s()},[]),t)return(0,o.jsx)(e.List,{isLoading:!0});if(!n)return(0,o.jsx)(e.List,{children:(0,o.jsx)(e.List.EmptyView,{title:"No Text Selected",description:"Select some code in any application and try again",icon:e.Icon.Text})});let l=n.length>100?n.slice(0,100)+"...":n;return(0,o.jsxs)(e.List,{searchBarPlaceholder:"Search transforms...",children:[(0,o.jsx)(e.List.Section,{title:"Selected Text",subtitle:`${n.length} characters`,children:(0,o.jsx)(e.List.Item,{title:l,icon:e.Icon.Text,accessories:[{text:`${n.split(`
`).length} lines`}]})}),(0,o.jsx)(e.List.Section,{title:"Transforms",children:X.map(s=>(0,o.jsx)(Z,{transform:s,selectedText:n},s.id))})]})}function Z({transform:t,selectedText:i}){let{push:n}=(0,e.useNavigation)();function r(){t.requiresVariable?n((0,o.jsx)(ee,{transform:t,selectedText:i})):n((0,o.jsx)(V,{transform:t,selectedText:i,variables:{}}))}return(0,o.jsx)(e.List.Item,{title:t.title,subtitle:t.description,icon:{source:t.icon,tintColor:t.tintColor},accessories:[{tag:t.outputAction==="detail"?"View":"Copy"}],actions:(0,o.jsx)(e.ActionPanel,{children:(0,o.jsx)(e.Action,{title:"Execute",icon:e.Icon.Play,onAction:r})})})}function ee({transform:t,selectedText:i}){let{push:n}=(0,e.useNavigation)(),r=["Python","JavaScript","TypeScript","Go","Rust","Java","C#","C++","Ruby","Swift","Kotlin","PHP"];async function l(s){let d=t.requiresVariable;if(!s[d]?.trim()){await(0,e.showToast)({style:e.Toast.Style.Failure,title:`Please select a ${d}`});return}n((0,o.jsx)(V,{transform:t,selectedText:i,variables:s}))}return(0,o.jsxs)(e.Form,{actions:(0,o.jsx)(e.ActionPanel,{children:(0,o.jsx)(e.Action.SubmitForm,{title:"Execute",icon:e.Icon.Play,onSubmit:l})}),children:[(0,o.jsx)(e.Form.Description,{title:"Transform",text:t.title}),t.requiresVariable==="language"&&(0,o.jsx)(e.Form.Dropdown,{id:"language",title:"Target Language",children:r.map(s=>(0,o.jsx)(e.Form.Dropdown.Item,{title:s,value:s},s))})]})}function V({transform:t,selectedText:i,variables:n}){let[r,l]=(0,p.useState)(!0),[s,d]=(0,p.useState)(null),[f,h]=(0,p.useState)(null);if((0,p.useEffect)(()=>{async function g(){try{if(!await B()){h("Claude Code not installed"),l(!1);return}let a=t.prompt.replace("{{code}}",i);for(let[T,u]of Object.entries(n))a=a.replace(`{{${T}}}`,u);let m=await K(a,{model:"haiku"});d(m),t.outputAction==="copy"&&m.result&&(await e.Clipboard.copy(m.result),await(0,e.showToast)({style:e.Toast.Style.Success,title:"Copied to clipboard"}))}catch(a){h(a instanceof Error?a.message:String(a))}finally{l(!1)}}g()},[]),r)return(0,o.jsx)(e.Detail,{isLoading:!0,markdown:`# ${t.title}

Transforming...`});if(f)return(0,o.jsx)(e.Detail,{markdown:`# Error

${f}`,actions:(0,o.jsx)(e.ActionPanel,{children:(0,o.jsx)(e.Action.CopyToClipboard,{title:"Copy Error",content:f})})});let y=`# ${t.title}

${s?.result||"No result"}`;return(0,o.jsx)(e.Detail,{markdown:y,metadata:(0,o.jsxs)(e.Detail.Metadata,{children:[s?.total_cost_usd&&(0,o.jsx)(e.Detail.Metadata.Label,{title:"Cost",text:`$${s.total_cost_usd.toFixed(4)}`}),s?.usage&&(0,o.jsx)(e.Detail.Metadata.Label,{title:"Tokens",text:`${s.usage.input_tokens} in / ${s.usage.output_tokens} out`})]}),actions:(0,o.jsxs)(e.ActionPanel,{children:[(0,o.jsx)(e.Action.CopyToClipboard,{title:"Copy Result",content:s?.result||"",shortcut:{modifiers:["cmd"],key:"c"}}),(0,o.jsx)(e.Action.Paste,{title:"Paste Result",content:s?.result||"",shortcut:{modifiers:["cmd","shift"],key:"v"}}),(0,o.jsx)(e.Action.CopyToClipboard,{title:"Copy as Code Block",content:`\`\`\`
${s?.result||""}
\`\`\``})]})})}
