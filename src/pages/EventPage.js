import React from 'react';


function EventPage() {
  const events = [
    {
      title: 'Maulana Azad Day Celebration',
      images: [
        require('../images/Maulana Azad day1.jpg'),
        require('../images/Maulana Azad day2.jpg'),
        require('../images/Maulana Azad Day3.jpg'),
      ],
      description: 'Our institution proudly organized the Maulana Azad Day celebration to honor the legacy of Maulana Abul Kalam Azad, a visionary leader and Indias  first Education Minister. The event was graced by the esteemed presence of our Chief Guest, the Honorable Education Minister, and our College Secretary, who shared inspiring words highlighting the importance of education in shaping society. The celebration included cultural performances, speeches, and a tribute to Maulana Azads contributions to Indias educational and intellectual growth.'
    },
    {
      title: 'Induction Program',
      images: [
        require('../images/Induct1.jpg'),
        require('../images/Induct2.png'),
        require('../images/Induc3.png'),
        
      ],
      description: 'The college successfully organized the Induction Program for the fresher batch, marking the beginning of their academic journey. The event was graced by the esteemed presence of our Chief Guest, the Chief Secretary of Bihar, whose inspiring words motivated the students to strive for excellence. The College Secretary also addressed the gathering, emphasizing the importance of holistic development and academic commitment. The program included an introduction to college life, faculty members, and facilities, ensuring a warm welcome for the new students. It was a memorable event, setting a positive tone for the academic year.'
    },
    {
      title: 'Independence Day ',
      images: [
        require('../images/independenceday1.png'),
        require('../images/Independenceday2.png'),
        require('../images/independenceday3.png'),
      ],
      description: 'The Independence Day celebration at MACET College was a vibrant display of patriotism and unity. Students and staff gathered to honor the nation s freedom with cultural performances, flag hoisting, and inspiring speeches. The event highlighted the sacrifices of freedom fighters and fostered a sense of national pride. It concluded with everyone pledging to contribute to the nation s progress.'
    },
    {
      title: 'Seminar ',
      images: [
        require('../images/seminar1.png'),
        require('../images/seminar2.png'),
        require('../images/seminar3.png'),
      ],
      description: 'MACET organizes diverse seminars for both teachers and students, focusing on academic and professional growth. These events include workshops on innovative teaching techniques, student skill enhancement, and industry trends. Teachers gain insights into modern pedagogical approaches, while students are exposed to career guidance and emerging technologies. Such seminars foster holistic development and bridge the gap between academia and industry..'
    },
    {
      title: 'Health Awarness Programme ',
      images: [
        require('../images/Health1.png'),
        require('../images/Health2.png'),
        require('../images/Health3.png'),
      ],
      description: 'The Health Awareness Programme for Free Eye Check-Up, organized by MACET College, is a commendable initiative aimed at promoting eye health and raising awareness about vision-related issues. This program offers free eye screenings and consultations to students, staff, and members of the surrounding community.'    },
    
    
  ];

  return React.createElement(
    'div',
    { className: 'event-page' },
    events.map((event, index) =>
      React.createElement(
        'div',
        { key: index, className: 'event' },
        React.createElement('h2', null, event.title),
        React.createElement(
          'div',
          { className: 'event-images-grid' },
          event.images.map((imgSrc, imgIndex) =>
            React.createElement('img', {
              key: imgIndex,
              src: imgSrc,
              alt: `${event.title} image ${imgIndex + 1}`,
              className: 'event-image',
            })
          )
        ),
        React.createElement(
          'p',
          null,
          event.description
        )
      )
    )
  );
}

export default EventPage;
