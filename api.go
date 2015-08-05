package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type __api__ struct{}

type Player struct {
	Name  string `json:"name"`
	Grade string `json:"grade"`
	Club  string `json:"club"`
}

var api = __api__{}

func (api __api__) bind(r *gin.RouterGroup) {
	r.GET("/players", api.player_index)
}

func (_ __api__) player_index(c *gin.Context) {
	// TODO: Query all the players from the db
	p1 := Player{
		Name:  "Bobby Pang",
		Grade: "B2",
		Club:  "UCSC",
	}
	p2 := Player{
		Name:  "Boa Ho Man",
		Grade: "B1",
		Club:  "UCSC",
	}
	players := []Player{p1, p2}

	c.JSON(http.StatusOK, gin.H{
		"players": players,
	})
}
