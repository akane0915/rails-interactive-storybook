var Chapter1 = React.createClass({

  getInitialState: function(){
    return {
      landscape_type: this.props.book.landscape_type,
    }
  },

  render: function() {
      return (
        <div>
          <h3>{this.props.chapter.title}</h3>

          <input
            landscape_type="book[landscape_type]"
            type="string"
            placeholder="Landscape type"
            value={this.state.landscape_type}
            onChange={this.handleNameChange}
            className="string form-control"
          />

          <LandscapeTypeForm book = {this.state.landscape_type}/>

          <p>
            Once upon a time, deep in a {this.props.book.landscape_type} lived a {this.props.book.family_type} family.  There was a great  big Papa {this.props.book.family_type}, a medium sized Mama {this.props.book.family_type}, and a wee little Baby {this.props.book.family_type}.
          </p>
        </div>
      )
  }
});
