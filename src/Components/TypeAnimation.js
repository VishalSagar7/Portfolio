import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'i know frontend developement',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'i know backend developement',
        1000,
        'i know RESTful APIs',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};


export default ExampleComponent;
