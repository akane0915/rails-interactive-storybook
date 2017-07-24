var Chapter1 = React.createClass({

  getInitialState: function(){
    return {
      landscape_type: this.props.book.landscape_type,
      family_type: this.props.book.family_type,
    }
  },

  updateChapterOneFieldsSubmit: function(e){
    e.preventDefault();
    $.ajax({
      url: "/books/1",
      dataType: 'json',
      type: 'PATCH',
      data: {book: {
        landscape_type: this.state.landscape_type,
        family_type: this.state.family_type}
      },
      success: function(book) {
        this.props.parentUpdateBook(book);
      }.bind(this),
      error: function(response, status, err) {
        console.log("An error occurred");
      }
    });
  },

  handleLandscapeChange: function(e){
    this.setState({landscape_type: e.target.value});
  },

  handleFamilyChange: function(e){
    this.setState({family_type: e.target.value});
  },

  render: function() {
      return (
        <div>
          <h1>{this.props.chapter.title}</h1>

          <form onSubmit={this.updateChapterOneFieldsSubmit}>
            <h3>Choose your landscape</h3>

            <select name="book[landscape_type]" value={this.state.landscape_type}
            onChange={this.handleLandscapeChange}>

              <option value=""></option>
              <option value="forest">Forest</option>
              <option value="tundra">Tundra</option>
              <option value="grassland">Grassland</option>
              <option value="desert">Desert</option>
              <option value="ocean">Ocean</option>
            </select>

            <h3>Then pick an animal</h3>

            <select name="book[family_type]" value={this.state.family_type}
            onChange={this.handleFamilyChange}>

              <option value=""></option>
              <option value="bear">Bear</option>
              <option value="puffin">Puffin</option>
              <option value="banana slug">Banana Slug</option>
              <option value="donkey">Donkey</option>
            </select>

            <h3>Now Click Save!</h3>

            <input type="submit" value="Save" className='btn btn-primary' />
          </form>

          <p>
            Once upon a time, deep in a <strong><em>{this.state.landscape_type}</em></strong> lived a <strong><em>{this.state.family_type}</em></strong> family.  There was a great  big Papa <strong><em>{this.state.family_type}</em></strong>, a medium sized Mama <strong><em>{this.state.family_type}</em></strong>, and a wee little Baby <strong><em>{this.state.family_type}</em></strong>.
          </p>
        </div>
      )
  }
});
