var Chapter2 = React.createClass({

  getInitialState: function(){
    return {
      food: this.props.book.food,
      family_type: this.props.book.family_type,
    }
  },

  updateChapterTwoFieldsSubmit: function(e){
    e.preventDefault();
    $.ajax({
      url: "/books/1",
      dataType: 'json',
      type: 'PATCH',
      data: {book: { food: this.state.food }
      },
      success: function(book) {
        this.props.parentUpdateBook(book);
      }.bind(this),
      error: function(response, status, err) {
        console.log("An error occurred");
      }
    });
  },

  handleFoodChange: function(e){
    this.setState({food: e.target.value});
  },

  render: function() {
      return (
        <div>
          <h1>{this.props.chapter.title}</h1>

          <form onSubmit={this.updateChapterTwoFieldsSubmit}>
            <h3>Pick a food!</h3>

            <select name="book[food]" value={this.state.food}
            onChange={this.handleFoodChange}>

              <option value=""></option>
              <option value="porridge">Porridge</option>
              <option value="fried rice">Fried Rice</option>
              <option value="pho">Pho</option>
              <option value="kebabs">Kebabs</option>
              <option value="gazpacho">Gazpacho</option>
            </select>

            <h3>Then Click Save.</h3>

            <input type="submit" value="Save" className='btn btn-primary' />
          </form>

          <Chapter2Text food = {this.state.food} family_type = {this.state.family_type} />

        </div>

      )
  }
});
