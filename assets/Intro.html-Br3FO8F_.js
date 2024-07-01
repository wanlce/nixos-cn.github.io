import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as c,c as o,a,b as n,d as s,e as i}from"./app-jQbeeCDI.js";const d={},r=i(`<h1 id="nixos-入门" tabindex="-1"><a class="header-anchor" href="#nixos-入门"><span>NixOS 入门</span></a></h1><div class="hint-container warning"><p class="hint-container-title">内容施工中</p><p>本节内容正在修缮中，当前内容可能已经过时，仅供参考。</p></div><h2 id="何谓-nix-channel" tabindex="-1"><a class="header-anchor" href="#何谓-nix-channel"><span>何谓 nix-channel</span></a></h2><p><code>nix-channel</code> 是一个命令行工具，用于订阅系统频道和软件频道。</p><h3 id="命令行" tabindex="-1"><a class="header-anchor" href="#命令行"><span>命令行</span></a></h3><p><code>nix-channel</code> 命令行工具的使用：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nix-channel <span class="token punctuation">{</span>--add url <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token parameter variable">--remove</span> name <span class="token operator">|</span> <span class="token parameter variable">--list</span> <span class="token operator">|</span> <span class="token parameter variable">--update</span> <span class="token punctuation">[</span>names…<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token parameter variable">--rollback</span> <span class="token punctuation">[</span>generation<span class="token punctuation">]</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>看起来，这个命令行工具提供的功能有：订阅频道，退订频道，列出频道，更新频道，还能回滚“生成”。</p><h3 id="频道是什么" tabindex="-1"><a class="header-anchor" href="#频道是什么"><span>频道是什么</span></a></h3><p>上面我们演示了命令行工具的使用方式，却没有告知频道从哪里获取。</p><p>频道最直接的体现是一个形如 <code>https://nixos.org/channels/nixos22.11</code> 的 URL。</p>`,11),p={href:"https://channels.nixos.org/",target:"_blank",rel:"noopener noreferrer"},h=i(`<p>请你尝试访问上面的 URL。正如我们所说，这是一个频道集合，根目录下的每一个子目录就代表一个频道，官方提供了若干个频道：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>2022/8/4 22:51:25               0.1 kB         nixos-21.11
2022/8/4 22:59:10               0.1 kB         nixos-21.11-aarch64
2022/8/2 23:24:22               0.1 kB         nixos-21.11-small
2023/1/3 23:39:40               0.1 kB         nixos-22.05
2023/1/3 22:43:29               0.1 kB         nixos-22.05-aarch64
2023/1/2 04:11:11               0.1 kB         nixos-22.05-small
2023/3/16 05:19:03              0.1 kB         nixos-22.11
2023/3/16 22:18:18              0.1 kB         nixos-22.11-small
2023/3/16 14:55:20              0.1 kB         nixos-unstable
2023/3/16 21:27:06              0.1 kB         nixos-unstable-small
2023/1/2 21:05:38               0.1 kB         nixpkgs-22.05-darwin
2023/3/17 00:30:11              0.1 kB         nixpkgs-22.11-darwin
2023/3/16 04:06:35              0.1 kB         nixpkgs-unstable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构"><span>项目结构</span></a></h3><p>我们以官方频道 <code>nixpkgs-unstable</code> 为例，查看每个频道大致的构成。它们似乎都提供了 <code>nixexprs.tar.xz</code>，从文件名我们就了解到这是一个包含了若干 nix 文件的 tar 压缩档（Tarball）。</p><div class="hint-container tip"><p class="hint-container-title">Tarball</p><p>Tarball 是 <code>tar</code> 文件格式的全称，不是 Nix 独有。它可以将多个文件打包在一起。如果你想在打包的时候压缩一下，还可以使用 gzip，bzip2 等软件压缩该档案。当你对 <code>tar</code> 文件启用压缩以后，后缀名会变更为 <code>tar.gz</code>, <code>tar.bz2</code> 等，具体取决于你使用的压缩软件。</p></div><p>于是我们解压它，列出目录树：</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>├─<span class="token punctuation">.</span>github
├─doc
├─lib
├─maintainers
├─nixos
└─pkgs
    ├─applications
    │  ├─accessibility
    │  │  ├─contrast
    │  │  └─wvkbd
    │  ├─audio
    │  │  ├─a2jmidid
    │  │  ├─ario
    │  │  ├─csound
    │  │  │  ├─csound-manual
    │  │  │  └─csound-qt
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">仅供演示</p><p>以上目录树是笔者为了方便演示而精简过的部分，实际构成肯定有差别。</p></div><p>上面的每个子目录中都有一个 <code>default.nix</code> 文件，这是导入该目录时默认被求值的文件。每个包名文件夹下面的 <code>nix</code> 文件，这些文件和脚本类似，运行它们时，会从五湖四海获取源码和其他资源，再根据脚本的描述构建出相应的二进制包。</p>`,9),u={class:"hint-container tip"},x=a("p",{class:"hint-container-title"},"提示",-1),v={href:"https://nixos-cn.org/guide/lang/",target:"_blank",rel:"noopener noreferrer"},m=i(`<p>每个频道都应该提供一个名为 <code>nixexprs</code> 的 Tarball。其中 <code>default.nix</code> 既是根目录也是每一级目录的入口点。</p><h2 id="系统频道与软件仓库频道" tabindex="-1"><a class="header-anchor" href="#系统频道与软件仓库频道"><span>系统频道与软件仓库频道</span></a></h2><p>频道在 NixOS 中大致被分为两类：系统频道和软件仓库频道。</p><h3 id="系统频道" tabindex="-1"><a class="header-anchor" href="#系统频道"><span>系统频道</span></a></h3><p>系统频道可以从 URL 中直观的体现。形如 <code>https://nixos.org/channels/nixos22.11</code> 你很快就了解到这是一个 22.11 版本的 NixOS 的频道。</p><div class="hint-container tip"><p class="hint-container-title">默认订阅的频道</p><p>NixOS 默认订阅了官方频道 <code>nixos</code>，即使你安装完系统什么都不做，它们也是存在的：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> nix-channel <span class="token parameter variable">--list</span>  <span class="token comment"># 列出频道</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nixos https://nixos.org/channels/nixos22.11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个频道提供了组成系统的一些驱动，设施等等。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这里的 <code>nixos</code> 与 <code>https://nixos.org/channels/nixos22.11</code> 并不是并列关系，前者是频道名，后面是被订阅的 URL。</p><p>当你有两个及两个以上频道的时候，你就会理解我的意思：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nixos https://nixos.org/channels/nixos22.11
nixpkgs https://nixos.org/channels/nixpkgs-unstable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>除非升级系统或更换镜像频道，否则不要动系统默认的 <code>nixos</code> 频道。</p></div></div><h4 id="一些特殊的频道" tabindex="-1"><a class="header-anchor" href="#一些特殊的频道"><span>一些特殊的频道</span></a></h4><ul><li>稳定（stable）频道。如 <code>nixos-22.11</code>。这些频道只能得到保守的错误修复和软件包升级。例如，频道更新可能会导致系统上的Linux内核从 4.19.34 升级到 4.19.38（一个小错误修复），但不会从 4.19.x 升级到 4.20.x（一个可能会破坏一切的重大更改）。在创建下一个稳定分支之前，通常会保持稳定的频道。</li><li>不稳定（unstable）频道。这与 <code>nixos</code> 的主要开发分支相对应，因此可能有破坏性更新，不建议用于生产系统。</li><li>小型（small）频道，如 <code>nixos-22.11-small</code> 或 <code>nix-unstable-small</code>。这些频道与上述稳定和不稳定频道相同，只是它们包含较少的二进制包。这意味着它们比常规通道更新得更快（例如，当一个关键的安全补丁被提交到 NixOS 的源代码树时），但可能有更多的包需要从源代码构建。它们主要用于服务器环境，因此包含很少的 GUI 应用程序。</li></ul>`,8),b={href:"https://nixos.org/channels",target:"_blank",rel:"noopener noreferrer"},g={href:"https://nixos.org/nixos/download.html",target:"_blank",rel:"noopener noreferrer"},k=i(`<h4 id="升级系统-todo" tabindex="-1"><a class="header-anchor" href="#升级系统-todo"><span>升级系统 #TODO</span></a></h4><p>你可以使用以下命令获取当前的 <code>nixos</code> 频道</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nix-channel <span class="token parameter variable">--list</span> <span class="token operator">|</span> <span class="token function">grep</span> nixos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要切换到不同的NixOS通道，请执行</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nix-channel <span class="token parameter variable">--add</span> https://nixos.org/channels/channel-name nixos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以 <code>nixos</code> 22.11 为例，命令为</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nix-channel <span class="token parameter variable">--add</span> https://nixos.org/channels/nixos-22.11 nixos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用以下命令以开始切换</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nixos-rebuild switch <span class="token parameter variable">--upgrade</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令相当于 <code>nix-channel --update nixos</code>; <code>nixos-rebuild switch</code></p><div class="hint-container note"><p class="hint-container-title">注</p><p>频道的切换是以用户为单位的。当你不以 <code>root</code> 权限执行时，不会影响 <code>/etc/nixos/configuration.nix</code> 的配置</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在频道之间来回切换通常是安全的。唯一的例外是，一个较新的NixOS也可能有一个较低的Nix版本，这可能涉及到Nix数据库模式的升级。这是不容易撤消的，所以在这种情况下，您将无法返回到原始频道。</p></div><h3 id="软件仓库频道" tabindex="-1"><a class="header-anchor" href="#软件仓库频道"><span>软件仓库频道</span></a></h3><p>软件仓库频道不仅仅可以为 NixOS 使用，其他 Linux 发行版也可以安装 Nix 包管理器从中获取软件包，甚至 Darwin 也可以。</p><h4 id="订阅-nixpkgs-unstable-频道" tabindex="-1"><a class="header-anchor" href="#订阅-nixpkgs-unstable-频道"><span>订阅 <code>nixpkgs-unstable</code> 频道</span></a></h4><div class="hint-container tip"><p class="hint-container-title">nixpkgs 仓库</p><p>nixpkgs 仓库更新非常快，所以没有稳定版。不过 darwin 是例外，因为 Nix 包管理器不能保证实时兼容当前的 darwin 平台，所以要做版本控制。</p></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> nix-channel <span class="token parameter variable">--add</span> https://nixos.org/channels/nixpkgs-unstable  <span class="token comment"># 添加频道，不过我更喜欢称它为 “订阅”</span>
<span class="token function">sudo</span> nix-channel <span class="token parameter variable">--update</span>  <span class="token comment"># 更新频道</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如此，你便订阅上了官方的 nixpkgs-unstable 软件源。</p><div class="hint-container warning"><p class="hint-container-title">推荐订阅镜像频道</p><p>上文仅供教学。在下一节我们会指引大家订阅国内能正常访问的镜像频道，键入下面的命令以退订官方的 <code>nixpkgs-unstable</code> 频道：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> nix-channel <span class="token parameter variable">--remove</span> nixpkgs-unstable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义频道名</p><p>默认情况下，频道名是截取自 URL 的最后一级：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nix-channel <span class="token parameter variable">--add</span> https://host/nixpkgs-unstable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们列出频道名：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nixpkgs-unstable https://host/nixpkgs-unstable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果我们需要手动命名频道，增加一个参数即可：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nix-channel <span class="token parameter variable">--add</span> https://host/nixpkgs-unstable nixpkgs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h2 id="使用镜像频道" tabindex="-1"><a class="header-anchor" href="#使用镜像频道"><span>使用镜像频道</span></a></h2><p>由于不可抗力的因素，大陆对于环大陆主机的访问显得异常艰难，所以我们需要使用国内的镜像频道来替代我们对官方频道（镜像频道通常由大学和企业公益性提供），下面列出了一些在中国可用的一些镜像频道：</p><ul><li>中国教育和科研计算机网（清华大学）<code>https://mirrors.cernet.edu.cn/nix-channels/store</code></li><li>中国科学技术大学 <code>https://mirrors.ustc.edu.cn/nix-channels/store</code></li><li>上海交通大学 <code>https://mirror.sjtu.edu.cn/nix-channels/store</code></li><li>北京外国语大学 <code>https://mirrors.bfsu.edu.cn/nix-channels/store</code></li><li>南京大学 <code>https://mirror.nju.edu.cn/nix-channels/store</code></li><li>中国科学院软件研究所 <code>https://mirror.iscas.ac.cn/nix-channels/store</code></li></ul><p>我们使用镜像源替代官方的系统频道和软件仓库频道：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> nix-channel <span class="token parameter variable">--add</span> https://mirrors.ustc.edu.cn/nix-channels/nixpkgs-unstable nixpkgs  <span class="token comment"># 订阅镜像仓库频道</span>
<span class="token function">sudo</span> nix-channel <span class="token parameter variable">--add</span> https://mirrors.ustc.edu.cn/nix-channels/nixos-22.11 nixos  <span class="token comment"># 请注意系统版本</span>
<span class="token function">sudo</span> nix-channel <span class="token parameter variable">--list</span>  <span class="token comment"># 列出频道</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">注</p><p>特地修改频道名是因为许多表达式都会把 nixpkgs 而不是 nixpkgs-unstable 作输入。</p></div><h2 id="二进制构建缓存" tabindex="-1"><a class="header-anchor" href="#二进制构建缓存"><span>二进制构建缓存</span></a></h2><p>源码分发是指将软件的源代码打包并分发给用户（Gentoo），二进制分发则是将已编译好的二进制程序直接分发给用户（例如 Debian，RHEL）。NixOS 默认是源码分发形式，不过我们可以添加二进制缓存源来让 NixOS 从缓存主机获取已经构建好的软件包。</p><h3 id="为-nixos-添加二进制缓存源" tabindex="-1"><a class="header-anchor" href="#为-nixos-添加二进制缓存源"><span>为 NixOS 添加二进制缓存源</span></a></h3><p>只需要修改 NixOS 配置中的 <code>substituters</code> 即可：</p><div class="language-nix line-numbers-mode" data-ext="nix" data-title="nix"><pre class="language-nix"><code>nix<span class="token punctuation">.</span>settings<span class="token punctuation">.</span>substituters <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token string">&quot;https://mirrors.ustc.edu.cn/nix-channels/store&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于官方的二进制缓存源是默认添加的，你可以通过下面的方式只启用自己指定的二进制缓存源：</p><div class="language-nix line-numbers-mode" data-ext="nix" data-title="nix"><pre class="language-nix"><code><span class="token comment"># 记得导入 lib</span>
nix<span class="token punctuation">.</span>settings<span class="token punctuation">.</span>substituters <span class="token operator">=</span> lib<span class="token punctuation">.</span>mkForce <span class="token punctuation">[</span> <span class="token string">&quot;https://mirrors.cernet.edu.cn/nix-channels/store&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="当前可用的二进制缓存主机列表" tabindex="-1"><a class="header-anchor" href="#当前可用的二进制缓存主机列表"><span>当前可用的二进制缓存主机列表</span></a></h3><ul><li>中国科研和教育计算机网 <code>https://mirrors.cernet.edu.cn/nix-channels/store</code></li><li>中国科技大学 <code>https://mirrors.ustc.edu.cn/nix-channels/store</code></li><li>上海交通大学 <code>https://mirror.sjtu.edu.cn/nix-channels/store</code></li><li>中国教育和科研计算机网 <code>https://mirrors.cernet.edu.cn/nix-channels/store</code></li><li>北京外国语大学 <code>https://mirrors.bfsu.edu.cn/nix-channels/store</code></li><li>南京大学 <code>https://mirror.nju.edu.cn/nix-channels/store</code></li><li>中国科学院软件研究所 <code>https://mirror.iscas.ac.cn/nix-channels/store</code></li></ul><h3 id="cachix-服务" tabindex="-1"><a class="header-anchor" href="#cachix-服务"><span>Cachix 服务</span></a></h3>`,36),N={href:"https://www.cachix.org/",target:"_blank",rel:"noopener noreferrer"},f=i('<h2 id="nix-生态构成简述" tabindex="-1"><a class="header-anchor" href="#nix-生态构成简述"><span>Nix 生态构成简述</span></a></h2><p>Nix 生态主要由 Nix 表达式语言，NixOS，Nix 包管理器，Nixpkgs，NixOps，Hydra 构成。<strong>以下只是梗概，并不需要你完全理解或记住它。</strong></p><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>Nix 表达式语言</td><td>Nix 表达式语言是一种函数式编程语言，用于描述软件包的构建过程、依赖关系和环境变量等信息。它支持函数定义、递归、模式匹配等特性，还支持嵌套语法，可描述复杂的依赖关系和构建过程。Nix 还支持原子事务，使得所有的包和环境都是原子的，不会相互影响。Nix 表达式语言可用于定义软件包和环境，也可用于描述系统配置。它是一种强大、灵活、可重复和可扩展的语言，用于管理软件包和环境。</td></tr><tr><td>NixOS</td><td>NixOS 是一种基于 Nix 包管理器的 Linux 发行版，具有高度可配置性、可重复性和安全性。它采用声明性配置，使用配置文件明确描述系统状态，使得配置更易于维护。NixOS 适用于需要高度可定制性的用例，如服务器和开发环境。</td></tr><tr><td>Nix 包管理器</td><td>Nix 是跨平台的功能强大的包管理器，采用函数式编程思想描述依赖关系和多版本软件包管理，并提供一系列跨平台工具方便管理和部署。</td></tr><tr><td>NixOps</td><td>NixOps是基于NixOS的云部署管理工具，支持多云平台，提供简单的命令行接口，可创建、部署、升级和回滚NixOS。用户可通过编写Nix表达式自定义部署和配置，使其成为灵活、可扩展和可定制的工具。适合需要管理大型、复杂基础设施的组织。</td></tr><tr><td>Hydra</td><td>Hydra 是在 NixOS 中使用的 CI/CD 系统，它可以自动构建、测试和部署软件包，并决定是否发布和部署。Hydra 可以在不同环境下测试软件包，适用于开发、测试和部署任何类型的软件。</td></tr><tr><td>Nixpkgs</td><td>nixpkgs 是 Nix 软件包管理器的官方软件包集合，包含数以万计的软件包，并提供了构建、测试和部署工具，支持多平台和多架构，适用于开发、测试和部署各种类型的软件。</td></tr></tbody></table>',3);function _(O,S){const e=l("ExternalLinkIcon");return c(),o("div",null,[r,a("p",null,[n("官方提供了"),a("a",p,[n("官方频道集合"),s(e)]),n("。订阅了其中的频道以后，就会从相应的频道获取更新，大致和你使用其他发行版的软件源类似，不过我们后面会详述 NixOS 中的“频道”概念和传统发行版中“软件源”的区别。")]),h,a("div",u,[x,a("p",null,[n("如果你还没有学习过 Nix 表达式语言，大抵是看不懂的，你可以前往 "),a("a",v,[n("Nix 语言概览"),s(e)]),n(" 进行初步学习。")])]),m,a("p",null,[n("要查看可用的频道，请转到"),a("a",b,[n("官方频道"),s(e)]),n("。（请注意，各种频道的 URI 重定向到一个包含最新版本频道的目录，还包括 ISO 映像和 VirtualBox 设备。）")]),a("p",null,[n("请注意，在发布过程中，尚未发布的频道也将出现在此处。请参阅"),a("a",g,[n("官方 Getting NixOS 页面"),s(e)]),n("以查找最新支持的稳定版本。")]),k,a("p",null,[n("Cachix 服务是 Nix 二进制缓存服务实现的方式之一，你可以使用它在服务器构建缓存，然后连接到该服务器的主机可以分享这些缓存，从而避免了二次构建。了解详情请参阅 "),a("a",N,[n("Cachix 官网"),s(e)]),n("。")]),f])}const B=t(d,[["render",_],["__file","Intro.html.vue"]]),T=JSON.parse('{"path":"/manual/Intro.html","title":"NixOS 入门","lang":"zh-CN","frontmatter":{"description":"NixOS 入门 内容施工中 本节内容正在修缮中，当前内容可能已经过时，仅供参考。 何谓 nix-channel nix-channel 是一个命令行工具，用于订阅系统频道和软件频道。 命令行 nix-channel 命令行工具的使用： 看起来，这个命令行工具提供的功能有：订阅频道，退订频道，列出频道，更新频道，还能回滚“生成”。 频道是什么 上面我们...","head":[["meta",{"property":"og:url","content":"https://nixos-cn.github.io/manual/Intro.html"}],["meta",{"property":"og:site_name","content":"NixOS 中文"}],["meta",{"property":"og:title","content":"NixOS 入门"}],["meta",{"property":"og:description","content":"NixOS 入门 内容施工中 本节内容正在修缮中，当前内容可能已经过时，仅供参考。 何谓 nix-channel nix-channel 是一个命令行工具，用于订阅系统频道和软件频道。 命令行 nix-channel 命令行工具的使用： 看起来，这个命令行工具提供的功能有：订阅频道，退订频道，列出频道，更新频道，还能回滚“生成”。 频道是什么 上面我们..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-01T03:55:52.000Z"}],["meta",{"property":"article:author","content":"NixOS-CN"}],["meta",{"property":"article:modified_time","content":"2024-07-01T03:55:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NixOS 入门\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-01T03:55:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"NixOS-CN\\",\\"url\\":\\"https://github.com/nixos-cn\\"}]}"]]},"headers":[{"level":2,"title":"何谓 nix-channel","slug":"何谓-nix-channel","link":"#何谓-nix-channel","children":[{"level":3,"title":"命令行","slug":"命令行","link":"#命令行","children":[]},{"level":3,"title":"频道是什么","slug":"频道是什么","link":"#频道是什么","children":[]},{"level":3,"title":"项目结构","slug":"项目结构","link":"#项目结构","children":[]}]},{"level":2,"title":"系统频道与软件仓库频道","slug":"系统频道与软件仓库频道","link":"#系统频道与软件仓库频道","children":[{"level":3,"title":"系统频道","slug":"系统频道","link":"#系统频道","children":[]},{"level":3,"title":"软件仓库频道","slug":"软件仓库频道","link":"#软件仓库频道","children":[]}]},{"level":2,"title":"使用镜像频道","slug":"使用镜像频道","link":"#使用镜像频道","children":[]},{"level":2,"title":"二进制构建缓存","slug":"二进制构建缓存","link":"#二进制构建缓存","children":[{"level":3,"title":"为 NixOS 添加二进制缓存源","slug":"为-nixos-添加二进制缓存源","link":"#为-nixos-添加二进制缓存源","children":[]},{"level":3,"title":"当前可用的二进制缓存主机列表","slug":"当前可用的二进制缓存主机列表","link":"#当前可用的二进制缓存主机列表","children":[]},{"level":3,"title":"Cachix 服务","slug":"cachix-服务","link":"#cachix-服务","children":[]}]},{"level":2,"title":"Nix 生态构成简述","slug":"nix-生态构成简述","link":"#nix-生态构成简述","children":[]}],"git":{"createdTime":1711468225000,"updatedTime":1719806152000,"contributors":[{"name":"Ryan Yin","email":"xiaoyin_c@qq.com","commits":3},{"name":"linglilongyi","email":"46670292+linglilongyi@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":10.4,"words":3119},"filePathRelative":"manual/Intro.md","localizedDate":"2024年3月26日","autoDesc":true,"excerpt":"\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">内容施工中</p>\\n<p>本节内容正在修缮中，当前内容可能已经过时，仅供参考。</p>\\n</div>\\n<h2>何谓 nix-channel</h2>\\n<p><code>nix-channel</code> 是一个命令行工具，用于订阅系统频道和软件频道。</p>\\n<h3>命令行</h3>\\n<p><code>nix-channel</code> 命令行工具的使用：</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>nix-channel <span class=\\"token punctuation\\">{</span>--add url <span class=\\"token punctuation\\">[</span>name<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">|</span> <span class=\\"token parameter variable\\">--remove</span> name <span class=\\"token operator\\">|</span> <span class=\\"token parameter variable\\">--list</span> <span class=\\"token operator\\">|</span> <span class=\\"token parameter variable\\">--update</span> <span class=\\"token punctuation\\">[</span>names…<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">|</span> <span class=\\"token parameter variable\\">--rollback</span> <span class=\\"token punctuation\\">[</span>generation<span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');export{B as comp,T as data};
