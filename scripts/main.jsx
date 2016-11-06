const calendarDiv = document.querySelector('.react-calendar');

class CalendarLabel extends React.Component {
  render() {
    return(
      <label htmlFor={this.props.htmlFor} className={this.props.className}>{this.props.title}</label>
    )
  }
}

class CalendarInput extends React.Component {
  render() {
    return(
      <input id={this.props.id} className={this.props.className} name={this.props.name} type='text' value={this.props.value} />
    )
  }
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    
    // January is 0th index (today.getMonth() + 1)
    let today = new Date(),
        day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate(),
        month = today.getMonth() + 1 < 10 ? '0' + today.getMonth() + 1 : today.getMonth() + 1,
        year = today.getFullYear();
    today = day + '. ' + month + '. ' + year;
    
    this.state = {
      currentDate: today,
      calendarVisible: false
    }
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  render() {
    return(
      <div>
        <CalendarLabel className='calendar-label' htmlFor='calendar-input' title='Select the date:' />
      
        <CalendarInput id='calendar-input' className='calendar-input' name='calendar-input' value={this.state.currentDate} />
      </div>
    )
  }
  
  handleClick() {
    this.setState = {
      calendarVisible: false
    }
  }
}

ReactDOM.render(<Calendar />, calendarDiv);
