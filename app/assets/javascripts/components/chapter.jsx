var Chapter = React.createClass({
  render: function() {
    if (this.props.chapter.number == 1) {
      return (
        <div>
          <h3>{this.props.chapter.title}</h3>
          <p>Chapter 1 conditional works</p>
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
