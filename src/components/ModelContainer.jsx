import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { reset, front, back, inside, side } from '../store/threeSlice';

const Label = ({ btnEvent, text }) => {
  const dispatch = useDispatch();

  return (
    <li
      onClick={(e) => {
        console.log(e);
         dispatch(btnEvent);
      }}
      onTouchEnd={(e) => {
        console.log(e);
        dispatch(btnEvent);
      }}
    >
      <div className="circle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span className="word">{text}</span>
    </li>
  );
};

export const ModelContainer = () => {
  const [widthSize] = useState(window.innerWidth);
  const [description, setDescription] = useState('');
  const [count, setCount] = useState(0);

  const word = [
    ` The McLaren MP4-12C, later known simply as the McLaren 12C, is a sports car that was designed and manufactured by McLaren Automotive. It was the first ever production car wholly designed and built by McLaren, and their first production road car since the McLaren F1, which was last built in 1998. The car's final design was unveiled in September 2009 and was launched in mid-2011.`,
    widthSize < 400 ? '' : ` The MP4-12C uses a carbon fibre composite chassis, and is powered by a longitudinally-mounted McLaren M838T 3.8 L (3,799 cc) twin-turbocharged V8 engine, generating approximately 600 PS (592 hp; 441 kW) at 7,500 rpm and 600 N⋅m (443 lbf⋅ft) of torque at 5,600 rpm. The car makes use of Formula 1-sourced technologies such as "brake steer", where the inside rear wheel is braking during fast cornering to reduce understeer. Power is transmitted to the wheels through a seven-speed dual-clutch transmission Seamless-Shift gearbox (SSG) manufactured by Graziano Trasmissioni.`,
    widthSize < 400 ? '' : ` A convertible version of the car called the MP4-12C Spider, renamed the 12C Spider in 2012, was also available. In February 2014, McLaren announced the related 650S, with revised bodywork, upgraded engine and other technical improvements. In April 2014, McLaren announced the end of production of the 12C.`
  ].filter(_ => _).join('\n');

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (count >= word.length) {
        clearInterval(typingInterval);
        return;
      }
      
      setCount(count + 1);
      setDescription(description + word[count]);
    }, 10);

    return () => {
      clearInterval(typingInterval);
    }
  }, [description, count])

  return (
    <div className="model-container">
      <div className="model-info">
        <h1>McLAREN</h1>
        <h3>MP4-12C Ultimate</h3>
        <pre>
          {widthSize}
          {description}
          {description.length === word.length ? '' : '_'}
        </pre>
      </div>
      <div className="change-position">
        <ul>
          <Label btnEvent={reset()} text="Reset" />
          <Label btnEvent={front()} text="Front" />
          <Label btnEvent={back()} text="Back" />
          <Label btnEvent={side()} text="Side" />
          <Label btnEvent={inside()} text="Seat" />
        </ul>
      </div>
    </div>
  );
};
