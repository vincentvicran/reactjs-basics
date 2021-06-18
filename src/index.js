import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import UserCard from './UserCard';
import profile1 from './image/1.png';
import profile2 from './image/2.png';
import profile3 from './image/3.png';

const App = () => {
    return (
        <div className="ui comments">
            <UserCard>
                <div>Hello my name is Alex. I am from UK.</div>
            </UserCard>
            <UserCard>
                <SingleComment name="Shrestha" date="Today at 5:00PM" text="Fabulous!" picture={profile1} />
            </UserCard>
            <UserCard>
                <SingleComment name="Paolo" date="Today at 6:00PM" text="It is amazing!" picture={profile2} />
            </UserCard>
            <UserCard>
                <SingleComment name="Kevin" date="Today at 7:00PM" text="It is superb!" picture={profile3} />
            </UserCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
