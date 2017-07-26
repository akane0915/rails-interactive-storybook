var Book = React.createClass({
  render: function() {
    return (
      <div>
        <div className="book_title animated slideInLeft">
          <a id= "book1_title_link"  href={"books/" + this.props.book.id + "/chapters/1"}>
            Goldilocks and the Three Bears...or Something Like That
          </a>
        </div>
      </div>
    )
  }
});
