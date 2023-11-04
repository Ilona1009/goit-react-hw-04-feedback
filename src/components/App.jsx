import { Component } from 'react';
import OptionsList from './Feedback/Feedback'
import Section from './Section/Sections'
import Statistics from './Statistic/Statistic'
import Notification from './Notification/Notification';

 export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
   }
   
    leaveFeedback = feedbackName => {
    this.setState(prevState => ({
      [feedbackName]: prevState[feedbackName] + 1,
    }));
   };
   
     total = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

    positivePercentage = () =>
    this.state.good === 0
      ? 0
      : Math.ceil((this.state.good / this.total()) * 100);

   render() {
     const options = Object.keys(this.state);
     return (
       <>
         <Section title="Please leave feedback">
             <OptionsList options={options} leaveFeedback={this.leaveFeedback} />
         </Section>
         
         {(this.total()=== 0)
           ?(<Section>
            <Notification message="There is no feedback"></Notification>{' '}
          </Section>)
           :(<Statistics             
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.total()}
              positivePercentage={this.positivePercentage()}
            ></Statistics>)
   }
       </>
      
    )
  }
}


