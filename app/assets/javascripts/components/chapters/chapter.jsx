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
        <div className="animated slideInDown">
          <Chapter1
            chapter = {this.props.chapter}
            book = {this.state.book}
            parentUpdateBook={this.parentUpdateBook}
          />
        </div>
      )
    } else if (this.props.chapter.number == 2) {
      return (
        <div className="animated slideInDown">
          <Chapter2
            chapter = {this.props.chapter}
            book = {this.state.book}
            parentUpdateBook={this.parentUpdateBook}
            landscape_type= {this.state.landscape_type}
          />
        </div>
      )
    } else if (this.props.chapter.number == 3) {
      return (
        <div className="animated slideInDown">
          <Chapter3
            chapter = {this.props.chapter}
            book = {this.state.book}
            parentUpdateBook={this.parentUpdateBook}
            landscape_type= {this.state.landscape_type}
          />
        </div>
      )
    } else if (this.props.chapter.number == 4) {
      return (
        <div className="animated slideInDown">
          <Chapter4
            chapter = {this.props.chapter}
            book = {this.state.book}
            parentUpdateBook={this.parentUpdateBook}
            landscape_type= {this.state.landscape_type}
          />
        </div>
      )
    } else if (this.props.chapter.number == 5) {
      return (
        <div className="animated slideInDown">
          <Chapter5
            chapter = {this.props.chapter}
            book = {this.state.book}
            parentUpdateBook={this.parentUpdateBook}
            landscape_type= {this.state.landscape_type}
          />
        </div>
      )
    } else if (this.props.chapter.number == 6) {
      return (
        <div className="animated slideInDown">
          <Chapter6
            chapter = {this.props.chapter}
            book = {this.state.book}
            parentUpdateBook={this.parentUpdateBook}
            landscape_type= {this.state.landscape_type}
          />
        </div>
      )
    }
  }
});
