var Chapter = React.createClass({

  render: function() {
    if (this.props.chapter.number == 1) {
      return (
        <div>
          <Chapter1 chapter = {this.props.chapter} book = {this.props.book}/>
        </div>
      )
    } else if (this.props.chapter.number == 2) {
      return (
        <div>
          <h3>{this.props.chapter.title}</h3>
          <p>Not Chapter 1</p>
        </div>
      )
    }
  }
});
