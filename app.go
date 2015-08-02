package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/aranair/squashdb/config"
	"github.com/gin-gonic/gin"

	_ "github.com/lib/pq"

	"github.com/BurntSushi/toml"
)

func main() {
	var conf config.Config
	if _, err := toml.DecodeFile("config.toml", &conf); err != nil {
		log.Fatal(err)
	}
	fmt.Println(conf)

	// pqStr := "user=" + conf.DB.User + " password='" + conf.DB.Password + "' dbname=remindbot host=localhost sslmode=disable"
	// fmt.Println(pqStr)

	// db, err := sql.Open("postgres", pqStr)
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// defer db.Close()

	router := gin.Default()
	router.StaticFS("/static", http.Dir("static"))

	// Attach api
	api.bind(router.Group(conf.Api.Prefix))

	// For all other requests, see: react.go.
	react.bind(router)

	// Start listening
	router.Run(":3000")
}
