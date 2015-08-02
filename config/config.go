package config

type Config struct {
	DB database `toml:"database"`
}

type database struct {
	User     string `toml:"user"`
	Password string `toml:"password"`
}
