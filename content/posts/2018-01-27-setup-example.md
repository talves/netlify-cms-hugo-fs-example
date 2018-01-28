---
title: Setup the Example
date: 2018-01-27T23:00:00.000Z
---
[This example GitHub repo][3] shows the setup for plugging in a file system backend for NetlifyCMS.

Here are the commands to get you started:

### Install dev dependencies
```bash
$ yarn
```

### Build the example for development

Builds the static Hugo site into the `example` folder

```bash
$ yarn build:dev
```

### Start the local development server to run the CMS for local file update

Runs a webpack dev server at [http://localhost:8080/admin/][1]

```bash
$ yarn start
```

### Start the Hugo server with file watch on Port 8090

Runs a Hugo server at [http://localhost:8090/][2]

```bash
$ yarn start:hugo
```


### Build Production for deploy

Builds the static Hugo site into the `public` folder

```bash
$ yarn build
```


[1]: http://localhost:8080/admin/
[2]: http://localhost:8090/
[3]: https://github.com/talves/netlify-cms-hugo-fs-example
