var Books = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.books.map(function(book){
          return (
            <div>
              <Book book = {book}/>
            </div>
          )
        })}
      </div>
    )
  }
});
