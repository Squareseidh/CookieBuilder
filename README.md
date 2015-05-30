# CookieBuilder
Starter kit HTML/CSS/JS

### Quick Start

- Install NodeJS
- Install Bower & gulp

```
$ npm install -g bower
$ npm install -g gulp
```

Then just :

```
$ /path/to/project/directory
$ npm install
```

It'll install all project dependencies.

Then open a terminal and type
```
$ gulp
```

Gulp will compile & minify LESS files into css/dist
You just have to import your less files into css/less/style.less

```less
//style.less
@import "other-file.less"
@import "dir/other-file2.less"
```
