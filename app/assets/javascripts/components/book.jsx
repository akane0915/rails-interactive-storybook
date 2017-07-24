var Book = React.createClass({
  render: function() {
    return (
      <div>
        <a href={"books/" + this.props.book.id + "/chapters/1"}>
          Goldilocks and the Three Bears...or Something Like That
        </a>
      </div>
    )
  }
});
