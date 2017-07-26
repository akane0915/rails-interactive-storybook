var Chapter6 = React.createClass({

  getInitialState: function(){
    return {
      bed_type: this.props.book.bed_type,
      family_type: this.props.book.family_type,
      house_type: this.props.book.house_type,
      girl_name: this.props.book.girl_name,
      landscape_type: this.props.landscape_type,
    }
  },


  render: function() {
      return (
        <div>
          <LandscapeType landscape_type = {this.state.landscape_type}/>

          <h1>{this.props.chapter.title}</h1>

          <Chapter6Text
            family_type = {this.state.family_type}
            bed_type = {this.state.bed_type}
            house_type = {this.state.house_type}
            girl_name = {this.state.girl_name}
          />

        </div>

      )
  }
});
