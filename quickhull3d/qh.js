(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "name": "quickhull3d",
  "version": "2.1.0",
  "description": "A quickhull implementation for 3d points",
  "homepage": "https://github.com/mauriciopoppe/quickhull3d",
  "author": {
    "name": "Mauricio Poppe",
    "email": "mauricio.poppe@gmail.com",
    "url": "http://mauriciopoppe.com"
  },
  "bugs": "https://github.com/mauriciopoppe/quickhull3d/issues",
  "main": "dist/index.js",
  "keywords": [
    "geometry",
    "3d",
    "convex hull",
    "quick hull",
    "quickhull"
  ],
  "scripts": {
    "clean": "rimraf dist",
    "lint": "standard",
    "coverage": "jest --coverage",
    "test": "jest",
    "test:watch": "watch 'npm test' test lib",
    "prebuild": "npm run clean -s",
    "build": "babel lib --out-dir dist",
    "build:watch": "watch 'npm run build' lib",
    "preversion": "npm run lint -s && npm run test -s && npm run build -s",
    "postversion": "git push origin master --follow-tags",
    "deploy": "git pull --rebase origin master && git push origin master"
  },
  "standard": {
    "ignore": [
      "/dist"
    ]
  },
  "files": [
    "/dist",
    "index.d.ts"
  ],
  "license": "MIT",
  "types": "index.d.ts",
  "repository": {
    "type": "git",
    "url": "https://github.com/mauriciopoppe/quickhull3d"
  },
  "dependencies": {
    "debug": "^4.3.4",
    "get-plane-normal": "^1.0.0",
    "gl-vec3": "^1.1.3",
    "point-line-distance": "^1.0.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.18.10",
    "@babel/core": "^7.18.13",
    "@babel/preset-env": "^7.18.10",
    "jest": "^29.0.1",
    "rimraf": "^3.0.2",
    "standard": "^17.0.0",
    "watch": "^1.0.2"
  }
}

},{}]},{},[1]);
