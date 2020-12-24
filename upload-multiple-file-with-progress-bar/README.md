# Upload Multiple File with Progressbar Using React & NodeJS

This is the source code of `Medium` & `Dev.to` article:

- [Dev.to - How to Upload Multiple File with Progress Bar (ReactJS + Redux and ExpressJS)](https://dev.to/devinekadeni/how-to-upload-multiple-file-with-progress-bar-reactjs-redux-and-expressjs-4hb3)
- [Medium - How to Upload Multiple File with Progress Bar (ReactJS + Redux and ExpressJS)](https://medium.com/@devinekadeni/how-to-upload-multiple-file-with-progress-bar-reactjs-redux-and-expressjs-ed9b0d3fcaf1)

## Getting Started

```bash
git clone https://github.com/devinekadeni/my-blog.git

cd my-blog/upload-multiple-file-with-progress-bar
```

We have 2 code base in this repository, 1 Client and 1 Server.
Hence we should open 2 terminal at the time

Now let's run the server code in the first terminal:

```bash
cd server

npm install
node server.js // Now the server will be running on your local
```

Now let's run the client code in the second terminal:

```bash
cd client

npm install
npm start // Now the application will be running on your local
```

Voila, now you can try demo it by yourself.

NOTE: Don't forget to set your network into `slow 3G` if you want to show up the progressbar incrementing, [here](https://stackoverflow.com/questions/41088022/how-to-get-onuploadprogress-in-axios/48412965#48412965) is the resource information from stackoverflow.
