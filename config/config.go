package config

type Config struct {
	DB      database `toml:"database"`
	Api     api      `toml:"api"`
	Duktape duktape  `toml:"duktape"`
}

type database struct {
	User     string `toml:"user"`
	Password string `toml:"password"`
}

type api struct {
	Prefix string `toml:"prefix"`
}

type duktape struct {
	Poolsize int `toml:"poolsize"`
}
