# NixOS 的网络问题

国内用户在使用 NixOS 时会存在一些网络问题，一是 NixOS 高度依赖 GitHub 作为 channel/flake
数据源——在国内访问 GitHub 相当的慢，二是 NixOS 官方的包缓存服务器在国内访问速度较慢。

为了解决这些问题，你可以使用国内的镜像源，或者使用代理工具来加速访问。

这里我先介绍几个比较简单的配置方法。

## 1. 包缓存服务器的加速访问

首先，在执行后面给出的任何 `nix` 相关命令时，你都可以通过 `--option` 选项来指定镜像源，例
如：

```bash
# 使用上海交通大学的镜像源
# 官方文档: https://mirror.sjtu.edu.cn/docs/nix-channels/store
nixos-rebuild switch --option substituters "https://mirror.sjtu.edu.cn/nix-channels/store"

# 使用中国科学技术大学的镜像源
# 官方文档: https://mirrors.ustc.edu.cn/help/nix-channels.html
nixos-rebuild switch --option substituters "https://mirrors.ustc.edu.cn/nix-channels/store"

# 使用清华大学的镜像源
# 官方文档: https://mirrors.tuna.tsinghua.edu.cn/help/nix-channels/
nixos-rebuild switch --option substituters "https://mirrors.tuna.tsinghua.edu.cn/nix-channels/store"

# 其他 nix 命令同样可以使用 --option 选项，例如 nix shell
nix shell nixpkgs#cowsay --option substituters "https://mirrors.tuna.tsinghua.edu.cn/nix-channels/store"
```

你可以自己测试下上述几个镜像源的速度，选速度最快的一个。

## 2. Channel/Flake 的加速访问

对于 Flake Inputs 跟 Channels 的加速访问，这个就需要使用代理工具加速访问。

可以通过如下命令设置代理环境变量，实现使用 socks5/http 代理加速 nix 的网络访问：

```bash
sudo mkdir /run/systemd/system/nix-daemon.service.d/
cat << EOF >/run/systemd/system/nix-daemon.service.d/override.conf
[Service]
Environment="https_proxy=socks5h://localhost:7891"
EOF
sudo systemctl daemon-reload
sudo systemctl restart nix-daemon
```

**但请注意，系统重启后 `/run/` 目录下的内容会被清空，所以每次重启后都需要重新执行上述命
令**！

更详细的说明与其他用法介绍，请移步
[添加自定义缓存服务器](https://nixos-and-flakes.thiscute.world/zh/nixos-with-flakes/add-custom-cache-servers) ，注意这部分
内容可能需要一定的 NixOS 使用经验才能理解。

::: warning GitHub 报 HTTP 403 错误
注意：使用一些商用代理或公共代理时你可能会遇到 GitHub 下载时报 HTTP 403 错误
（[nixos-and-flakes-book/issues/74](https://github.com/ryan4yin/nixos-and-flakes-book/issues/74)），
可尝试通过更换代理服务器或者设置
[access-tokens](https://github.com/NixOS/nix/issues/6536) 来解决。
:::
