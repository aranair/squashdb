# What

Site for people to check up on Singapore squasher's grading. This should ideally stay updated with the SSRA website's list every year.

# Techs

Golang + Server-side rendering with Duktape + ReactJS + Webpack 

# Links to Libraries/Frameworks Used

- [go-duktape](https://github.com/olebedev/go-duktape) bindings for a thin, embeddable javascript engine
- [gin](https://github.com/gin-gonic/gin) framework
- [ReactJS](https://github.com/reactjs)
- [Webpack](http://webpack.github.io/)

## Install

```
- go get github.com/aranair/squashdb
- cd $GOPATH/src/github.com/aranair/squashdb
- go get ./...
- go get -u github.com/jteeuwen/go-bindata/...
- npm i
- make
- go run *.go
```
