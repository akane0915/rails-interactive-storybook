var Chapter1Text = React.createClass({

  render: function() {
    return (
      <div>

        <p>
          Once upon a time, deep in a <strong><em>{this.props.landscape_type}</em></strong> lived a <strong><em>{this.props.family_type}</em></strong> family.  There was a great  big Papa <strong><em>{this.props.family_type}</em></strong>, a medium sized Mama <strong><em>{this.props.family_type}</em></strong>, and a wee little Baby <strong><em>{this.props.family_type}</em></strong>.
        </p>
      </div>
    )
  }
});
