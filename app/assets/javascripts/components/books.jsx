var Books = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.books.map(function(book){
          return (
            <div key={book.id}>
              <Book book = {book}/>
            </div>
          )
        })}
      </div>
    )
  }
});
