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

          <Chapter1Form
            updateChapterOneFieldsSubmit = {this.updateChapterOneFieldsSubmit} handleLandscapeChange = {this.handleLandscapeChange}
            handleFamilyChange = {this.handleFamilyChange}
            landscape_type = {this.state.landscape_type}
            family_type = {this.state.family_type}
          />

          <Chapter1Text landscape_type = {this.state.landscape_type} family_type = {this.state.family_type} />

        </div>

      )
  }
});
