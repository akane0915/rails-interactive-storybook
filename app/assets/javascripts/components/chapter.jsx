var Chapter = React.createClass({

  getInitialState: function(){
    return {
      book: this.props.book,
    }
  },

  parentBookSubmit: function(formData){

    $.ajax({
     url: "/books/1/chapters/1",
     dataType: 'json',
     type: 'PATCH',
     data: formData,

     success: function(book) {

       this.setState({book: book});

     }.bind(this),

     error: function(response, status, err) {

       console.log("An error occurred")
     }


    });
  },

  render: function() {
    if (this.props.chapter.number == 1) {
      return (
        <div>
          <Chapter1
            chapter = {this.state.chapter}
            book = {this.state.book
            parentBookSubmit={this.parentBookSubmit
          }/>
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
