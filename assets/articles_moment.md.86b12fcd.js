import{_ as s,o as a,c as n,M as o}from"./chunks/framework.21809aeb.js";const i=JSON.parse('{"title":"Moment时间格式化常见用法","description":"","frontmatter":{},"headers":[],"relativePath":"articles/moment.md"}'),l={name:"articles/moment.md"},e=o(`<h1 id="moment时间格式化常见用法" tabindex="-1">Moment时间格式化常见用法 <a class="header-anchor" href="#moment时间格式化常见用法" aria-label="Permalink to &quot;Moment时间格式化常见用法&quot;">​</a></h1><h2 id="moment是前端处理时间常用库-下面总结一些常用方法" tabindex="-1">moment是前端处理时间常用库，下面总结一些常用方法 <a class="header-anchor" href="#moment是前端处理时间常用库-下面总结一些常用方法" aria-label="Permalink to &quot;moment是前端处理时间常用库，下面总结一些常用方法&quot;">​</a></h2><h3 id="取时间戳" tabindex="-1">取时间戳 <a class="header-anchor" href="#取时间戳" aria-label="Permalink to &quot;取时间戳&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//取今日时间</span></span>
<span class="line"><span style="color:#82AAFF;">moment</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">valueOf</span><span style="color:#BABED8;">()</span></span></code></pre></div><h3 id="取日、月、年的起始和结束" tabindex="-1">取日、月、年的起始和结束 <a class="header-anchor" href="#取日、月、年的起始和结束" aria-label="Permalink to &quot;取日、月、年的起始和结束&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">moment</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#BABED8;">())</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startOf</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">day</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#82AAFF;">moment</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#BABED8;">())</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">endOf</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">day</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#82AAFF;">moment</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#BABED8;">())</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startOf</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">month</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#82AAFF;">moment</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#BABED8;">())</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">endOf</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">month</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#82AAFF;">moment</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#BABED8;">())</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startOf</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">year</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#82AAFF;">moment</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#BABED8;">())</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">endOf</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">year</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span></code></pre></div><h3 id="格式化显示" tabindex="-1">格式化显示 <a class="header-anchor" href="#格式化显示" aria-label="Permalink to &quot;格式化显示&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">moment</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">YYYY-MM-DD HH:mm:ss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span></code></pre></div>`,8),p=[e];function t(c,r,D,y,F,A){return a(),n("div",null,p)}const m=s(l,[["render",t]]);export{i as __pageData,m as default};
