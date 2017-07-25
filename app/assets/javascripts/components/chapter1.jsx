var Chapter1 = React.createClass({

  getInitialState: function(){
    return {
      landscape_type: this.props.book.landscape_type,
      family_type: this.props.book.family_type,
      landscape_image: "",
    }
  },

  updateChapterOneFieldsSubmit: function(e){

    e.preventDefault();
    $.ajax({
      url: "/books/1",
      dataType: 'json',
      type: 'PATCH',
      data: {
        book: {
          landscape_type: this.state.landscape_type,
          family_type: this.state.family_type,
        },
      },
      success: function(book) {
        this.props.parentUpdateBook(book);
      }.bind(this),
      error: function(response, status, err) {
        console.log("An error occurred");
      }
    });

    if (this.state.family_type == "bear") {
      $('.family_type_image').hide();
      $('#bear').fadeIn();
    } else if (this.state.family_type == "puffin") {
      $('.family_type_image').hide();
      $('#puffin').fadeIn();
    } else if (this.state.family_type == "banana slug") {
      $('.family_type_image').hide();
      $('#banana-slug').fadeIn();
    } else if (this.state.family_type == "donkey") {
      $('.family_type_image').hide();
      $('#donkey').fadeIn();
    }
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

          <div className = "family_type_image" id = "bear" style={{display:'none'}} >
            <img src="https://farm5.staticflickr.com/4297/35992200362_e71c49f967_m.jpg" alt="bear"/>
          </div>

          <div className = "family_type_image" id = "puffin" style={{display:'none'}} >
            <img src="https://farm5.staticflickr.com/4311/35992215332_2248b3f160_m.jpg" alt="puffin"/>
          </div>

          <div className = "family_type_image" id = "banana-slug" style={{display:'none'}} >
            <img src="https://farm5.staticflickr.com/4314/36119855596_af2db4c0fd_m.jpg " alt="banana slug"/>
          </div>

          <div className = "family_type_image" id = "donkey" style={{display:'none'}} >
            <img src="https://farm5.staticflickr.com/4321/35992209302_603a1ae309_m.jpg " alt="donkey"/>
          </div>

          <Chapter1Text landscape_type = {this.state.landscape_type} family_type = {this.state.family_type} />

        </div>

      )
  }
});
