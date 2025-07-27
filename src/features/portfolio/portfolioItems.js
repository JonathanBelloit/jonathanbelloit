export const websites = [
    {
        title: 'Country Cloth Diapers',
        description: 'E-commerce website for a cloth diaper company',
        image: '/CC_cardMedia.png',
        url: 'https://countryclothdiapers.com',
        details: 'CC details',
        colors: {
            mainTheme: '#24450C'
        },
        tech: 'WordPress'
    },
    {
        title: 'Rivertown Munitions',
        description: 'E-commerce website for an ammunition company',
        image: '/riverTown_cardMedia.png',
        url: 'https://rivertownmunitions.com',
        details: 'RTM details',
        colors: {
            mainTheme: '#EC7210'
        },
        tech: 'WordPress'
    },
    {
        title: '3 Rivers Marketing',
        description: 'Website for a Marketing Company',
        image: '/3rm_cardMedia.png',
        url: 'https://3rmpittsburgh.com',
        details: '3RM details',
        colors: {
            mainTheme: '#CF001F'
        },
        tech: 'WordPress'
    },
    {
        title: 'Warrior Ammunition',
        description: 'E-commerce website for a small business',
        image: '/warrior_cardMedia.png',
        url: 'https://warriorammunition.com',
        details: 'WA details',
        colors: {
            mainTheme: '#EC7210'
        },
        tech: 'WordPress'
    },
    {
        title: 'Top Dog Development',
        description: 'My Agency website',
        image: '/tdd_cardMedia.png',
        url: 'https://topdogwebdev.com',
        details: 'TDD details',
        colors: {
            mainTheme: '#AC0E10'
        },
        tech: 'React, Material-UI, Framermotion'
    },

]

export const apps = [
    {
        id: 1,
        title: 'Inspect Rimersburg',
        description: 'A mobile app for the Rimersburg, PA community',
        image: '/ir_cardMedia.png',
        url: 'https://inspect-rimersburg.topdogwebdev.com',
        color: {
            theme1: '#1e2a59',
            theme2: '#FFF',
            theme3: '#591E2B',
            theme4: '#C7D9B6'
        },
        details: {
            problem: 'The Rimersburg Borough Council needed a comprehensive system to manage rental property inspections. Without an existing digital process, tracking inspections was cumbersome, time-consuming, and error-prone. Council members struggled to maintain accurate records and ensure compliance.',
            solution: 'I architected and developed a full-stack web application that revolutionizes the inspection process. The system features: dynamic form generation based on admin-defined criteria, real-time inspection scheduling, comprehensive property and contact management, automated compliance tracking, and integrated communication tools. The dashboard provides actionable insights with overdue inspection alerts and completion analytics.',
            technicalDetails: 'Built with a modern tech stack: React with Redux for state management, Material-UI for responsive design, Framer-Motion for smooth animations, Express.js/Node.js backend with RESTful APIs, MongoDB with Mongoose ODM for data persistence, and JWT-based authentication for security. Implemented responsive design principles and progressive web app features.',
            backgroundImg: '/ir_background.png',
            metrics: {
                'Efficiency Improvement': '75%',
                'Data Accuracy': '95%+',
                'User Satisfaction': '4.8/5'
            }
        },
        tech: 'React | Redux | Material-UI | JWT | Framermotion | Express | Node | MongoDB | Mongoose',
        public: false,
        demo: false,
        codeLink: 'https://inspect-rimersburg.topdogwebdev.com'
    },
    {
        id: 3,
        title: 'Tow Call',
        description: 'A mobile app a towing company',
        image: '/tc_cardMedia3d.png',
        url: 'https://gcc-council-app.topdogwebdev.com',
        color: {
            theme1: '#2E7D32',
            theme2: '#FCEBDC',
            theme3: '#402E7D',
            theme4: '#DCFCDD'
        },
        details: {
            problem: 'The main problem was that the towing company frequently had issues finding location of their customers.',
            solution: "Developed a mobile app that allows a customer to request a tow and make payment either directly from the app or from the company's url.  The application automatically pulls the gps coordinates of the customer making the request, notifies the towing company, and calculates the cost of the tow based on the location.  Once the tow is requested, the tow truck driver can simply press a button that automatically utilizes either google or apple maps based on the tow truck driver's device.",
            technicalDetails: "The UI is built with React, Material-UI, and Framer-Motion.  The backend utilizes Firebase to store the customer's information and tow request information.  The app is secured with Firebase authentication.  Payments are processed through PayPal using react-paypal-js.",
            backgroundImg: null
        },
        tech: 'React | Redux Toolkit | Material-UI | Firebase | Framer-Motion',
        public: false,
        demo: false,
        codeLink: ''
    },
    {
        id: 4,
        title: 'Grace Community Church Directory',
        description: 'Online directory for the Grace Community Church',
        image: '/gcc_cardMedia.png',
        url: '',
        color: {
            theme1: '#46819E',
            theme2: '#EBE896',
            theme3: '#9E2632',
            theme4: '#60369E'
        },
        details: {
            problem: 'Grace Community Church wanted to have an online directory for their members.  Their current directory was in paper form, and it was difficult to keep up to date. Their current directory was also difficult to search through, and it was difficult to find contact information for the entire church.',
            solution: 'I built a full-stack web application that allows members of the congregation to search for information about the church, and to find contact information for the church. The app also allows the church to update their directory, and add new members, without having to get new directories printed.',
            technicalDetails: 'The app is built with React, Redux Toolkit, Material-UI, and Framer-Motion on the front-end, and utilizes Firebase for authentication and database storage.',
            backgroundImg: null
        },
        tech: 'React | Material-UI | Firebase',
        public: true,
        demo: false,
        codeLink: ''
    }
]
