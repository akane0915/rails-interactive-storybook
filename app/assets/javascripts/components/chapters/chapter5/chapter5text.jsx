var Chapter5Text = React.createClass({

  render: function() {
    return (
      <div>
        <p>
          So, they went into the living room and Papa <strong><em>{this.props.family_type}</em></strong> said, in a deep voice, "Somebody’s been sitting in my <strong><em>{this.props.seat_type}</em></strong>.” Mama <strong><em>{this.props.family_type}</em></strong> said, in a sweet voice, "Somebody’s been sitting in my <strong><em>{this.props.seat_type}</em></strong>.” Then, Baby <strong><em>{this.props.family_type}</em></strong> said, as he began to cry, "Somebody’s been sitting in my <strong><em>{this.props.seat_type}</em></strong> and broke it!"
        </p>

        <p>
            So, they went into the bedroom and Papa <strong><em>{this.props.family_type}</em></strong> said, in a deep voice, "Somebody’s been sleeping in my <strong><em>{this.props.bed_type}</em></strong>.” Mama <strong><em>{this.props.family_type}</em></strong> said, in a sweet voice, "Somebody’s been sleeping in my <strong><em>{this.props.bed_type}</em></strong>...”
        </p>
      </div>
    )
  }
});
