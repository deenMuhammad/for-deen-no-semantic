import React from 'react';
import './seed'

class PlayerList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      players: []
    }

    this.handlePlayerUpVote = this.handlePlayerUpVote.bind(this)
  }
  handlePlayerUpVote(playerId) {
    const nextPlayers = this.state.players.map((player) => {
      if (player.id === playerId) {
        return Object.assign({}, player, {
          votes: player.votes + 1,
        })
      } else {
        return player
      }
    }) 
    this.setState({
      players: nextPlayers,
    })
  }

  componentDidMount() {
    this.setState({ players: window.Seed.players })
  }
  render() {
    const players = this.state.players.sort((a, b) => (
      b.votes - a.votes
    ))
    const playerComponent = players.map((player) => (
      <div className='ui unstackable items'>
        <Player
          key={'player-' + player.id}
          id={player.id}
          name={player.name}
          club={player.club}
          url={player.url}
          votes={player.votes}
          avatar={player.avatar}
          playerImg={player.playerImg}
          onVote={this.handlePlayerUpVote}
        />
        <ScoreBar
          key={'player-' + player.id}
          id={player.id}
          name={player.name}
          club={player.club}
          url={player.url}
          votes={player.votes}
          avatar={player.avatar}
          playerImg={player.playerImg}
          onVote={this.handlePlayerUpVote}
        />
      </div>
    ))

    return (
        playerComponent
    )
  }
}

class Player extends React.Component {
  constructor(props) {
    super(props)

    this.handleUpVote = this.handleUpVote.bind(this)
  }
  handleUpVote() {
    this.props.onVote(this.props.id)
  }

  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img alt='plrImg' src={this.props.playerImg} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
              <button className='large caret up icon'>+</button>
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a rel='noopener noreferrer' href={this.props.url} target='_blank'>
              {this.props.name}
            </a>
            <p>
              {this.props.club}
            </p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img alt='avtImg'
              className='ui avatar image'
              src={this.props.avatar}
            />
          </div>
        </div>
      </div>
    )
  }
}

class ScoreBar extends React.Component {
  constructor(props) {
    super(props)

    this.handleUpVote2 = this.handleUpVote2.bind(this)
  }

  handleUpVote2() {
    this.props.onVote(this.props.id)
  }

  render() {
    return (
      <div>
        <p>
          {this.props.votes}
        </p>
      </div>
    )
  }
}
export default PlayerList