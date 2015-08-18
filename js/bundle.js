/**
 * @jsx React.DOM
 */
'use strict';

var React       = global.React = require('react');
var ReactRouter = require('react-router-component');
var superagent  = global.superagent = require('superagent');

var Pages       = ReactRouter.Pages;
var Page        = ReactRouter.Page;
var NotFound    = ReactRouter.NotFound;
var Link        = ReactRouter.Link;

var MainPage = React.createClass({

  render: function() {
    return (
      <div className="MainPage">
        <h1>Hello!</h1>
        <p><Link href="/players">Players List</Link></p>
      </div>
    );
  }
});

var PlayersPage = React.createClass({
  statics: {
    fetcData: function(cb) {
      console.log('fetchData');
      superagent.get('api/v1/players', function(err, res) {
          cb(err, res ? res.body : null);
      });
    }
  },

  // Should set state via props (passed in by server)
  getInitialState: function() {
    console.log('-----');
    console.log(this.props.players);
    if (this.props.players) {
      if (typeof state === 'undefined') {
        state = this.props
      } else {
        this.setState(this.props);
      };
    }
    return state;
    // PlayersPage.fetchData(function(err, res) {
    //   if (typeof state === 'undefined') {
    //     state = res
    //   } else {
    //     this.setState(res);
    //   };
    // }.bind(this));

    // Defaults
    // state = state || {
    //   players: [{
    //     name: "Bobby",
    //     grade: "B2",
    //     club: "UCSC"
    //   }]
    // };
    // return state;
  },

  // Calls data from API, only gets called client side.
  componentDidMount: function() {
  },

  render: function() {
    if (this.state.players) {
      return (
          <PlayersList players={this.state.players} />
          );
    } else {
      return null;
    }
  }

});

var PlayersList = React.createClass({
  render: function() {
    var playersList = this.props.players.map(function(p) {
      return <Player key={p.name} name={p.name} grade={p.grade} club={p.club} />;
    });
    return (
      <div className="players">
        <h1>Players</h1>
        <ul className="players-list">
          {playersList}
        </ul>
      </div>
    );
  }
});

var Player = React.createClass({
  render: function() {
    return (
      <div className="player">
        <p> {this.props.name} </p>
        <p> {this.props.grade} </p>
        <p> {this.props.club} </p>
      </div>
    );
  }
});

// var UserPage = React.createClass({
//   statics: {
//     getUserInfo: function(username, cb) {
//       superagent.get(
//         '/api/v1/users/' + username,
//         function(err, res) {
//           cb(err, res ? res.body : null);
//         });
//     }
//   },

//   getInitialState: function() {
//     var state, username = this.props.username;
//     UserPage.getUserInfo(this.props.username, function(err, res){
//       if (typeof state === 'undefined') {
//         state = res
//       } else {
//         this.setState(res);
//       };
//     }.bind(this));
//     state = state || {
//       username: username,
//       name: username.charAt(0).toUpperCase() + username.slice(1)
//     };
//     return state;
//   },

//   componentWillReceiveProps: function(nextProps) {
//     if (this.props.username !== nextProps.username) {
//       UserPage.getUserInfo(nextProps.username, function(err, info) {
//         if (err) {
//           throw err;
//         }
//         this.setState(info);
//       }.bind(this));
//     }
//   },

//   render: function() {
//     var otherUser = this.props.username === 'doe' ? 'ivan' : 'doe';
//     return (
//       <div className="UserPage">
//         <h1>Hello, {this.state.name}!</h1>
//         <p>
//           Go to <Link href={"/users/" + otherUser}>/users/{otherUser}</Link>
//         </p>
//       </div>
//     );
//   }
// });

var NotFoundHandler = React.createClass({

  render: function() {
    return (
      <div>
        <p>Page not found</p>
      </div>
    );
  }
});

var App = React.createClass({

  render: function() {
    console.log('APP ROOOOOT');
    console.log(this.props.players);
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/static/css/main.css" />
          <script src="/static/js/bundle.js" />
          <title>SquashDB | Singapore</title>
        </head>
        <Pages className="App" path={this.props.path}>
          <Page path="/" handler={MainPage} />
          <Page path="/players" handler={PlayersPage} players={this.props.players}/>
          <NotFound handler={NotFoundHandler} />
        </Pages>
      </html>
    );
  }
});

module.exports = global.App = App;

if (typeof window !== 'undefined') {
  // window.onload = function() {
  //   React.render(App(window.APP_PROPS), document);
  // }
}
