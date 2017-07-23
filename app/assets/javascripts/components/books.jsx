var Books = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.books.map(function(book){
          return (
            <div>
              <h3>{book.title}</h3>
            </div>
          )
        })}
      </div>
    )
  }
});
