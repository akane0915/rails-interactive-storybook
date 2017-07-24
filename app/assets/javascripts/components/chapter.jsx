var Chapter = React.createClass({

  getInitialState: function(){
    return {
      book: this.props.book,
    }
  },

  parentUpdateBook: function(formData){
    this.setState({book: formData});
  },

  render: function() {
    if (this.props.chapter.number == 1) {
      return (
        <div>
          <Chapter1
            chapter = {this.props.chapter}
            book = {this.state.book}
            parentUpdateBook={this.parentUpdateBook}
          />
        </div>
      )
    } else if (this.props.chapter.number == 2) {
      return (
        <div>
        <Chapter2
          chapter = {this.props.chapter}
          book = {this.state.book}
          parentUpdateBook={this.parentUpdateBook}
        />
        </div>
      )
    }
  }
});
