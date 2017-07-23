var Book = React.createClass({
  render: function() {
    return (
      <div>
        <h3>{this.props.book.title}</h3>
      </div>
    )
  }
});
