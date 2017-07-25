var Chapter = React.createClass({

  getInitialState: function(){
    return {
      book: this.props.book,
      landscape_type: this.props.book.landscape_type

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
    } else if (this.props.chapter.number == 3) {
      return (
        <div>
          <Chapter3
            chapter = {this.props.chapter}
            book = {this.state.book}
            parentUpdateBook={this.parentUpdateBook}
          />
        </div>
      )
    }





  }
});
